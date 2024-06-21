import { DUMMY_NEWS } from "@/dummy-data";
import Link from "next/link";

export default function NewsPage() {
  const newsItems = DUMMY_NEWS;
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {newsItems.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
