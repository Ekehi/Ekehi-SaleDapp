// Rainbow and Wagmi integration guide: https://billyjitsu.hashnode.dev/the-rainbowkit-wagmi-guide-i-wish-i-had
import
{
    useAccount,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";

export default function PresaleManager()
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
                this.presaleGoal = this.tokensToSell * this.price;
                this.baseDecimals = presaleSplit[counter++];
                this.inSale = presaleSplit[counter++];
                this.tokensSold = this.tokensToSell - this.inSale;
                this.vestingStartTime = new Date(presaleSplit[counter++] * 1000);
                this.vestingCliff = presaleSplit[counter++];
                this.vestingPeriod = presaleSplit[counter++];
                this.enableBuyWithEth = Boolean(parseInt(presaleSplit[counter++]));
                this.enableBuyWithUsdt = Boolean(parseInt(presaleSplit[counter++]));
            }
        }

        get HtmlOutput()
        {
            if (this.preSaleDataLocal)
            {
                return (
                    <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Sale Token</span><span className="text-white">{this.saleToken}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Start</span><span className="text-white">{this.startTime.toLocaleString("default")}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">End</span><span className="text-white">{this.endTime.toLocaleString("default")}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Price</span><span className="text-white">{this.price.toFixed(3)} $</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">For Sale</span><span className="text-white">{new Intl.NumberFormat().format(this.tokensToSell)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">In Sale</span><span className="text-white">{new Intl.NumberFormat().format(this.inSale)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Sold</span><span className="text-white">{new Intl.NumberFormat().format(this.tokensSold)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Goal</span><span className="text-white">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(this.presaleGoal)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Vesting Start</span><span className="text-white">{this.vestingStartTime.toLocaleString("default")}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Cliff</span><span className="text-white">{this.vestingCliff}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Period</span><span className="text-white">{this.vestingPeriod}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Buy with ETH</span><span className="text-white">{this.enableBuyWithEth.toString()}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Buy with USDT</span><span className="text-white">{this.enableBuyWithUsdt.toString()}</span></div>
                    </div>
                )
            }
            else return (<></>);
        }
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
                    <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Total</span><span className="text-white">{new Intl.NumberFormat().format(this.totalAmount)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Claimed</span><span className="text-white">{new Intl.NumberFormat().format(this.claimedAmount)}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Claim Start</span><span className="text-white">{this.claimStart.toLocaleString("default")}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Claim End</span><span className="text-white">{this.claimEnd.toLocaleString("default")}</span></div>
                    </div>
                )
            }
            else
            {
                return (<></>);
            }
        }
    }

    /*!
    * @fn printPresaleData
    * @brief Print Presale Data
    */
    function printPresaleData(presaleData)
    {
        var preSale = new Presale(presaleData);
        setPresaleDataParsed(preSale.HtmlOutput);
    }

    /*!
    * @fn printUserVestingData
    * @brief Print User Vesting Data
    */
    function printUserVestingData(userVestingData)
    {
        var userVesting = new UserVesting(userVestingData);
        setUserVestingParsed(userVesting.HtmlOutput);
    }

    /* User Vesting */
    const [userVestingParsed, setUserVestingParsed] = useState(0);
    const { data: userVestingData,
        error: userVestingDataError,
        isError: userVestingDataIsError,
        isLoading: userVestingDataIsLoading
    } = useContractRead({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
        abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
        functionName: "userVesting",
        args: [useAccountAddress, process.env.NEXT_PUBLIC_PRESALE_ID],
        watch: false,
    });

    /* Presale Data */
    const [presaleDataParsed, setPresaleDataParsed] = useState(0);
    const { data: presaleData,
        error: presesaleDataError,
        isError: presesaleIsError,
        isLoading: presesaleIsLoading,
        status: presesaleStatus } = useContractRead({
            address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
            abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
            functionName: "presale",
            args: [process.env.NEXT_PUBLIC_PRESALE_ID],
            watch: false,
        });

    /* ------------------- */

    /* USDT Interface Contract Address */
    const { data: usdtContractAddress } = useContractRead({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
        abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
        functionName: "USDTInterface",
        watch: false,
    });
    /* ------------------- */

    /* Wallet Connected / Disconnected */
    useEffect(() =>
    {
        Log("---> useAccountIsConnected: " + useAccountIsConnected);
        Log("---> presaleData: " + presaleData);
        Log("---> presesaleDataError: " + presesaleDataError);
        Log("---> presesaleIsError: " + presesaleIsError);
        Log("---> userVestingData: " + userVestingData);
        Log("---> process.env.NEXT_PUBLIC_PRESALE_ID: " + process.env.NEXT_PUBLIC_PRESALE_ID);
        if (useAccountIsConnected)
        {
            printPresaleData(presaleData);
            printUserVestingData(userVestingData);
        }
        else
        {
            setPresaleDataParsed("");
        }
    }, [useAccountActiveConnector,
        useAccountIsConnected,
        presaleData,
        presesaleDataError,
        presesaleIsError,
        userVestingData]);

    /* ------------------- */
    /* Buy with USDT */
    const [tokens = 10000, setTokens] = useState();
    const [usdt, setUsdt] = useState(0);
    const { data: buyWithUsdtConfig,
        error: buyWithUsdtPrepareError,
        isError: buyWithUsdtIsPrepareError,
        status: buyWithUsdtPrepareStatus } = usePrepareContractWrite({
            address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
            abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
            functionName: 'buyWithUSDT',
            args: [process.env.NEXT_PUBLIC_PRESALE_ID, tokens],
            enabled: useAccountIsConnected,
        });
    const {
        data: buyWithUsdtData,
        write: buyWithUsdt,
        isLoading: isBuyWithUsdtLoading,
        isSuccess: isBuyWithUsdtStarted,
        isError: isBuyWithUsdtError,
        error: buyWithUsdtError,
    } = useContractWrite(buyWithUsdtConfig);
    const {
        isLoading: waitForTransactionIsLoading,
        isSuccess: waitForTransactionIsSuccess
    } = useWaitForTransaction({
        hash: buyWithUsdtData?.hash,
    });
    useEffect(() =>
    {
        if (!presaleData)
            return;
        var presale = new Presale(presaleData);
        var usdtValue = tokens * presale.price;
        Log("Buy with USDT - Tokens: " + tokens + " - UsdtValue: " + usdtValue);
        setUsdt(usdtValue);
    }, [tokens, presaleData]);
    /* --------- */

    /* USDT Buy Helper */
    const { data: usdtAllowanceHelper } = useContractRead({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(),
        abi: process.env.NEXT_PUBLIC_CONTRACT_ABI,
        functionName: "usdtBuyHelper",
        args: [process.env.NEXT_PUBLIC_PRESALE_ID, tokens],
        watch: false,
    });
    /* USDT Allowance */
    const [accountAllowancePublic, setAccountAllowance] = useState();
    const {
        data: accountAllowance,
        error: accountAllowanceError,
        isError: accountAllowanceIsError,
        isLoading: accountAllowanceIsLoading } = useContractRead({
            address: usdtContractAddress,
            abi: process.env.NEXT_PUBLIC_STABLE_COIN_CONTRACT_ABI,
            functionName: "allowance",
            args: [useAccountAddress, process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString()],
            watch: false,
        });

    useEffect(() =>
    {
        Log("----> accountAllowance: " + accountAllowance);
        Log("----> accountAllowanceError: " + accountAllowanceError);
        Log("----> accountAllowanceIsError: " + accountAllowanceIsError);
        Log("----> process.env.NEXT_PUBLIC_CHAIN_ID: " + process.env.NEXT_PUBLIC_CHAIN_ID);
        if (accountAllowance)
            setAccountAllowance(accountAllowance.toString());
    }, [accountAllowance, accountAllowanceError, accountAllowanceIsError]);

    const { data: usdtAllowanceConfig,
        error: usdtAllowancePrepareError,
        isError: usdtAllowanceIsPrepareError, } = usePrepareContractWrite({
            address: usdtContractAddress,
            abi: process.env.NEXT_PUBLIC_STABLE_COIN_CONTRACT_ABI,
            functionName: 'approve',
            chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID),
            // USDT has 6 decimals
            args: [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.toString(), usdtAllowanceHelper],
            enabled: useAccountIsConnected,
        });
    const {
        data: usdtAllowanceData,
        write: usdtAllowanceWrite,
        isLoading: usdtAllowanceIsLoading,
        isSuccess: usdtAllowanceIsSuccess,
        error: usdtAllowanceError,
    } = useContractWrite(usdtAllowanceConfig);
    const {
        isLoading: waitForTransactionUsdtAllowanceIsLoading,
        isSuccess: waitForTransactionUsdtAllowanceIsSuccess
    } = useWaitForTransaction({
        hash: usdtAllowanceData?.hash,
    });
    useEffect(() =>
    {
        Log("---> waitForTransactionUsdtAllowanceIsSuccess:" + waitForTransactionUsdtAllowanceIsSuccess)
        // Once allowance has been confirmed, buy tokens with USDT
        buyWithUsdt?.()
    }, [waitForTransactionUsdtAllowanceIsSuccess]);

    const isActionDisabled = waitForTransactionIsLoading || usdtAllowanceIsLoading;

    const renderContent = () =>
    {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Purchase form */}
                <div className="md:col-span-2 rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                    <h4 className="text-white text-lg font-medium mb-4">Purchase Ekehi Pre-Sale Tokens</h4>
                    <form
                        onSubmit={(e) =>
                        {
                            e.preventDefault();
                            if (accountAllowancePublic >= usdtAllowanceHelper)
                                buyWithUsdt?.();
                            else
                                usdtAllowanceWrite?.()
                        }}>
                        <label htmlFor="tokenId" className="block text-slate-300 text-sm mb-2">Amount of EKH Tokens</label>
                        <div className="flex items-center gap-3">
                            <input
                                id="tokenId"
                                type="number"
                                min="0"
                                placeholder="Amount of EKH Tokens"
                                className="w-full rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                value={tokens}
                                onChange={(e) => setTokens(e.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={isActionDisabled}
                                className={`rounded-lg px-4 py-2 font-semibold text-white ${isActionDisabled ? 'bg-slate-700 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-500'} transition`}>
                                {
                                    waitForTransactionIsLoading ? 'Processing...'
                                        : waitForTransactionUsdtAllowanceIsLoading ? 'Awaiting Allowance...'
                                            : (accountAllowancePublic >= usdtAllowanceHelper ? 'Buy EKH' : 'Approve USDT')
                                }
                            </button>
                        </div>
                        <div className="text-slate-300 text-sm mt-2">USDT equivalent: <span className="text-white font-medium">{usdt.toFixed(2)}</span></div>

                        {/* Inline feedback */}
                        <div className="mt-3 space-y-2 text-xs">
                            <div className="text-slate-400"><b>Status:</b> {buyWithUsdtPrepareStatus}</div>
                            {usdtAllowanceIsPrepareError && <div className="text-red-400"><b>USDT Allowance Error:</b> {usdtAllowancePrepareError?.message}</div>}
                            {usdtAllowanceError && <div className="text-red-400"><b>USDT Allowance Error:</b> {usdtAllowanceError?.message}</div>}
                            {buyWithUsdtIsPrepareError && <div className="text-red-400"><b>buyWithUsdtIsPrepareError</b> {buyWithUsdtPrepareError?.message}</div>}
                            {isBuyWithUsdtError && <div className="text-red-400"><b>isBuyWithUsdtError:</b> {buyWithUsdtError?.message}</div>}
                            {accountAllowanceIsError && <div className="text-red-400"><b>accountAllowanceIsError:</b> {accountAllowanceError?.message}</div>}
                        </div>

                        {waitForTransactionIsSuccess && (
                            <div className="mt-4 rounded-lg border border-green-700 bg-green-900/30 p-3 text-green-300">
                                Successfully purchased Ekehi Tokens.
                                <div className="mt-1">
                                    <a className="underline hover:text-green-200" href={`https://bscscan.com/tx/${usdtAllowanceData?.hash}`}>View on explorer</a>
                                </div>
                            </div>
                        )}
                    </form>
                </div>

                {/* Side panels */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                        <h4 className="text-white text-lg font-medium mb-3">User Vesting</h4>
                        <div className="text-slate-300 text-sm">{userVestingParsed}</div>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                        <h4 className="text-white text-lg font-medium mb-3">Presale Data</h4>
                        <div className="text-slate-300 text-sm">{presaleDataParsed}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {renderContent()}
        </>
    )
}
