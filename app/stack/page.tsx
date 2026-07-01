import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stack — Earl Clyde Micolob Bañez',
  description: 'Tools, languages, and frameworks I work with.',
}

const STACK_CATEGORIES = [
  {
    heading: 'Languages',
    techs: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL', 'R', 'C++'],
  },
  {
    heading: 'Frontend',
    techs: ['React', 'Next.js', 'Astro', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    heading: 'Backend & APIs',
    techs: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST API', 'GPT API'],
  },
  {
    heading: 'Databases',
    techs: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    heading: 'Cloud & DevOps',
    techs: ['AWS', 'Vercel', 'Serverless Deployment'],
  },
  {
    heading: 'AI & Machine Learning',
    techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Roboflow', 'OpenCV'],
  },
  {
    heading: 'Data Science & Analysis',
    techs: ['Kaggle', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    heading: 'Model Deployment',
    techs: ['Flask', 'Streamlit', 'Gradio'],
  },
  {
    heading: 'Tools',
    techs: ['Git', 'GitHub', 'Figma', 'Conventional Commits'],
  },
]

export default function StackPage() {
  return (
    <>
      <div className="page-hero page-container">
        <p className="page-hero__eyebrow">Technologies</p>
        <h1 className="page-hero__title">stack</h1>
        <p className="page-hero__desc">
          Tools and technologies I reach for across full-stack web, AI/ML, data analysis, cloud deployment, and production-facing student platforms.
        </p>
      </div>

      <div className="stack-page-content page-container">
        {STACK_CATEGORIES.map(cat => (
          <div key={cat.heading} className="stack-category">
            <p className="stack-category__heading">{cat.heading}</p>
            <ul className="tech-grid" aria-label={cat.heading} role="list">
              {cat.techs.map(tech => (
                <li key={tech}>
                  <span className="tech-pill">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
          <Link href="/#experience" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            ← Back to overview
          </Link>
        </div>
      </div>
    </>
  )
}
