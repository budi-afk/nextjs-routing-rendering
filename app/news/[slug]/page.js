import { DUMMY_NEWS } from "@/dummy-data";

export default function NewsPageDetail({ params }) {
  const slug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}