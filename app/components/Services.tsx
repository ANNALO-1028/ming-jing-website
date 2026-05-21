const services = [
  {
    num: "01",
    title: "個人社群媒體陪跑",
    description:
      "量身打造個人品牌社群策略，從內容規劃、發文排程到數據分析，全程陪伴你的成長歷程，讓你的個人品牌在社群上發光發熱。",
  },
  {
    num: "02",
    title: "品牌社群媒體諮詢",
    description:
      "針對品牌現況進行深度診斷，提供社群媒體經營策略建議，協助建立一致的品牌聲音與視覺形象，有效提升粉絲黏著度與互動率。",
  },
  {
    num: "03",
    title: "品牌行銷諮詢",
    description:
      "從品牌定位到行銷策略全方位規劃，幫助你釐清目標受眾、競品分析與差異化定位，打造有溫度、有記憶點的品牌故事。",
  },
  {
    num: "04",
    title: "廣告投放諮詢及代操",
    description:
      "Facebook、Instagram、Google 廣告精準投放，從受眾設定、素材製作到成效優化一手包辦，最大化每一分廣告預算的效益。",
  },
  {
    num: "05",
    title: "電商上架服務",
    description:
      "協助品牌入駐各大電商平台，包含商品頁面文案撰寫、圖片規格優化與關鍵字設定，提升商品曝光率與轉換率。",
  },
  {
    num: "06",
    title: "AI 自動化流程",
    description:
      "導入 AI 工具優化行銷工作流程，從內容生成、排程自動化到數據報告，大幅降低人工成本，讓團隊專注於更高價值的策略決策。",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#B5957A] font-semibold text-sm uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl font-light text-[#2E2A27] mb-4">
            服務內容
          </h2>
          <p className="text-[#6B5F58] text-lg max-w-xl mx-auto">
            我們提供完整的數位行銷解決方案，無論你是個人品牌還是企業，都能找到最適合的服務。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="group p-8 rounded-2xl border border-[#E0D9D3] hover:border-[#B5957A]/50 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="text-[#C4B0A0] text-sm font-semibold tracking-widest mb-4">{service.num}</div>
              <h3 className="font-serif-tc text-[#2E2A27] font-light text-lg mb-3 group-hover:text-[#B5957A] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6B5F58] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
