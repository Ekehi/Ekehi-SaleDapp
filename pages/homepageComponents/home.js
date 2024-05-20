import Timer from "./timer.js";


// Homepage Home Section
export default function HomeSection() {
  return (
    <>
      {/* PARALLAX ONE START */}
      <section id="home" className="mtop flex items-center justify-center h-fit pt-72 bg-fixed bg-center bg-cover bg-[url('/images/bg/16.ojpg')]">
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
              className="w-max rounded-3xl ml-2 px-6 py-3 bg-yellow-400 font-bold text-white hover:outline-none outline outline-1 btn-radius nav-link content-popup "
            >
              Whitepaper
            </a>

            <a 
                    className='font-bold text-white bg-pink-500 hover:bg-white hover:text-pink-500 w-max rounded-3xl ml-2 px-6 py-3 outline outline-1'
                    href='#airdrop'>
                        Join Airdrop
                    </a>
            <a href="#presale" className="btn btn-border btn-radius">
              Buy Token
            </a>
          </div>

          <div className="mt-[100px]">
            <h4 className="lead text-white pad font-semibold">
              Presale is <span className="text-red-700 ">Live📢</span>
            </h4>

            <h4 className="lead text-white pad font-semibold pt-8 -mb-4">
      
            ROUND 1 of 5
            </h4>
          </div>

       {/*  <Timer /> */}
        </div>
      </section>
      {/* PARALLAX ONE END */}
    </>
  )
}