export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end pt-16"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 極淡遮罩，保留底圖文字清晰度 */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(30,24,20,0.55) 0%, rgba(30,24,20,0.08) 60%, transparent 100%)",
        }}
      />

      {/* 按鈕靠左下 */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16">
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-[#B5957A] hover:bg-[#A0806A] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm tracking-wide"
          >
            立即免費諮詢
          </a>
          <a
            href="#services"
            className="border border-white/50 hover:border-white/80 text-white hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm tracking-wide backdrop-blur-sm"
          >
            了解服務內容
          </a>
        </div>
      </div>
    </section>
  );
}
