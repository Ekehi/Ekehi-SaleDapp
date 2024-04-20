import
{
    useAccount,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import BuyWithUsdtModal from "./buyWithUsdtModal";

export default function SeedSale()
{
    const { address: useAccountAddress, connector: useAccountActiveConnector, isConnected: useAccountIsConnected } = useAccount()

    /**
     * @fn Log
     * @brief Log to console
     */
    function Log(stringToLog)
    {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        console.log(today.toUTCString() + " | " + stringToLog);
    }

    /**
* @class UserVesting
* @brief User Vesting Data
*/
    class UserVesting
    {
        constructor(userVestingData)
        {
            this.userVestingDataLocal = userVestingData;
            if (userVestingData)
            {
                var userVestingSplit = userVestingData.toString().split(",");
                var counter = 0;
                this.totalAmount = userVestingSplit[counter++] / (10 ** 18);
                this.claimedAmount = userVestingSplit[counter++];
                this.claimStart = new Date(userVestingSplit[counter++] * 1000);
                this.claimEnd = new Date(userVestingSplit[counter++] * 1000);
            }
        }

        get HtmlOutput()
        {
            if (this.userVestingDataLocal)
            {
                return (
                    <>
                        <div id="toast-simple" class="flex justify-center items-center p-4 space-x-4 w-full max-w-xs text-white bg-neutral-800 rounded-lg divide-x divide-gray-200 shadow space-x" role="alert">
                             <img 
                 src="/images/EKEHI-mini.png" className="w-8 h-8" alt="Ekehi" />
                           
                            <div class="pl-4 text-sm font-normal">You own already {new Intl.NumberFormat().format(this.totalAmount)} <span className="tcolor">ekh</span>  <br />
                                You're still on time to buy more!</div>
                        </div>
                    </>
                )
            }
            else
            {
                return (<></>);
            }
        }
    }

    /* User Vesting */
    const { data: userVestingData
    } = useContractRead({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
        abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
        functionName: "userVesting",
        args: [useAccountAddress, process.env.NEXT_PUBLIC_PRESALE_ID],
        watch: true,
    });

    /**
    * @class Presale
    * @brief Presale Data
    */
    class Presale
    {
        constructor(presaleData)
        {
            this.preSaleDataLocal = presaleData;
            if (this.preSaleDataLocal)
            {
                var presaleSplit = presaleData.toString().split(",");
                var counter = 0;
                this.saleToken = presaleSplit[counter++];
                this.startTime = new Date(presaleSplit[counter++] * 1000);
                this.endTime = new Date(presaleSplit[counter++] * 1000);
                this.price = (presaleSplit[counter++] / (10 ** 18));
                this.tokensToSell = presaleSplit[counter++];
                this.tokensToSellParsed = new Intl.NumberFormat().format(this.tokensToSell);
                this.presaleGoal = this.tokensToSell * this.price;
                this.preSaleGoalParsed = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(this.presaleGoal);
                this.baseDecimals = presaleSplit[counter++];
                this.inSale = presaleSplit[counter++];
                this.tokensSold = this.tokensToSell - this.inSale;
                this.presaleFundsRaised = this.tokensSold * this.price;
                this.presaleFundsRaisedParsed = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(this.presaleFundsRaised);
                this.tokensSoldParsed = new Intl.NumberFormat().format(this.tokensSold);
                this.vestingStartTime = new Date(presaleSplit[counter++] * 1000);
                this.vestingCliff = presaleSplit[counter++];
                this.vestingPeriod = presaleSplit[counter++];
                this.enableBuyWithEth = Boolean(parseInt(presaleSplit[counter++]));
                this.enableBuyWithUsdt = Boolean(parseInt(presaleSplit[counter++]));
                this.salePercentage = this.tokensSold * 100 / this.tokensToSell;
                this.salePercentageParsed = this.salePercentage.toFixed(2) + "%";
            }
        }

        get HtmlOutput()
        {
            if (this.preSaleDataLocal)
            {
                return (
                    <>
                        <p>Sale Token: {this.saleToken}</p>
                        <p>startTime: {this.startTime.toLocaleString("default")}</p>
                        <p>endTime: {this.endTime.toLocaleString("default")}</p>
                        <p>price: {this.price.toFixed(3)}$ per Token</p>
                        <p>tokensToSell: {new Intl.NumberFormat().format(this.tokensToSell)} Token</p>
                        <p>inSale: {new Intl.NumberFormat().format(this.inSale)} Token</p>
                        <p>tokensSold: {new Intl.NumberFormat().format(this.tokensSold)} Token</p>
                        <p>presaleGoal: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(this.presaleGoal)} $</p>
                        <p>baseDecimals: {this.baseDecimals}</p>
                        <p>vestingStartTime: {this.vestingStartTime.toLocaleString("default")}</p>
                        <p>vestingCliff: {this.vestingCliff}</p>
                        <p>vestingPeriod: {this.vestingPeriod}</p>
                        <p>enableBuyWithEth: {this.enableBuyWithEth.toString()}</p>
                        <p>enableBuyWithUsdt: {this.enableBuyWithUsdt.toString()}</p>
                    </>
                )
            }
            else return (<></>);
        }
    }

    /*!
    * @fn printPresaleData
    * @brief Print Presale Data
    */
    function printPresaleData(presaleData)
    {
        var preSale = new Presale(presaleData);
        setPresaleDataParsed(preSale);
    }

    /* Presale Data */
    const [presaleDataParsed, setPresaleDataParsed] = useState(0);
    const { data: presaleData,
        error: presaleDataError,
        isError: presaleIsError,
        isLoading: presaleIsLoading,
        status: presaleStatus } = useContractRead({
            address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
            abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
            functionName: "presale",
            args: [process.env.NEXT_PUBLIC_PRESALE_ID],
            watch: false,
        });

    /* ------------------- */


    /* Presale Data */
    useEffect(() =>
    {
        Log("----------> presaleData: " + presaleData);
        Log("----------> presaleDataError: " + presaleDataError);
        Log("----------> presaleIsError: " + presaleIsError);
        Log("----------> presaleIsLoading: " + presaleIsLoading);
        Log("----------> presaleStatus: " + presaleStatus);
        printPresaleData(presaleData);
    }, [presaleData, presaleDataError, presaleIsError, presaleIsLoading, presaleStatus]);

    /* Wallet Connected / Disconnected */
    const [displayPresaleData, setDisplayPresaleData] = useState(0);
    const [displayBuyData, setBuyData] = useState(0);
    const [displayUserVestingData, setDisplayUserVestingData] = useState(0);
    useEffect(() =>
    {
        if (!useAccountAddress)
        {
            setDisplayPresaleData(
                <>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-3">
                        <div className="default-color text-xs font-medium  text-neutral-900 text-center p-0.5 leading-none rounded-full"
                            style={{ width: presaleDataParsed?.salePercentageParsed }}>
                            {presaleDataParsed?.salePercentageParsed}
                        </div>
                    </div>
                    <p className="text-white">
                        Sold — {presaleDataParsed?.tokensSoldParsed}
                        /
                        {presaleDataParsed?.tokensToSellParsed}
                    </p>
                    <p className="text-white mb-6">
                        Sold — {presaleDataParsed?.presaleFundsRaisedParsed}
                        /
                        {presaleDataParsed?.preSaleGoalParsed}
                    </p>
                </>
            );
            setBuyData("");
            setDisplayUserVestingData("");
        }
        else
        {
            setDisplayPresaleData("");
            var userVesting = new UserVesting(userVestingData);
            setDisplayUserVestingData(userVesting.HtmlOutput);
            setBuyData(<>
                <div className="flex items-center justify-center mb-6 mt-5">
                 <img 
                 src="/images/EKEHI-mini.png" className="animate-bounce w-16 h-16" alt="Ekehi" />
                </div>
                <div className="flex items-center justify-center mb-6 mt-5">
                    <BuyWithUsdtModal/>
                </div>
            </>);
        }
    }, [useAccountAddress, presaleDataParsed, userVestingData]);

    return (
        <>
            <div className="text-center">
                <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-neutral-900 rounded-lg">
                    <h7 className="text-white font-bold">
                        ✅ 1st May 2024<br />
                        Presale
                    </h7>
                    <h4 className="text-white font-bold text-4xl">
                        1 EKH = {presaleDataParsed?.price?.toFixed(4)}$
                    </h4>
                    <p className="text-white mb-4">
                        Hurry and buy before presale ends
                    </p>
                    {displayPresaleData}
                    <div className="flex place-items-center justify-around">
                        {displayUserVestingData}
                    </div>
                    {displayBuyData}
                    <div className="flex place-items-center justify-around">
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </>
    )
}