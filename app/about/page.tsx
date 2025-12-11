"use client";

import Image from "next/image";
import { useState } from "react";
import { FaNode, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const translations = {
  en: {
    title: "ABOUT US",
    subtitle: "Our Journey & Philosophy",
    intro:
      "Welcome to my blog! This is where I share my journey and insights about building modern, integrated web applications. Here, you'll find tutorials, code snippets, and best practices for creating efficient and scalable web solutions.",
    intro2:
      "Through my experience with cutting-edge frameworks and technologies, I aim to help developers build better web applications. This platform serves as a resource for both beginners and experienced developers looking to enhance their skills.",
    hi: "Hi I'm MAYAR",
    expertise: "My Expertise",
    expertiseBody:
      "With extensive experience in integrated web development, I specialize in creating seamless user experiences using modern frameworks and tools. My focus is on building performant, scalable applications that deliver exceptional results.",
    mission: "Our Mission",
    missionBody:
      "Our mission is to empower developers with the knowledge and tools they need to build exceptional web applications. We strive to create a community where learning and innovation thrive, making web development accessible and enjoyable for everyone.",
  },
  ar: {
    title: "من نحن",
    subtitle: "رحلتنا وفلسفتنا",
    intro:
      "مرحباً بكم في مدونتي! هنا أشارك رحلتي وأفكاري حول بناء تطبيقات ويب حديثة ومتكاملة. ستجدون دروساً ولقطات كود وأفضل الممارسات لبناء حلول فعّالة وقابلة للتوسع.",
    intro2:
      "من خلال خبرتي مع أحدث الأطر والتقنيات، أهدف لمساعدة المطورين على بناء تطبيقات ويب أفضل. هذه المنصة مصدر لكل من المبتدئين والمحترفين لتطوير مهاراتهم.",
    hi: "مرحباً، أنا ميار",
    expertise: "خبرتي",
    expertiseBody:
      "بخبرة واسعة في تطوير الويب المتكامل، أركز على بناء تجارب مستخدم سلسة باستخدام الأطر والأدوات الحديثة، مع الحرص على الأداء العالي وقابلية التوسع.",
    mission: "مهمتنا",
    missionBody:
      "مهمتنا تمكين المطورين بالمعرفة والأدوات اللازمة لبناء تطبيقات ويب متميزة، وخلق مجتمع يزدهر فيه التعلم والابتكار.",
  },
} as const;

export default function About() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const t = translations[lang];

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen  text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
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

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-xl md:text-2xl text-[#f20986] font-semibold">{t.subtitle}</p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Profile */}
          <div className="flex flex-col items-center md:items-start">
            {/* Profile Picture */}
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden flex items-center justify-center">
                <Image
                  src="/image/is.jpeg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name Heading */}
            <h2 className="text-3xl font-bold text-white mb-4">{t.hi}</h2>

            {/* Paragraph 1 */}
            <p className="text-white mb-4 leading-relaxed">{t.intro}</p>

            {/* Paragraph 2 */}
            <p className="text-white leading-relaxed">{t.intro2}</p>
          </div>

          {/* Right Column - Expertise & Mission */}
          <div className="space-y-12">
            {/* My Expertise Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{t.expertise}</h2>
              <p className="text-white mb-6 leading-relaxed">{t.expertiseBody}</p>

              {/* Technology Icons */}
              <div className="flex gap-6 items-center flex-wrap">
                <div className="flex items-center justify-center w-12 h-12">
                  <FaReact color="#61DAFB" size={40} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-xl"></span>
                  <SiNextdotjs color="white" size={40} />
                  <span className="text-white ml-1"></span>
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                  <RiTailwindCssFill color="#f20986" size={40} />
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                  <SiTypescript  color="#4273ef" size={40} />
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                  <FaNode   color="green" size={60} />
                </div>
              </div>
            </div>

            {/* Our Mission Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{t.mission}</h2>
              <p className="text-white leading-relaxed">{t.missionBody}</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-700 pt-8 mt-16">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#f20986] flex items-center justify-center hover:bg-[#d8087a] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF color="white" size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#f20986] flex items-center justify-center hover:bg-[#d8087a] transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter color="white" size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#f20986] flex items-center justify-center hover:bg-[#d8087a] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn color="white" size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-white text-sm">
            © 2025 Hydra Blog. All your reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
