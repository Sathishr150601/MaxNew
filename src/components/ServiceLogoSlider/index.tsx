import images from "@/images";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ServiceLogoSlider: React.FC = () => {
	return (
		<section
			className="w-full h-max flex gap-5 py-[2.5vh] px-[2.5vw] items-center justify-between"
			id="LogoSlider"
		>
			<h4 className="w-1/3 lg:w-1/5 leading-none font-semibold mb-0">
				Elite Service
				<br className="max-lg:hidden" /> Emblems
			</h4>

			<Marquee
				className="h-max w-2/3 lg:w-4/5 flex gap-5 GoldenEmberShadow"
				direction={"left"}
			>
				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>

				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>

				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>

				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>

				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>

				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>

				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>

				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>

				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>

				<div className="w-24 lg:w-36 mx-5">
					<Image src={images.img.logo} alt="logo" className="w-24 lg:w-36" />
				</div>
			</Marquee>
		</section>
	);
};

export default ServiceLogoSlider;
