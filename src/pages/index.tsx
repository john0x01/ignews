import { SubscribeButton } from "@/components/SubscribeButton"
import Head from "next/head"

export default function Home() {
	return (
		<>
			<Head><title>Início | ig.news</title></Head>
			
			<main className="flex max-w-6xl mx-auto px-8 h-[calc(100vh - 5rem)] items-center justify-between">
				<section className="max-w-[600px]">
					<span className="text-2xl font-bold">👋 Hey, Welcome!</span>
					<h1 className="text-7xl leading-[4.5rem] font-black">
						News about the 
						<span className="text-cyan-500"> React
						</span> world.
					</h1>
					<p className="text-2xl leading-9 mt-6">
						Get access to all the publications<br />
						<span className="text-cyan-500 font-bold">for $9.90/month</span>
					</p>
					<div className="mt-10">
						<SubscribeButton />
					</div>
				</section>

				<img src="/images/avatar.svg" alt="" />
			</main>
		</>
	)
}