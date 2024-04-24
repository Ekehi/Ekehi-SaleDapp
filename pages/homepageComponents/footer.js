import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
    faTelegram,
    faYoutube,
    faTwitter,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Footer()
{
    return (
        <>
            <footer id="footer" className=" pt-8">
                <div className="flex place-items-center justify-left ml-6">
                    <a href="#" className="flex items-center">
                        <img src="/images/logo.png" className="ml-3 h-10 sm:h-9" alt="Presale Example" />
                    </a>
                </div>
                <div className="grid justify-items-center justify-center grid-flow-row auto-rows-min sm:grid-flow-col  gap-30 py-8 px-6">
                    <div className="w-2/3">
                        <h2 className="mb-6 text-lg font-normal uppercase tcolor text-center">About</h2>
                        <p className="mb-6 text-white">
                        EKEHI's innovative method offers range of benefits to users, investors, and the world. 
                        For users, the project affords a secure, accessible, and empowering platform for investing and 
                        taking part inside the cryptocurrency environment. For investors, EKEHI gives a sustainable and 
                        socially accountable investment opportunity with lengthy-time period increase potential. 
                        For the world, the project contributes to positive global impact via its commitment to sustainability 
                        and social duty.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold uppercase tcolor">Company contacts</h2>
                        <ul className="text-white">
                            <li className="mb-4">
                                <a href="https://t.me/ekehiOfficial" className="hover:underline"><FontAwesomeIcon icon={faTelegram} className="mr-2 hover:text-blue-500" /> Telegram</a>
                            </li>
                            
                            <li className="mb-4">
                                <a href="https://twitter.com/EkehiOfficial" className="hover:underline"><FontAwesomeIcon icon={faTwitter} className="mr-2 hover:text-blue-500" /> Twitter</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
                <div className="py-1 px-4 bg-neutral-900 md:flex md:items-center md:justify-between min-w-full">
                    <div className="flex  space-x-6 sm:justify-between md:mt-0 justify-between w-full">
                    <span className="font14 font-thin text-white sm:text-center align-bottom">&copy; 2024 <a href="#">Ekehi</a>. All Rights Reserved.
                    </span>
                    <div>
                    <a href="https://t.me/ekehiOfficial" className="text-white hover:text-blue-500">
                            <FontAwesomeIcon icon={faTelegram} className="mr-2" />
                            <span className="sr-only">Telegram group</span>
                        </a>
                       
                        <a href="https://twitter.com/EkehiOfficial" className="text-white hover:text-blue-500">
                            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                            <span className="sr-only">Twitter page</span>
                        </a>

                    </div>
                        
                       
                    </div>
                </div>
            </footer>
        </>
    )
}