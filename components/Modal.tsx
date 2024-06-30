// components/Modal.tsx
import { FC } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onClaim: () => void
  claimAmount: number
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, onClaim, claimAmount }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Claim B3TR</h2>
        <p className="mb-4">You are about to claim {claimAmount} B3TR.</p>
        <button
          className="bg-[#673147] px-4 py-2 text-white rounded-md hover:bg-[#502638] transition duration-200 ease-in-out"
          onClick={() => {
            onClaim()
            onClose()
          }}
        >
          Claim
        </button>
        <button
          className="mt-4 bg-gray-500 px-4 py-2 text-white rounded-md hover:bg-gray-700 transition duration-200 ease-in-out"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Modal
