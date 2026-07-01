'use client'

import { useEffect, useRef } from 'react'

interface DitheredPhotoProps {
  src: string
  width?: number
  height?: number
  className?: string
  alt?: string
}

export default function DitheredPhoto({
  src,
  width = 220,
  height = 270,
  className = 'dithered-canvas',
  alt = '',
}: DitheredPhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      canvas.width  = width
      canvas.height = height

      // Draw at target size
      ctx.drawImage(img, 0, 0, width, height)

      const imageData = ctx.getImageData(0, 0, width, height)
      const data = imageData.data

      // Step 1 — grayscale via luminance weights
      for (let i = 0; i < data.length; i += 4) {
        const gray = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2])
        data[i] = data[i + 1] = data[i + 2] = gray
      }

      // Step 2 — Floyd-Steinberg dithering
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4
          const oldVal = data[idx]
          const newVal = oldVal < 128 ? 0 : 255
          const err = oldVal - newVal

          data[idx] = data[idx + 1] = data[idx + 2] = newVal

          // Distribute error: right, bottom-left, bottom, bottom-right
          if (x + 1 < width) {
            data[idx + 4]     = clamp(data[idx + 4]     + (err * 7) / 16)
            data[idx + 4 + 1] = clamp(data[idx + 4 + 1] + (err * 7) / 16)
            data[idx + 4 + 2] = clamp(data[idx + 4 + 2] + (err * 7) / 16)
          }
          if (x - 1 >= 0 && y + 1 < height) {
            const bl = idx + width * 4 - 4
            data[bl]     = clamp(data[bl]     + (err * 3) / 16)
            data[bl + 1] = clamp(data[bl + 1] + (err * 3) / 16)
            data[bl + 2] = clamp(data[bl + 2] + (err * 3) / 16)
          }
          if (y + 1 < height) {
            const b = idx + width * 4
            data[b]     = clamp(data[b]     + (err * 5) / 16)
            data[b + 1] = clamp(data[b + 1] + (err * 5) / 16)
            data[b + 2] = clamp(data[b + 2] + (err * 5) / 16)
          }
          if (x + 1 < width && y + 1 < height) {
            const br = idx + width * 4 + 4
            data[br]     = clamp(data[br]     + (err * 1) / 16)
            data[br + 1] = clamp(data[br + 1] + (err * 1) / 16)
            data[br + 2] = clamp(data[br + 2] + (err * 1) / 16)
          }
        }
      }

      // Step 3 — make white pixels transparent so CSS bg shows through
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 255) {
          data[i + 3] = 0
        }
      }

      ctx.putImageData(imageData, 0, 0)
    }

    img.src = src
  }, [src, width, height])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label={alt}
      role={alt ? 'img' : 'presentation'}
      style={{ width, height }}
    />
  )
}

function clamp(v: number): number {
  return Math.max(0, Math.min(255, Math.round(v)))
}
