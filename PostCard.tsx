import Link from "next/link";
import type { Post } from "./posts";
import type { ReactElement } from "react";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props): ReactElement {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-pink-600">
          {new Date(post.date).toLocaleDateString("ja-JP")}
        </p>
        <div className="flex gap-2">
          {post.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-pink-50 px-2 py-1 text-[10px] font-semibold text-pink-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <h2 className="mt-2 line-clamp-2 text-lg font-bold">{post.title}</h2>
      <p className="mt-2 line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>

      <Link
        href={`/posts/${post.slug}`}
        className="mt-4 inline-block text-sm font-semibold text-pink-700 hover:underline"
      >
        続きを読む →
      </Link>
    </article>
  );
}