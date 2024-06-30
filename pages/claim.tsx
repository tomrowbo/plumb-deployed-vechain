import AuthenticatedPage from '@/components/authenticated-page';
import Modal from '@/components/Modal';
import { usePrivy } from '@privy-io/react-auth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

// Rename the component to start with an uppercase letter
const Claim: FC = () => {
  const { user } = usePrivy();
  const [balance, setBalance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { ammount } = router.query;
  const claimAmount = parseInt(ammount?.toString() || "");

  const handleClaimB3TR = () => {
    // Update the balance by adding the claim amount
    setBalance(balance + claimAmount);
    // Store the balance in localStorage
    localStorage.setItem('b3trBalance', (balance + claimAmount).toString());
    // Navigate to the marketplace
    router.push('/marketplace');
  };

  return (
    <AuthenticatedPage>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-4">
        <div className="w-full max-w-lg text-center bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-3xl font-bold text-gray-800">Plumb Dashboard</h1>
          <p className="mt-4 text-lg text-gray-600">
            B3TR Balance: <span className="font-bold">{balance} B3TR</span>
          </p>
          <button
            className="mt-8 w-full rounded-md bg-[#673147] px-4 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#502638] transition duration-200 ease-in-out"
            onClick={() => setIsModalOpen(true)}
          >
            Claim {claimAmount} B3TR
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onClaim={handleClaimB3TR}
          claimAmount={claimAmount}
        />
      </div>
    </AuthenticatedPage>
  );
};

export default Claim;
