import Image from 'next/image'
import logo from '@/public/images/logo.png'

const Blobby = () => {
	return (
		<div className='my-4'>
			<Image
				src={logo}
				alt="Logo"
				width={100}
				style={{ objectFit: 'contain' }} // Ensures the image fits well within the given dimensions
			/>
		</div>
	)
}

export default Blobby