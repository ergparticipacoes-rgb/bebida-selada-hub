interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  tag?: string;
}

export default function NewsCard({ title, excerpt, date, tag }: NewsCardProps) {
  return (
    <div className="rounded-2xl border border-[#001F33]/10 bg-white p-6 shadow-sm hover:shadow-md transition">
      {tag && (
        <span className="inline-block text-xs font-semibold tracking-wider text-[#D9B98E] uppercase mb-2">
          {tag}
        </span>
      )}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{excerpt}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
}
