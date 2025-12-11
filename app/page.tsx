"use client";

import Link from "next/link";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

const translations = {
  en: {
    headline1: "Mastering React &",
    headline2: "Next.Js",
    sub: "Insights, Tutorials, and Code Snippets for Modern Web Development",
    service: "Service Offers",
    about: "ABOUT ME",
    cards: {
      react:
        "React is a JavaScript library for building highly efficient interactive user interfaces.",
      next: "Next.js is a React framework for building fast, modern, and integrated web applications.",
      tailwind: "Tailwind CSS is a CSS framework that helps create user interfaces at super speed.",
    },
  },
  ar: {
    headline1: "إتقان React و",
    headline2: "Next.js",
    sub: "مقالات ودروس , تطوير الويب الحديث",
    service: "عروض الخدمات",
    about: "من أنا",
    cards: {
      react: "React مكتبة جافاسكريبت لبناء واجهات تفاعلية عالية الكفاءة.",
      next: "Next.js إطار عمل React لبناء تطبيقات ويب سريعة وحديثة ومتكاملة.",
      tailwind: "Tailwind CSS إطار لتصميم الواجهات بسرعة كبيرة وبأسلوب مرن.",
    },
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const t = translations[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-transparent/50gray"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="flex justify-end mb-6 gap-3">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded-md text-sm font-semibold ${
              lang === "en" ? "bg-[#f20986] text-white" : "bg-white text-[#0d0c14]"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("ar")}
            className={`px-3 py-1 rounded-md text-sm font-semibold ${
              lang === "ar" ? "bg-[#f20986] text-white" : "bg-white text-[#0d0c14]"
            }`}
          >
            AR
          </button>
        </div>

        {/* Main Content Section */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {t.headline1}
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-pink-600 mb-6 leading-tight">
            {t.headline2}
          </h1>
          <p className="text-lg md:text-2xl text-white mb-12 font-normal max-w-3xl">
            {t.sub}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link href="/servers">
              <button className="bg-[#f20986] text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-black border-pink-600 border transition-colors">
                {t.service}
              </button>
            </Link>

            <Link href="/about">
              <button className="border border-black text-[#f20986] px-8 py-3 rounded-lg font-semibold text-base bg-white hover:bg-[#f20986] hover:text-white transition-colors">
                {t.about}
              </button>
            </Link>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-sky-500 p-4 text-white rounded-2xl shadow-cyan-500/40 transition ease-in-out shadow-2xl shadow-blue-500/50 hover:scale-105">
            <div className="flex justify-center items-center mb-5">
              <FaReact color="blue" size={40} />
            </div>
            <p className="text-lg font-semibold leading-relaxed text-center md:text-left">
              {t.cards.react}
            </p>
          </div>

          <div className="border border-white p-4 text-white rounded-2xl transition ease-in-out shadow-2xl shadow-white/50 hover:scale-105">
            <div className="flex justify-center items-center mb-5">
              <SiNextdotjs color="white" size={40} />
            </div>
            <p className="text-lg font-semibold leading-relaxed text-center md:text-left">
              {t.cards.next}
            </p>
          </div>

          <div className="border border-pink-600 p-4 text-white rounded-2xl transition ease-in-out shadow-2xl shadow-pink-600/50 hover:scale-105">
            <div className="flex justify-center items-center mb-5">
              <RiTailwindCssFill color="fuchsia" size={40} />
            </div>
            <p className="text-lg font-semibold leading-relaxed text-center md:text-left">
              {t.cards.tailwind}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

