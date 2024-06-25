import {
	BookAppointment,
	Heading,
	Hero,
	PageLayout,
	SectionLayout,
	SectionSlider,
	ServiceLogoSlider,
	Testimonials,
	USPS,
} from "@/components";
import images from "@/images";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import servicesData from "@/data/home.json";
import Link from "next/link";

const Home = () => {
	return (
		<PageLayout>
			<Hero />
			<ServiceLogoSlider />

			<Banners />

			<Locations />

			<About />

			<BookAppointment />

			<Services />

			<USPS />

			<Testimonials />

			<div className="h-screen w-full flex justify-center items-center gap-5">
				<h2 className="">Dummy Section</h2>
			</div>
		</PageLayout>
	);
};

export default Home;

const Banners: React.FC = () => {
	const bannerImages = [images.img.img1, images.img.img1];

	return (
		<SectionLayout>
			<div className="w-full h-max flex flex-wrap gap-5">
				{bannerImages.map((img, index) => (
					<div
						key={index}
						className="w-full lg:w-[calc(50%-10px)] h-48 sm:h-60 lg:h-80 2xl:h-96 border-black border-[1px] rounded-3xl overflow-hidden"
					>
						<Image
							src={img}
							alt={`Banner ${index + 1}`}
							className="w-full h-full"
						/>
					</div>
				))}
			</div>
		</SectionLayout>
	);
};

const Locations: React.FC = () => {
	const locations = [
		{ name: "Chennai", image: images.loc.chn },
		{ name: "Bangalore", image: images.loc.bng },
		{ name: "Coimbatore", image: images.loc.cmbt },
		{ name: "Hyderabad", image: images.loc.hyd },
		{ name: "Delhi", image: images.loc.mum },
		{ name: "Noida", image: images.loc.noi },
	];

	return (
		<SectionLayout>
			<Heading
				title="Just Steps Away"
				desc="Odit dolor dolores rem fugiat. Qui, minima itaque. Eveniet iure incidunt odio
					at consequuntur."
			/>

			<SectionSlider>
				<div className="w-[calc(450vw+12.5rem)] lg:w-[calc(150vw+2.5rem)] flex gap-5 lg:gap-10 mx-[2.5vw]">
					{locations.map((location) => (
						<div
							key={location.name}
							className="w-[75vw] lg:w-[25vw] h-max border-black border-[1px] rounded-3xl flex flex-col justify-between overflow-hidden"
						>
							<h5 className="text-center uppercase font-bold text-4xl pt-5 lg:pt-10">
								{location.name}
							</h5>

							<Image
								src={location.image}
								alt={location.name}
								className="w-full"
							/>
						</div>
					))}
				</div>
			</SectionSlider>
		</SectionLayout>
	);
};

const About: React.FC = () => {
	const content = [
		{
			image: images.img.img1,
			image1: images.img.img2,
			text: `
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio magni cupiditate! Corrupti unde vel aperiam illum sequi pariatur ipsa impedit magnam, neque quasi recusandae in vitae natus soluta id.
				</span>
				<br /><br />
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit 
					voluptas quis officiis perferendis aliquam assumenda provident aspernatur, 
					similique recusandae saepe dolores soluta illo culpa sapiente deserunt! 
					Vero, tempore! Ab!
				</span>
			`,
		},
		{
			image: images.img.img3,
			image1: images.img.img2,
			text: "",
		},
	];

	return (
		<SectionLayout>
			<Heading
				title="About Max"
				desc="Odit dolor dolores rem fugiat. Qui, minima itaque. Eveniet iure incidunt odio at consequuntur."
			/>

			{content.map((item, index) => (
				<div
					className="w-full flex max-lg:flex-col justify-center gap-16"
					key={index}
				>
					<div
						className={`w-full lg:w-1/2 ${
							index === 1 ? "pt-[15%]" : ""
						} flex justify-end`}
					>
						<Image
							src={item.image}
							alt={`About image ${index + 1}`}
							className="rounded-3xl"
						/>
					</div>
					<div className="w-full lg:w-1/2">
						<p
							className={`w-full lg:w-2/3 ${
								index === 1 ? "hidden" : ""
							} lg:text-xl leading-normal`}
							dangerouslySetInnerHTML={{ __html: item.text }}
						/>
						<Image
							src={item.image1}
							alt={`About image ${index + 1}`}
							className={`${index === 0 ? "hidden" : ""} rounded-3xl`}
						/>
					</div>
				</div>
			))}
		</SectionLayout>
	);
};

