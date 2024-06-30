import AuthenticatedPage from '@/components/authenticated-page';
import Modal from '@/components/Modal';
import { usePrivy } from '@privy-io/react-auth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import Image from 'next/image';

const Claim: FC = () => {
  const { user } = usePrivy();
  const [balance, setBalance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { ammount } = router.query;
  const claimAmount = parseInt(ammount?.toString() || '');

  const handleClaimB3TR = () => {
    setBalance(balance + claimAmount);
    localStorage.setItem('b3trBalance', (balance + claimAmount).toString());
    router.push('/marketplace');
  };

  return (
    <AuthenticatedPage>
      <div className="flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-800 text-center m">Congratulations</h1>
        <p className="text-lg text-gray-600 text-center mb-10">For shopping sustainability</p>
        <div className="w-full flex justify-center mb-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/e093/9551/4732101caf0e71b9d253e6785554d437?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaKX6~VWLdH5a8Zl831jH8O1f9VKOHlcLZmT38i3p1k5u6B25Kel-amaRSE83fx420fU1YRtU7PVUyLQCtfA9rPZSp4ntKAarnLK9K5UFtuyJ1ygYBoEgH-U9VTO92mrwrRbYrgIxGDc6QGuu5YZ-pugMvmXy~4Dbh0e7I8V28plt8YwWLfuN0Wh59e974Ykv0m-haLr~6ZdzXPA7NCH9iNJVK3iaT3HG2YPpGoddLE0gw5q0myev1uqEcueRr2Cdxr-xbUxeGVncLa~ZELn6aTofELC8Y5g0G-ND7hfoDE9wcfCbyd-iMUNz6tfwELADbjbp7YjLeUwM8HvKxF71Q__"
            alt="Receipt"
            className="rounded-2xl w-full max-w-md h-64 object-cover"
          />
        </div>
        <p className="text-sm text-gray-600 text-center flex items-center justify-center mb-6">
          <Image src="/images/check.png" alt="Verified Tick" width={20} height={20} className="mr-1" /> Verified Local product
        </p>
        <div className="flex justify-between items-center w-full mb-16">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600 mb-1">Your Reward</p>
            <div className="flex items-center">
              <Image src="/images/e.png" alt="Reward Icon" width={24} height={24} className="mr-2" />
              <p className="text-lg font-bold">20 tokens</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600 mb-1">Powered By</p>
            <div className="flex items-center">
              <Image src="/images/ve.png" alt="VeB3tter Logo" width={100} height={24} className="mr-2" />
            </div>
          </div>
        </div>
        <button
          className="w-full rounded-md bg-blue-600 px-4 py-3 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
          onClick={() => setIsModalOpen(true)}
        >
          Claim {claimAmount} B3tter
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onClaim={handleClaimB3TR}
        claimAmount={claimAmount}
      />
    </AuthenticatedPage>
  );
};

export default Claim;
