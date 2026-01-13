import { getAllArticles } from "@/lib/mdx";
import ArticlesClient from "@/components/ArticlesClient";

export default function ArticlesPage() {
  const allArticles = getAllArticles();

  return <ArticlesClient allArticles={allArticles} />;
}
