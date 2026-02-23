import { notFound } from "next/navigation";
import { posts } from "./posts";

type Props = {
  params: { slug: string };
};

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-pink-600">
          {new Date(post.date).toLocaleDateString("ja-JP")}
        </p>
        <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>

        <div className="mt-6 whitespace-pre-wrap leading-7 text-gray-800">
          {post.content}
        </div>

        <div className="mt-6 flex gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-700"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}