const Services: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = useState<number | null>(0);
	const [selectedService, setSelectedService] = useState<string | null>(null);

	const serviceHeading = {
		title: "Our Services",
		desc: "Odit dolor dolores rem fugiat. Qui, minima itaque. Eveniet iure incidunt odio at consequuntur.",
	};

	const ServiceData = [
		{
			id: 1,
			category: "Surgical Treatments",
			checkOutText: "Check Out Now",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
			image: images.img.img1,
			btntext: "Check Now",
			catHeading: "Treatments",
			services: [
				{
					id: 1,
					name: "Basic Hair Transplant",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 2,
					name: "Women Hair Transplant",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 3,
					name: "Sapphire Hair Transplant",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 4,
					name: "IGM Hair Transplant",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 5,
					name: "DHI Hair Transplant",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 6,
					name: "Ice Cell Sapphire Mirror FUE",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 7,
					name: "Eyebrow Hair Transplant",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 8,
					name: "Beard Hair Transplant",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
			],
		},
		{
			id: 2,
			category: "Non-Surgical Treatments",
			checkOutText: "Check Out Now",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
			image: images.img.img1,
			btntext: "Check Now",
			catHeading: "Treatments",
			services: [
				{
					id: 1,
					name: "Tres Pro",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 2,
					name: "Celebrity's Choice",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 3,
					name: "Satin Lace",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 4,
					name: "French Grip",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 5,
					name: "Dura",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
			],
		},
		{
			id: 3,
			category: "Non-Invasive Treatments",
			checkOutText: "Check Out Now",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
			image: images.img.img1,
			btntext: "Check Now",
			catHeading: "Treatments",
			services: [
				{
					id: 1,
					name: "CC PRP Active+",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 2,
					name: "Oxygen Laser Therapy",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 3,
					name: "Dr Regrowth",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 4,
					name: "Crotico - Shot",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 5,
					name: "Laser  Helmet",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 6,
					name: "Meso QR678",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 7,
					name: "Scalp Detox",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 8,
					name: "Scalp MicroPigmentation",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 9,
					name: "EyeLash Extension",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
				{
					id: 10,
					name: "EyeBrow MicroBlading",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
					image: images.img.img1,
				},
			],
		},
	];

	const handleCategoryClick = (index: number) => {
		setSelectedCategory(index === selectedCategory ? null : index);
		setSelectedService(null);
	};

	return (
		<SectionLayout>
			<Heading title={serviceHeading.title} desc={serviceHeading.desc} />

			<div className="w-full flex flex-col justify-between items-center">
				{ServiceData.map((category, index) => (
					<div
						key={category.id}
						className="w-full flex flex-col justify-between items-center gap-8 border-black border-y-[1px] py-5"
					>
						<div
							className="w-full flex justify-between items-center"
							onClick={() => handleCategoryClick(index)}
						>
							<h4 className="mb-0">{category.category}</h4>
							<h6 className="mb-0 flex justify-normal items-center gap-2 cursor-pointer">
								{ServiceData[index].btntext} <GoArrowUpRight />
							</h6>
						</div>
						{selectedCategory === index && (
							<div className="w-full flex flex-col lg:flex-row justify-between items-center gap-5 px-5">
								<div className="w-full lg:w-3/4 flex flex-col lg:flex-row justify-center items-center gap-4 p-5 bg-gray-100 rounded-3xl">
									<Image
										src={
											ServiceData[index].services.find(
												(service) => service.name === selectedService
											)?.image || ServiceData[index].image
										}
										alt=""
										className="w-full rounded-3xl lg:w-3/4"
										width={1024}
										height={512}
									/>
									<div>
										<h4 className="text-2xl lg:text-4xl">
											{selectedService ? selectedService : category.category}
										</h4>
										<p className="text-sm lg:text-xl">
											{selectedService
												? ServiceData[index].services.find(
														(service) => service.name === selectedService
												  )?.description
												: category.description}
										</p>
									</div>
								</div>
								<div className="w-full lg:w-1/4">
									<h4
										className="text-left cursor-pointer lg:text-right font-font-semibold"
										onClick={() => setSelectedService(null)}
									>
										{ServiceData[index].catHeading}
									</h4>
									<ul className="list-none flex flex-col items-start lg:items-end gap-2 lg:hidden max-lg:pl-5">
										{category.services.map((service) => (
											<li key={service.id} className="">
												<Link
													href={`/services/${encodeURIComponent(
														service.name.toLowerCase().replace(/\s+/g, "-")
													)}`}
												>
													<h5 className="font-extralight mb-0 cursor-pointer">
														{service.name}
													</h5>
												</Link>
											</li>
										))}
									</ul>
									<ul className="list-none flex flex-col items-center lg:items-end gap-2 max-lg:hidden">
										{category.services.map((service) => (
											<li
												key={service.id}
												className=""
												onClick={() => setSelectedService(service.name)}
											>
												<h5 className="font-extralight mb-0 cursor-pointer">
													{service.name}
												</h5>
											</li>
										))}
									</ul>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</SectionLayout>
	);
};
