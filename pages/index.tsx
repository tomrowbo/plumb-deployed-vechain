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
			<main className='bg-gradient-to-b from-[#1A1A2E] to-[#6200EA]'>
				<div className='flex h-screen w-screen flex-col items-center justify-center'>
						<Blobby />
					<h2 className='mt-4 mb-6 text-2xl font-semibold text-white text-center'>
						Sign in to your account
					</h2>
					<div className='w-full px-8 transform translate-y-32'> {/* Moved the button down */}
						{!isInstalled && isAndroid ? (
							<button
								className='my-4 w-full rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm'
								onClick={promptToInstall}
							>
								Install App
							</button>
						) : (
							<button
								className='my-4 w-full rounded-full bg-purple-600 px-4 py-3 text-lg font-bold text-white shadow-lg hover:bg-purple-700'
								onClick={login}
								disabled={!ready || authenticated}
							>
								Log In →
							</button>
						)}
					</div>
				</div>
			</main>
		</>
	)
}

export default Index
