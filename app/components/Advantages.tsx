const advantages = [
  {
    title: "多年實戰經驗",
    description:
      "累積多年社群行銷與廣告投放實戰經驗，服務橫跨多個產業，深刻了解不同市場的行銷邏輯與消費者行為。",
  },
  {
    title: "成功案例驗證",
    description:
      "豐富的成功操作案例，從品牌知名度提升到業績實質成長，用數據說話，讓你看見看得到的成果。",
  },
  {
    title: "客製化策略",
    description:
      "不套用制式公版，每個客戶都是獨立個案，深入了解你的品牌與目標，打造最符合需求的專屬行銷策略。",
  },
  {
    title: "數據驅動決策",
    description:
      "以數據為核心，定期提供成效報告與分析，隨時根據市場反應調整策略，確保資源投入在最有效的地方。",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-[#F7F2ED]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#B5957A] font-semibold text-sm uppercase tracking-widest mb-3">
            Why Us
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl font-light text-[#2E2A27] mb-4">
            為什麼選擇名璟新媒體
          </h2>
          <p className="text-[#6B5F58] text-lg max-w-xl mx-auto">
            我們不只是服務提供者，更是你品牌成長路上最值得信賴的夥伴。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl border border-[#E8E0D8] hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-0.5 bg-[#B5957A] mb-5" />
              <h3 className="font-serif-tc text-[#2E2A27] font-light text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-[#6B5F58] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
