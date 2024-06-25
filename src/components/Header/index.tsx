import images from "@/images";
import Image from "next/image";

const Header: React.FC = () => {
	return (
		<div className="w-full h-max flex justify-between items-center absolute z-50 px-5 lg:px-10">
			<div className="w-1/3 flex justify-start max-lg:hidden">
				<h4 className="text-white">Call Btn</h4>
			</div>

			<div className="w-1/2 lg:w-1/3 flex justify-start lg:justify-center">
				<Image src={images.img.logo} alt="" className="w-60" />
			</div>

			<div className="w-1/2 lg:w-1/3 flex justify-end">
				<h4 className="text-white">Menu</h4>
			</div>
		</div>
	);
};

export default Header;
