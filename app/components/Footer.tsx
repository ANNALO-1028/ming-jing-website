export default function Footer() {
  return (
    <footer className="bg-[#2A2320] text-[#9A8A80] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <span className="text-[#F0EAE4] font-semibold">名璟新媒體有限公司</span>
        </div>
        <p>© {new Date().getFullYear()} 名璟新媒體有限公司．All rights reserved.</p>
        <a
          href="mailto:annawork1028@gmail.com"
          className="hover:text-[#F0EAE4] transition-colors"
        >
          annawork1028@gmail.com
        </a>
      </div>
    </footer>
  );
}
