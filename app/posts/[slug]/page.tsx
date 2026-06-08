import { getPost, getAllPostsMeta } from "../../../lib/posts";

export async function generateStaticParams() {
  return getAllPostsMeta().map(p => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="flex gap-3 text-sm text-gray-500 mb-8">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readingTime} min read</span>
      </div>
      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
