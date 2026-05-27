export interface Project {
  number: string;
  name: string;
  year: string;
  status: "ACTIVE" | "COMPLETED";
  tags: string[];
  description: string;
  color: string;
  nameColor: string;
  icon: string;
  href: string | null;
  featured: boolean;
}
