interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <a href={`/blog/${slug}`} className="block border-b pb-4 hover:opacity-90">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-neutral-500 italic">{date}</p>
      <p className="text-sm text-neutral-700 dark:text-neutral-300">{excerpt}</p>
    </a>
  );
}
