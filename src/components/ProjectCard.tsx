interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow p-4">
      <img src={image} alt={title} className="rounded-lg mb-4 w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
    </div>
  );
}
