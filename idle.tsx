'use client';

import { Hero } from "./Hero";
import { posts } from "./posts";
import { PostCard } from "./PostCard";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="posts" className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">最新ブログ</h2>
          <p className="text-sm text-gray-600">{posts.length}件</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <PostCard
           key={p.slug} post={p}></PostCard>
          ))}
        </div>
      </section>

      <section id="profile" className="mx-auto max-w-5xl px-4 pb-10">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Profile</h2>
          <p className="mt-2 text-gray-700">
            もも / Momo（アイドル見習い）🍑
            <br />
            好き：いちご・ダンス・キラキラ
          </p>
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-5xl px-4 pb-14">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Schedule</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>・2/28：ミニライブ（渋谷）</li>
            <li>・3/10：配信トーク</li>
            <li>・3/20：撮影会</li>
          </ul>
        </div>
      </section>
    </>
  );
}