"use client";

import { useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
	const scrollY = useMotionValue(0);
	const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 20 });

	useEffect(() => {
		const handleScroll = () => {
			scrollY.set(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollY]);

	const y = useTransform(smoothScrollY, (value) => -value * 0.9);

	return (
		<motion.div style={{ y }}>
			<motion.div
				className="relative z-5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
			>
				{children}
			</motion.div>
			{/* <motion.div
				className="slide-out top-0 left-0 w-screen h-screen bg-black fixed z-5"
				initial={{ translateY: "100%" }}
				animate={{ translateY: "-100%" }}
				exit={{ translateY: "100%" }}
				transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
			></motion.div> */}
		</motion.div>
	);
}
