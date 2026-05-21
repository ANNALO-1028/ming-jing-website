"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mlgvbevl", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#B5957A] font-semibold text-sm uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl font-light text-[#2E2A27] mb-4">
            聯絡我們
          </h2>
          <p className="text-[#6B5F58] text-lg max-w-xl mx-auto">
            有任何問題或合作意向？歡迎填寫表單，我們會在 24 小時內與您聯繫。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <div className="w-1 self-stretch bg-[#B5957A]/40 rounded-full flex-shrink-0" />
              <div>
                <p className="text-[#2E2A27] font-semibold mb-1">Email</p>
                <a
                  href="mailto:annawork1028@gmail.com"
                  className="text-[#B5957A] hover:underline text-sm"
                >
                  annawork1028@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 self-stretch bg-[#B5957A]/40 rounded-full flex-shrink-0" />
              <div>
                <p className="text-[#2E2A27] font-semibold mb-1">回覆時間</p>
                <p className="text-[#6B5F58] text-sm">工作日 24 小時內回覆</p>
              </div>
            </div>
            <div className="p-6 bg-[#F7F2ED] rounded-2xl border border-[#E8E0D8]">
              <p className="text-[#2E2A27] font-semibold mb-2">免費初步諮詢</p>
              <p className="text-[#6B5F58] text-sm leading-relaxed">
                首次聯繫享有免費 30 分鐘品牌診斷，了解你的品牌現況與成長機會。
              </p>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center p-8 bg-[#F7F2ED] rounded-2xl border border-[#E8E0D8]">
              <h3 className="text-[#2E2A27] font-bold text-xl mb-2">感謝您的來信！</h3>
              <p className="text-[#6B5F58] text-sm">我們已收到您的訊息，將於 24 小時內回覆。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[#2E2A27] text-sm font-medium mb-1.5">
                  您的姓名
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="王小明"
                  className="w-full border border-[#E0D9D3] bg-white rounded-xl px-4 py-3 text-sm text-[#2E2A27] placeholder:text-[#B0A098] focus:outline-none focus:ring-2 focus:ring-[#B5957A] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-[#2E2A27] text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full border border-[#E0D9D3] bg-white rounded-xl px-4 py-3 text-sm text-[#2E2A27] placeholder:text-[#B0A098] focus:outline-none focus:ring-2 focus:ring-[#B5957A] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-[#2E2A27] text-sm font-medium mb-1.5">
                  留言內容
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="請描述您的需求或想諮詢的問題…"
                  className="w-full border border-[#E0D9D3] bg-white rounded-xl px-4 py-3 text-sm text-[#2E2A27] placeholder:text-[#B0A098] focus:outline-none focus:ring-2 focus:ring-[#B5957A] focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#B5957A] hover:bg-[#A0806A] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
              >
                送出諮詢
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
