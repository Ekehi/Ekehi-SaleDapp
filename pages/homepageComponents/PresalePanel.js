import { ConnectButton } from '@rainbow-me/rainbowkit';
import PresaleManager from '../utils/PresaleManager';

/**
 * A presentational wrapper that shows a polished purchase card
 * with wallet connect and the PresaleManager form.
 */
export default function PresalePanel() {
  return (
    <section className="w-full flex justify-center px-4">
      <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-b from-slate-900/80 to-blue-900/60 backdrop-blur-md border border-slate-800 shadow-xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white text-2xl font-semibold">Buy EKH Tokens</h3>
            <p className="text-slate-300 text-sm">Connect your wallet, choose amount, and complete purchase with USDT.</p>
          </div>
          <div className="shrink-0">
            <ConnectButton />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6" />

        <PresaleManager />
      </div>
    </section>
  );
}