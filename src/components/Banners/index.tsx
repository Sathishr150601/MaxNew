import { SectionLayout } from "@/components";
import images from "@/images";
import Image from "next/image";

const Banners: React.FC = () => {
	return (
		<SectionLayout>
			<div className="w-full h-max flex flex-wrap gap-5">
				<div className="w-full lg:w-[calc(50%-10px)] h-48 sm:h-60 lg:h-80 2xl:h-96 border-black border-[1px] rounded-3xl overflow-hidden">
					<Image src={images.img.img1} alt="" className="w-full h-full" />
				</div>

				<div className="w-full lg:w-[calc(50%-10px)] h-48 sm:h-60 lg:h-80 2xl:h-96 border-black border-[1px] rounded-3xl overflow-hidden">
					<Image src={images.img.img1} alt="" className="w-full h-full" />
				</div>
			</div>
		</SectionLayout>
	);
};

export default Banners;
