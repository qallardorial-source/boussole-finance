import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');
const testsDirectory = path.join(process.cwd(), 'content/tests');

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: number;
  image?: string;
  content: string;
}

export interface Test {
  slug: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  publishedAt: string;
  affiliate: boolean;
  affiliateLink?: string;
  pros: string[];
  cons: string[];
  image?: string;
  content: string;
}

function ensureDirectoryExists(directory: string) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

export function getAllArticles(): Article[] {
  ensureDirectoryExists(articlesDirectory);

  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        publishedAt: data.publishedAt,
        readTime: data.readTime,
        image: data.image,
        content,
      } as Article;
    });

  return articles.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | null {
  ensureDirectoryExists(articlesDirectory);

  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category,
      publishedAt: data.publishedAt,
      readTime: data.readTime,
      image: data.image,
      content,
    } as Article;
  } catch {
    return null;
  }
}

export function getAllTests(): Test[] {
  ensureDirectoryExists(testsDirectory);

  const fileNames = fs.readdirSync(testsDirectory);
  const tests = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(testsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        rating: data.rating,
        publishedAt: data.publishedAt,
        affiliate: data.affiliate,
        affiliateLink: data.affiliateLink,
        pros: data.pros || [],
        cons: data.cons || [],
        image: data.image,
        content,
      } as Test;
    });

  return tests.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getTestBySlug(slug: string): Test | null {
  ensureDirectoryExists(testsDirectory);

  try {
    const fullPath = path.join(testsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category,
      rating: data.rating,
      publishedAt: data.publishedAt,
      affiliate: data.affiliate,
      affiliateLink: data.affiliateLink,
      pros: data.pros || [],
      cons: data.cons || [],
      image: data.image,
      content,
    } as Test;
  } catch {
    return null;
  }
}

export function getArticlesByCategory(category: string): Article[] {
  const articles = getAllArticles();
  return articles.filter(article =>
    article.category.toLowerCase() === category.toLowerCase()
  );
}

export function getTestsByCategory(category: string): Test[] {
  const tests = getAllTests();
  return tests.filter(test =>
    test.category.toLowerCase() === category.toLowerCase()
  );
}
