"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const translations = {
  en: {
    title: "Let's talk about your project",
    desc: "Hi there! Thanks for stopping by. Tell me a bit about what you're building and I'll get back to you.",
    name: "Name",
    email: "Email",
    type: "Project type",
    placeholderName: "Your name",
    placeholderEmail: "you@example.com",
    select: "Select an option",
    options: ["Web Development", "UI/UX Design", "Consulting", "Performance Optimization", "Other"],
    message: "Message",
    messagePlaceholder: "Tell me about your goals...",
    submit: "Send Message",
    quickHello: "Quick hello",
    excited: "Hey! I'm excited to hear from you.",
    reply: "I usually reply within one business day.",
    connect: "Connect",
  },
  ar: {
    title: "لنتحدث عن مشروعك",
    desc: "مرحباً! شكراً لزيارتك. أخبرني قليلاً عن ما تبنيه وسأعود إليك قريباً.",
    name: "الاسم",
    email: "البريد الإلكتروني",
    type: "نوع المشروع",
    placeholderName: "اسمك",
    placeholderEmail: "you@example.com",
    select: "اختر خياراً",
    options: ["تطوير ويب", "تصميم UI/UX", "استشارات", "تحسين الأداء", "أخرى"],
    message: "الرسالة",
    messagePlaceholder: "أخبرني عن أهدافك...",
    submit: "إرسال",
    quickHello: "تحية سريعة",
    excited: "أنا متحمس لسماعك.",
    reply: "عادةً أرد خلال يوم عمل واحد.",
    connect: "تواصل",
  },
} as const;

export default function Contact() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const t = translations[lang];

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen  text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
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

        <header className="mb-10 space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{t.title}</h1>
          <p className="text-lg text-white/70">{t.desc}</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_35px_-12px_rgba(255,0,153,0.4)]">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <label className="space-y-2 text-sm">
                  <span className="text-white/80">{t.name}</span>
                  <input
                    type="text"
                    placeholder={t.placeholderName}
                    className="w-full rounded-md bg-[#0d0c14] border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:border-[#f20986] focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="text-white/80">{t.email}</span>
                  <input
                    type="email"
                    placeholder={t.placeholderEmail}
                    className="w-full rounded-md bg-[#0d0c14] border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:border-[#f20986] focus:outline-none"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm block">
                <span className="text-white/80">{t.type}</span>
                <select
                  className="w-full rounded-md bg-[#0d0c14] border border-white/10 px-3 py-2 text-white focus:border-[#f20986] focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#0d0c14]">
                    {t.select}
                  </option>
                  {t.options.map((opt) => (
                    <option key={opt} className="bg-[#0d0c14]">
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm block">
                <span className="text-white/80">{t.message}</span>
                <textarea
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  className="w-full rounded-md bg-[#0d0c14] border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:border-[#f20986] focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-[#f20986] text-white font-semibold shadow-lg shadow-[#f20986]/30 hover:bg-[#d8087a] transition-colors"
              >
                {t.submit}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-sm text-white/60 mb-2">{t.quickHello}</p>
              <p className="text-lg font-semibold">{t.excited}</p>
              <p className="text-white/70 text-sm mt-2">{t.reply}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#f20986]" />
                <span>mayarh926@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#f20986]" />
                <span>+963 945 973 892</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#f20986]" />
                <span> Syria / Damascus</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-sm text-white/60 mb-3">{t.connect}</p>
              <div className="flex gap-3 text-white/80">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
