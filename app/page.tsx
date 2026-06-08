import Link from "next/link";
import { getAllPostsMeta } from "../lib/posts";

export default function Home() {
  const posts = getAllPostsMeta();
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-gray-500 mb-10 text-sm">
        {posts.length} post{posts.length !== 1 ? "s" : ""}
      </p>
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                {post.title}
              </h2>
            </Link>
            <div className="flex gap-3 text-xs text-gray-500 mt-1 mb-2">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </div>
            <p className="text-gray-400 text-sm">{post.excerpt}</p>
            <div className="flex gap-2 mt-2">
              {post.tags.map(tag => (
                <Link key={tag} href={`/tags/${tag}`}
                  className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded hover:bg-blue-100 dark:hover:bg-blue-900">
                  {tag}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
