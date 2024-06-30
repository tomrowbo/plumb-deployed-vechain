import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import React, { FC } from 'react';
import Image from 'next/image';

const Marketplace: FC = () => {
  const router = useRouter();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Retrieve the balance from localStorage
    const storedBalance = parseInt(localStorage.getItem('b3trBalance') || '0', 10);
    setBalance(storedBalance);
  }, []);

  return (

      <div className="w-full max-w-lg bg-white p-4">
        <div className="flex items-center justify-between mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <Image
              src="/images/Avatar.png"
              alt="Avatar"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-800 mt-2">Plumb Wallet</h1>
       
              <p className="font-semibold text-gray-600 mt-1 flex items-center">
                Balance
              </p>
              <p className="font-bold text-gray-800 mt-1 flex items-center">
                <Image src="/images/e.png" alt="B3TR Icon" width={24} height={24} className="mr-1" /> {balance} B3TR
              </p>
            </div>
          </div>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Edit</button>
        </div>
        <div className="flex justify-around mb-6">
          <div className="text-center">
            <h2 className="font-bold text-gray-800">Marketplace</h2>
            <div className="h-1 bg-green-500 w-20 mx-auto mt-1 rounded-full"></div>
          </div>
          <div className="text-center">
            <h2 className="text-gray-600">History</h2>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            <div className="flex items-center">
              <div className="w-16 h-16">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0930/535e/a8ef19e543178e2b2dc03c0cb02e64af?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ip1kQ2u9L-I~7f24r-Gj~98gOzdqwPcYbNH4euINKO4zZjKKg4IY2NaZoHlUKMXLEr9MepSWac0ToV8xPVaSVHhjZHc3Woe6eI6DVJ~kwZhWoYPkgJ3r6yiVtktXjYl1XGep680pfgBjQM8tLf2qISH3pLzsxcGMc0IuvgIfNhDZV30GcZ9GXYIraw-KLqfA-TwQL5rWqEpA3KDVgt5aC5T02viHwrWDHVRfNX8epx1LfmnW99vigU02G0yNqz-lkBRCYFII4T~HlDy9lynFt3Fff89MBLN~iSVYKhgKelV2c2Yofo8c0Ac2uK7dzgAydlbwFtdqijfMg-1iDDbKdA__" // Replace with your image path
                  alt="Plant"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">Plant A Tree</h3>
                <p className="text-sm text-gray-600">Plant-A-Tree</p>
              </div>
            </div>
            <div className="flex items-center ml-auto space-x-4">
              <div className="border-l-2 border-dashed border-gray-300 h-12"></div>
              <button className="bg-blue-600 text-xs text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
                See more
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            <div className="flex items-center">
              <div className="w-16 h-16">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9848/28fa/36b0cc07cc35ec0d43fc4bc38b6d7f2b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tH0SIqe4K~yFYjjZ8LDM4QXjHCo2iVe8F5woaQ6UdUC5nceyIGOLfvilCiSrmBIRwvsVT6La0EqVrwSTBlQkzjr7N3J7fifBleS90S3eBGuoyOidl-~hGyzigMNZo59adiOW1RVk7EYKzH2yL-ggD4ywWahzTB4xNW~kyP557P6waY2jKk~bZau4IULw-uKSIaZabBop1o~~iEkZFtT8vD1DLHCf9QZIweI-wIX~SVO25a2WY-o1c7rBXy-tTq5St-aGLfBdi3larT5fiNsUAl5QPo76TpM6qQgniKR378fGt9RyeksRPAHkm4eGkuBK~PmQqfQk4I0EFSfN~usw__" // Replace with your image path
                  alt="Walmart"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">Walmart Voucher</h3>
                <p className="text-sm text-gray-600">Walmart</p>
              </div>
            </div>
            <div className="flex items-center ml-auto space-x-4">
              <div className="border-l-2 border-dashed border-gray-300 h-12"></div>
              <button className="bg-blue-600 text-xs text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
                See more
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            <div className="flex items-center">
              <div className="w-16 h-16">
                <img
                  src="https://s3-alpha-sig.figma.com/img/072a/61b9/8eaa25b439a51055e83e1e79f97a3a49?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Exc0RFUL7QZvKyOSKCGF1L1Ah2t5WE4RMrdLDqFgnm~eWI3HO4fxgPRMNw8nbZ73xhK3V4D8aN029wpMuWDxVrK0U8lJKGupPywFCS~TrVP6tZ8P497Sykh1q4L4In~9MxNK8RECJ4edJhgNwejQvRrKKpTdWqzkFLuOhaFyQ4pWIgDj6tYdI3Hcem0znEwVl1j931MkQ5fO~~0x-SfHjnh~GckxV8hXxfck9AlAzsj7277rc2hDNeP2U5RnAq4VNv4lDSFJ5ovshBo4MAUjMqZYkaiNzqS-JRFfmtn6VemjAiG-4oA5mKPa5cMQDg~ymSqbm7NXVatc9aD6~VuCUA__" // Replace with your image path
                  alt="Amazon"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">Amazon Voucher</h3>
                <p className="text-sm text-gray-600">Amazon</p>
              </div>
            </div>
            <div className="flex items-center ml-auto space-x-4">
              <div className="border-l-2 border-dashed border-gray-300 h-12"></div>
              <button className="bg-blue-600 text-xs text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Marketplace;
