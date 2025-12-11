"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBolt,
  FaChartLine,
  FaCode,
  FaFacebookF,
  FaLinkedinIn,
  FaPaintBrush,
  FaTools,
  FaTwitter,
} from "react-icons/fa";

const services = [
  {
    key: "web",
    icon: FaCode,
  },
  {
    key: "uiux",
    icon: FaPaintBrush,
  },
  {
    key: "perf",
    icon: FaBolt,
  },
  {
    key: "consult",
    icon: FaChartLine,
  },
  {
    key: "support",
    icon: FaTools,
  },
] as const;

const translations = {
  en: {
    title: "OUR SERVICES",
    subtitle: "Tailored Solutions for Your Success",
    serviceBtn: "Service Offers",
    aboutBtn: "ABOUT ME",
    learn: "Learn More",
    ctaTitle: "Ready to start your project?",
    ctaBtn: "GET A Free Quote",
    cards: {
      web: {
        title: "WEB Development",
        desc: "Building modern, high performance web applications with React, Next.js, and headless CMS.",
      },
      uiux: {
        title: "UI/UX Design",
        desc: "Creating intuitive, beautiful, and user-friendly interfaces with accessibility in mind.",
      },
      perf: {
        title: "Performance Optimization",
        desc: "Improving website speed, SEO, and resilience to keep experiences fast and reliable.",
      },
      consult: {
        title: "Consulting & Strategy",
        desc: "Expert guidance on tech stacks, architecture, and digital transformation for businesses.",
      },
      support: {
        title: "Support & Maintenance",
        desc: "Ongoing monitoring, updates, and improvements to keep your digital products thriving.",
      },
    },
  },
  ar: {
    title: "خدماتنا",
    subtitle: "حلول مخصّصة لنجاحك",
    serviceBtn: "عروض الخدمات",
    aboutBtn: "من أنا",
    learn: "اعرف المزيد",
    ctaTitle: "جاهز لبدء مشروعك؟",
    ctaBtn: "اطلب عرض سعر",
    cards: {
      web: {
        title: "تطوير الويب",
        desc: "بناء تطبيقات ويب حديثة عالية الأداء باستخدام React و Next.js و أنظمة CMS رأسية.",
      },
      uiux: {
        title: "تصميم UI/UX",
        desc: "تصميم واجهات جميلة وسهلة الاستخدام مع مراعاة الوصول للجميع.",
      },
      perf: {
        title: "تحسين الأداء",
        desc: "تحسين سرعة المواقع وتحسين SEO وزيادة الاعتمادية لتجربة أسرع وأفضل.",
      },
      consult: {
        title: "الاستشارات والاستراتيجية",
        desc: "إرشاد خبير حول التقنيات والهندسة الرقمية لتحويل الأعمال.",
      },
      support: {
        title: "الدعم والصيانة",
        desc: "متابعة مستمرة وتحديثات وتحسينات للحفاظ على ازدهار منتجاتك الرقمية.",
      },
    },
  },
} as const;

export default function Services() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const t = translations[lang];

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative min-h-screen  text-white overflow-hidden"
    >
      {/* Background glow + particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,153,0.18),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(0,224,255,0.18),transparent_22%),radial-gradient(circle_at_50%_70%,rgba(255,0,153,0.12),transparent_25%)]" />
        <div className="absolute inset-0  opacity-20 mix-blend-screen" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14">
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

        <header className="mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#f20986] font-semibold">
            {t.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="#services"
              className="px-6 py-3 rounded-md bg-[#f20986] text-white font-semibold shadow-lg shadow-[#f20986]/30 hover:bg-[#d8087a] transition-colors"
            >
              {t.serviceBtn}
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-md bg-white text-[#0d0c14] font-semibold hover:bg-gray-100 transition-colors"
            >
              {t.aboutBtn}
            </Link>
          </div>
        </header>

        <section
          id="services"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const copy = t.cards[service.key];

            return (
              <div key={service.key} className="rounded-2xl border border-white/10 bg-[#0d0c14]/90 overflow-hidden shadow-[0_0_25px_-12px_rgba(255,0,153,0.35)]">
                <div className="relative h-28">
                  <div className="absolute inset-0 bg-linear-to-r from-white/10 to-white/0" />
                  <div className="absolute inset-0 bg-black opacity-25" />
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl">
                      <Icon />
                    </span>
                    <h3 className="text-lg font-bold">{copy.title}</h3>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">{copy.desc}</p>

                  <button className="px-4 py-2 rounded-md text-sm font-semibold bg-white text-[#0d0c14] hover:bg-gray-100 transition-colors">
                    {t.learn}
                  </button>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-16 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {t.ctaTitle}
          </h2>
          <Link
            href="/contact"
            className="inline-flex px-6 py-3 rounded-md bg-[#f20986] text-white font-semibold shadow-lg shadow-[#f20986]/30 hover:bg-[#d8087a] transition-colors"
          >
            {t.ctaBtn}
          </Link>

          <div className="flex justify-center gap-4 text-sm mt-2 text-white/80">
            <Link href="#" className="hover:text-white">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaLinkedinIn />
            </Link>
          </div>

          <p className="text-sm text-white/70">
            © 2025 Hydra Blog. All your reserved.
          </p>
        </section>
      </div>
    </main>
  );
}

