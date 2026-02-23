import Image from "next/image";
import { JSX } from "react";

export function Hero(): JSX.Element {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-10">
      <div className="grid items-center gap-6 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-pink-600">OFFICIAL BLOG</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            今日もキラっと更新中 ✨
          </h1>
          <p className="mt-3 text-gray-600">
            ライブの裏話、衣装のこと、日常のこと。ここに書いていくね。
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="#posts"
              className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              最新記事を見る
            </a>
            <a
              href="#profile"
              className="rounded-full border border-pink-200 bg-white px-5 py-2 text-sm font-semibold text-pink-700 hover:bg-pink-50"
            >
              プロフィール
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-pink-200 to-purple-200">
          {/* public/idol-hero.jpg があれば表示。なくても背景で可愛い */}
          <Image
            src="/idol-hero.jpg"
            alt="idol hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}