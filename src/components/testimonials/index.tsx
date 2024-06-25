import Image from "next/image";
import Heading from "../Heading";
import images from "@/images";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

const TestimonialsHeading = {
	title: "",
	desc: "",
};

const TestimonialsData = {
	image: images.bg.test,
	imgalt: "",
};

const Testimonials: React.FC = () => {
	const { scrollY } = useScroll();
	const sectionRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(0);

	useLayoutEffect(() => {
		const handleScroll = () => {
			if (sectionRef.current && contentRef.current) {
				const sectionTop = sectionRef.current.getBoundingClientRect().top;
				const contentBottom = contentRef.current.getBoundingClientRect().bottom;
				const windowHeight = window.innerHeight;

				const newStart = scrollY.get() + sectionTop - windowHeight / 2;
				const newEnd = scrollY.get() + contentBottom;

				setStart(newStart);
				setEnd(newEnd);
			}
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollY]);

	const y1 = useTransform(scrollY, [start, end], [0, 500]);

	return (
		<>
			<Heading
				title={TestimonialsHeading.title}
				desc={TestimonialsHeading.desc}
			/>

			<div
				className="relative w-full h-[150vh] lg:h-[300vh]"
				id="SectionRef"
				ref={sectionRef}
			>
				<div className="w-full h-[150vh] lg:h-[300vh] absolute z-0">
					<Image
						src={TestimonialsData.image}
						alt="Background"
						layout="fill"
						objectFit="cover"
						className="pointer-events-none"
						loading="lazy"
					/>
				</div>

				<motion.div
					style={{ y: y1 }}
					className="w-full h-[100vh] lg:h-[200vh] relative z-10 flex justify-center items-center"
					id="ContentRef"
					ref={contentRef}
				>
					<h3 className="text-[11vw] leading-snug text-center text-white p-[10%]">
						The Results that Astounds our Clients are an attestation to our
						success.
					</h3>
				</motion.div>
			</div>
		</>
	);
};

export default Testimonials;
