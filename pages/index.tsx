import Blobby from '@/components/svg/blobby'
import { useLogin, usePrivy } from '@privy-io/react-auth'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { isAndroid } from 'react-device-detect'

const Index = () => {
	const router = useRouter()
    const { ammount } = router.query;
	console.log(ammount)
	const [isInstalled, setIsInstalled] = useState(false)
	const [installationPrompt, setInstallationPrompt] = useState<any>()
	const { ready, authenticated } = usePrivy()
	const { login } = useLogin({
		// Set up an `onComplete` callback to run when `login` completes
		onComplete(user, isNewUser, wasPreviouslyAuthenticated) {
			console.log('🔑 ✅ Login success', {
				user,
				isNewUser,
				wasPreviouslyAuthenticated,
			})
			// Call the POST /api/add_betr endpoint
			fetch('/api/add_betr?amount=' + ammount + "&address=" + "0xe4C71689DF0c0E90DD29258703C26624e6E7BcdE", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			}) 

			router.push('/claim?ammount='+ammount)
		},
		// Set up an `onError` callback to run when there is a `login` error
		onError(error) {
			console.log('🔑 🚨 Login error', { error })
		},
	})	

	useEffect(() => {
		// Helps you prompt your users to install your PWA
		// See https://web.dev/learn/pwa/installation-prompt/
		// iOS Safari does not have this event, so you will have
		// to prompt users to add the PWA via your own UI (e.g. a
		// pop-up modal)
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault()
			setIsInstalled(false)
			setInstallationPrompt(e)
		})
	}, [])

	useEffect(() => {
		// Detect if the PWA is installed
		// https://web.dev/learn/pwa/detection/#detecting-the-transfer
		window.addEventListener('DOMContentLoaded', () => {
			if (window.matchMedia('(display-mode: standalone)').matches) {
				setIsInstalled(true)
			}
		})
	})

	const promptToInstall = async () => {
		if (!installationPrompt) return
		installationPrompt.prompt()
		installationPrompt.userChoice.then((response: { outcome: string }) => {
			setIsInstalled(response.outcome === 'accepted')
		})
	}

	return (
		<>
			<Head>
				<title>Plumb</title>
			</Head>
			<main className='bg-gradient-to-b from-[#ffffff] to-[#ffffff]'>
				<div className='flex h-screen w-screen flex-col items-center justify-center'>
					<Blobby />
					<h2 className='my-4 text-xl font-semibold text-gray-800'>
						Plumb
					</h2>
					<div className='mt-2 w-1/2'>
						{!isInstalled && isAndroid ? (
							<button
								className='my-4 w-full rounded-md bg-[#673147] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm disabled:bg-[#673147]'
								onClick={promptToInstall}
							>
								Install App
							</button>
						) : (
							<button
								className='my-4 w-full rounded-md bg-[#673147] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm disabled:bg-[#673147] button-epic'
								onClick={login}
								// Always check that Privy is `ready` and the user is not `authenticated` before calling `login`
								disabled={!ready || authenticated}
							>
								Login
							</button>
						)}
					</div>
				</div>
			</main>
		</>
	)
}

export default Index
