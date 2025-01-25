"use client";

import { BlogError } from "@/components/BlogError";
import { useEffect, useRef } from "react";

export default function Home() {
	return (
		<div className="grow bg-[url(../public/image/home-bg.png)] bg-cover bg-center">
			<Clock />
		</div>
	);
}

function Clock() {
	const clock = useRef<HTMLCanvasElement>(null);

	const renderClock = () => {
		const canvas = clock.current;
		if (!canvas) {
			throw new BlogError("canvas not found");
		}
		canvas.width = 600;
		canvas.height = 300;
	};
	useEffect(() => {
		renderClock();
	}, []);

	return <canvas ref={clock} className=""></canvas>;
}
