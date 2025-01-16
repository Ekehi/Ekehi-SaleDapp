import Timer from "./timerPresale.js";


// Homepage Home Section
export default function HomeSection() {

  return (
    <>
      {/* PARALLAX ONE START */}
      <section
  id="home"
  className="mtop flex items-center justify-center h-auto pt-20 pb-16 bg-fixed bg-center bg-cover bg-[url('/images/bg/4.jpg')]"
>
  <div className="container mx-auto text-center mt-[100px] px-4 sm:px-6 lg:px-8">
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-snug">
      <strong className="tcolor">Ekehi:</strong> Redefining Cryptocurrency
      for a <strong className="text-pink-500">Sustainable</strong> and
      <strong className="text-pink-500"> Inclusive</strong> Future
    </h2>
    <div className="btn_group pt-4">
      <a
        href="/whitepaper/Whitepaper v2.0.pdf"
        download="whitepaper.pdf"
        className="inline-block rounded-3xl px-6 py-3 bg-yellow-400 font-bold text-white hover:bg-yellow-500"
      >
        Whitepaper
      </a>
    </div>
  </div>
</section>

      {/* PARALLAX ONE END */}
    </>
  )
}