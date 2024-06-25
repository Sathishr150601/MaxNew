import images from "@/images";
import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import Heading from "../Heading";
import SectionLayout from "../SectionLayout";

interface ServiceProps {
	title: string;
	imageSrc: string;
	extraClass?: string;
}

const data = {
	title: "Our Special Services",
	desc: "Odit dolor dolores rem fugiat. Qui, minima itaque. Eveniet iure incidunt odio at consequuntur.",
};

const services: ServiceProps[] = [
	{
		title: "IGM Hair Transplant",
		imageSrc: images.img.img1,
	},
	{
		title: "Mesotherapy",
		imageSrc: images.img.img1,
	},
	{
		title: "ICE Cell Sapphire Micro FUE",
		imageSrc: images.img.img1,
	},
	{
		title: "CC PRP Active plus",
		imageSrc: images.img.img1,
	},
	{
		title: "Oxygen LASER Therapy",
		imageSrc: images.img.img1,
	},
	{
		title: "Stem X27",
		imageSrc: images.img.img1,
	},
	{
		title: "Cosmetic Hair Replacement",
		imageSrc: images.img.img1,
	},
];

const generateHref = (title: string) => {
	return `/services/${title.toLowerCase().replace(/ /g, "-")}`;
};

const Service: React.FC<ServiceProps> = ({
	title,
	imageSrc,
	extraClass = "",
}) => (
	<div className={`service w-max flex items-center ${extraClass}`}>
		<span className="glow">
			<Link href={generateHref(title)} className="flex items-center gap-2">
				{title} <BsDot className="text-black" />
			</Link>
		</span>
		<Image
			src={imageSrc}
			alt={title}
			className="s1 mx-[4vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw] h-[30vw] lg:h-[25vw] pointer-events-none"
		/>
	</div>
);

const SpclServices: React.FC = () => {
	return (
		<SectionLayout>
			<Heading title={data.title} desc={data.desc} />

			<div className="Services text-black">
				<div className="sm:pl-[5vw]">
					<div className="ServicesText">
						<h2 className=" flex max-lg:flex-col lg:flex-wrap text-black text-[5.5vw] lg:text-[2.8vw] 2xl:text-[3vw]">
							{services.map((service, index) => (
								<div key={index} className="flex flex-col lg:flex-row">
									<Service
										title={service.title}
										imageSrc={service.imageSrc}
										extraClass={index % 2 === 0 ? "lg:pr-[3vw]" : ""}
									/>
								</div>
							))}
						</h2>
					</div>
				</div>
			</div>
		</SectionLayout>
	);
};

export default SpclServices;
