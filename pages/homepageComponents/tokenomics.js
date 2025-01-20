// Import the FontAwesomeIcon component
import Typewriter from 'typewriter-effect';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
    labels: ['Community','Public Sale', 'Liquidity', 'Team', 'Staking', 'Reserve'],
    datasets: [
        {
            label: '%',
            data: [50, 20, 10, 5, 5, 10],
            backgroundColor: [
               
                'rgba(25,179,128)',
                'rgba(232,221,203)',
                'rgba(138,155,15)',
                'rgba(23,177,2)',
                'rgba(248,202,0)',
                'rgba(189,21,80)',
                'rgba(233,127,2)',
            ],
            borderColor: [
                
                'rgba(25,179,128)',
                'rgba(232,221,203)',
                'rgba(138,155,15)',
                'rgba(23,177,2)',
                'rgba(248,202,0)',
                'rgba(189,21,80)',
                'rgba(233,127,2)',
            ],
            hoverOffset: 4,
            borderWidth: 1,
        },
    ],
};

export default function Tokenomics()
{
    return (
        <>
            <section id="tokenomics" className="flex shadow-md place-items-center justify-around py-20 w-[100vw] h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/23.ojpg')]">
                <div className="text-center">
                    <div className="box-cont h-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-slate-900 rounded-lg">
                        <h2 className="text-white font-bold">Tokenomics</h2>
                        <h4 className="lead text-white  font-bold">
                            <Typewriter
                                options={{
                                    strings: ["Our Token Distribution"],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 600000,
                                    cursor: '_',
                                    styles:{
                                        textColor:"#ffa000"
                                    }
                                }}
                                
                            />
                        </h4>
                        <h5 className="ml-[3%] bg-slate-300 text-black hover:bg-slate-400 font-bold uppercase text-base px-8 py-3 rounded-[24px] shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            Tokenomics<br />
                        </h5>
                        <h5 className="uppercase text-red-300 font-bold">Total supply: 1,000,000,000
                        </h5>
                        <div className="tokenomicsDiv">
                            <Doughnut
                                data={data}
                                height={380}
                                width={100}
                                options={{
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                            labels: {
                                                color: 'rgb(255, 255, 255)',
                                                font: {
                                                    size: 14,
                                                    family: "'Poppins', sans-serif"
                                                }
                                            },
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}