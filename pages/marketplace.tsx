import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import React, { FC } from 'react' // Import React and FC

const Marketplace: FC = () => {
  const router = useRouter()
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    // Retrieve the balance from localStorage
    const storedBalance = parseInt(localStorage.getItem('b3trBalance') || '0', 10)
    setBalance(storedBalance)
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-4">
      <div className="w-full max-w-lg text-center bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800">Plumb Marketplace</h1>
        <p className="mt-4 text-lg text-gray-600">
          Total Balance: <span className="font-bold">{balance} B3TR</span>
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Available Gift Cards</h2>
          <div className="mt-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold text-gray-800">Amazon Gift Card</h3>
              <p className="text-gray-600">Price: 500 B3TR</p>
              <button className="mt-2 bg-[#673147] px-4 py-2 text-white rounded-md hover:bg-[#502638] transition duration-200 ease-in-out" disabled={balance < 50}>
                Buy Now
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Walmart Gift Card</h3>
              <p className="text-gray-600">Price: 500 B3TR</p>
              <button className="mt-2 bg-[#673147] px-4 py-2 text-white rounded-md hover:bg-[#502638] transition duration-200 ease-in-out" disabled={balance < 30}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
