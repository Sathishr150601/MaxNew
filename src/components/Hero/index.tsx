import images from "@/images";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 4000], [0, -1500]);

	return (
		<section
			className="w-full h-[115vh] lg:h-[150vh] 2xl:h-[180vh] bg-[var(--Secondary)] text-[var(--Primary)] overflow-hidden"
			id="Hero"
		>
			<div className="heroWrapper">
				<div className="BgImg fixed z-0 lg:top-[-40vh] left-0 w-screen h-[115vh] lg:h-[190vh] 2xl:h-[220vh] overflow-hidden">
					<Image
						src={images.bg.hero}
						alt="Background"
						layout="fill"
						objectFit="cover"
						className="pointer-events-none max-lg:opacity-80"
						loading="lazy"
					/>
				</div>

				<motion.div
					style={{ y }}
					className="Content relative z-10 w-full h-max pt-[25vh] sm:pt-[28vh] lg:py-[20vh] px-[2.5vw] sm:px-[3.5vw] lg:px-[10vw] 2xl:px-[15vw]"
				>
					<div className="w-full h-[40vh] lg:h-[75vh] 2xl:h-[100vh] flex flex-col justify-center items-start pb-10">
						<h4 className="flex flex-col text-[5.5vw] sm:text-[4.5vw] lg:text-[2.75vw] 2xl:text-[2vw] leading-snug mb-5 2xl:ml-4">
							<span className="">MAX</span>
							<span className="">Hair Clinic</span>
						</h4>

						<h1 className="flex flex-col text-[22vw] sm:text-[16vw] lg:text-[11vw] 2xl:text-[12vw] leading-none">
							<span className="">Hair</span>
							<span className="">Defines</span>
							<span className="">You</span>
						</h1>
					</div>

					<div className="w-full h-[45vh] lg:h-[75vh] 2xl:h-[80vh] flex flex-col justify-start items-start pt-10 lg:items-end">
						<p className="text-[5vw] sm:text-[3.5vw] lg:text-[2.15vw] 2xl:text-[1.75vw] sm:w-5/6 lg:w-3/5 mb-10">
							Max Hair Clinic incorporated in 2004 is self-defined brand name in
							the modern world of Hair transplant in India cascading excellence
							in delivery, we continue our operations in a class apart of OPD
							facilities environment
						</p>

						<p className="text-[5vw] sm:text-[3.5vw] lg:text-[2.15vw] 2xl:text-[1.75vw] sm:w-5/6 lg:w-3/5">
							Max Hair Clinic incorporated in 2004 is self-defined brand name in
							the modern world of Hair transplant
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
