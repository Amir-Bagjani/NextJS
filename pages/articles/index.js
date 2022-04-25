
import { useRouter } from "next/router";

const Articles = ({ articles }) => {
    const router = useRouter()
  return (
    <div>
      <h1>Todos list</h1>
      <button onClick={() => router.push("/articles/sport")}>sport</button>
      <button onClick={() => router.push("/articles/politic")}>politic</button>
      {articles?.map((article) => (
        <div key={article.id}>
          {article.id} - {article.title} - {article.category}
          <hr />
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4040/articles");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}

export default Articles;
