import Image from "next/image";
import Heading from "../Heading";
import images from "@/images";
import { motion, useScroll, useTransform } from "framer-motion";
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
	const contentRef1 = useRef<HTMLDivElement>(null);
	const contentRef2 = useRef<HTMLDivElement>(null);
	const [start, setStart] = useState(0); // State for start position
	const [end1, setEnd1] = useState(0); // State for end position of first motion.div
	const [end2, setEnd2] = useState(0); // State for end position of second motion.div

	useLayoutEffect(() => {
		const handleScroll = () => {
			if (sectionRef.current && contentRef1.current && contentRef2.current) {
				const sectionTop = sectionRef.current.getBoundingClientRect().top;
				const contentBottom1 =
					contentRef1.current.getBoundingClientRect().bottom;
				const contentBottom2 =
					contentRef2.current.getBoundingClientRect().bottom;
				const windowHeight = window.innerHeight;

				const newStart = scrollY.get() + sectionTop - windowHeight / 2;
				const newEnd1 = scrollY.get() + contentBottom1;
				const newEnd2 = scrollY.get() + contentBottom2;

				setStart(newStart);
				setEnd1(newEnd1);
				setEnd2(newEnd2);
			}
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollY]);

	const y1 = useTransform(scrollY, [start, end1], [-100, 600]);
	const y2 = useTransform(scrollY, [start, end2], [0, 1000]);

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

				{/* First motion.div */}
				<motion.div
					style={{ y: y1 }}
					className="w-full h-[100vh] lg:h-[200vh] relative z-10 flex justify-center items-center lg:hidden"
					ref={contentRef1}
				>
					<h3 className="text-[11vw] leading-snug text-center text-white p-[10%]">
						The Results that Astounds our Clients are an attestation to our
						success.
					</h3>
				</motion.div>

				{/* Second motion.div */}
				<motion.div
					style={{ y: y2 }}
					className="w-full h-[100vh] lg:h-[200vh] relative z-10 flex justify-center items-center max-lg:hidden"
					ref={contentRef2}
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
