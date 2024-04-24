import Timer from "./timer.js";


// Homepage Home Section
export default function HomeSection() {
  return (
    <>
      {/* PARALLAX ONE START */}
      <section id="home" className="flex items-center justify-center h-fit pt-72 bg-fixed bg-center bg-cover bg-[url('/images/bg/16.ojpg')]">
        <div className="container mx-auto text-center mt-[100px] md:mt-0 pad">
          <h2 className="lead text-white pad">
            <strong className="tcolor">Ekehi:</strong> Redefining Cryptocurrency
            for a <strong style={{ color: "#ff67cb", }}>Sustainable</strong> and <strong style={{ color: "#ff67cb" }}>Inclusive</strong> Future
          </h2>
          <br />
          <div
            className="btn_group pt-2 pb-3 animation"
            data-animation="fadeInUp"
            data-animation-delay="1.4s"
          >
            <a
              href="/whitepaper/whitepaper.pdf"
              download={"whitepaper.pdf"}
              className="btn btn-default btn-radius nav-link content-popup"
            >
              Whitepaper
            </a>
            <a href="#section4" className="btn btn-border btn-radius">
              Buy Token
            </a>
          </div>

          <div className="mt-[100px]">
            <h4 className="lead text-white pad font-semibold">
            ⏳COUNTDOWN TO PRESALE⏳
            </h4>
          </div>

        <Timer />
        </div>
      </section>
      {/* PARALLAX ONE END */}
    </>
  )
}