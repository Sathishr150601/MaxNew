import {
	BookAppointment,
	Heading,
	Hero,
	PageLayout,
	SectionLayout,
	SectionSlider,
	ServiceLogoSlider,
} from "@/components";
import images from "@/images";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
	return (
		<PageLayout>
			<Hero />
			<ServiceLogoSlider />

			<Banners />

			<Locations />

			<About />

			<BookAppointment />

			<div className="w-full h-max py-[8vh] flex flex-col gap-10">
				<div className="px-[15%] pb-[3%]">
					<h4 className="text-black font-bold mb-5">Our Services</h4>
					<p className="w-1/2 text-xl leading-normal">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolor
						dolores rem fugiat. Qui, minima itaque. Eveniet iure incidunt odio
						at consequuntur.
					</p>
				</div>

				<div className="px-[5%]">
					<div className="border-black border-t-[1px] border-b-[1px] p-5 flex flex-col justify-between items-center gap-8">
						<div className="w-full flex justify-between items-center">
							<h4 className="">Surgical Treatments</h4>
							<h6 className="flex justify-normal items-center gap-5">
								Check Out Now
								<GoArrowUpRight />
							</h6>
						</div>

						<div className="w-full flex justify-between items-center px-10">
							<div className="w-2/3 flex justify-center items-center gap-8 p-5 bg-gray-100 rounded-3xl">
								<Image
									src={images.img.img1}
									alt=""
									className="w-2/3 rounded-3xl"
								/>

								<div className="">
									<h4 className="">Heading</h4>
									<p className="text-xl">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Eius harum, beatae dolorem nemo et sapiente cumque eligendi
										eveniet esse ipsum dolor! Corrupti in, laboriosam tempore
										aliquam dignissimos odio sequi voluptatem.
									</p>
								</div>
							</div>

							<div className="w-1/3">
								<h4 className="text-right">Treatments</h4>
								<ul className="list-none flex flex-col items-end">
									<li className="">
										<h5 className="font-extralight mb-0">
											Basic Hair Transplant
										</h5>
									</li>
									<li className="">
										<h5 className="font-extralight mb-0">
											Women Hair Transplant
										</h5>
									</li>
									<li className="">
										<h5 className="font-extralight mb-0">
											IGM Hair Transplant
										</h5>
									</li>
									<li className="">
										<h5 className="font-extralight mb-0">
											Sapphire Hair Transplant
										</h5>
									</li>
									<li className="">
										<h5 className="font-extralight mb-0">
											DHI Hair Transplant
										</h5>
									</li>
									<li className="">
										<h5 className="font-extralight mb-0">
											Ice Cell Sapphire Mirror FUE
										</h5>
									</li>
									<li className="">
										<h5 className="font-extralight mb-0">
											Beard Hair Transplant
										</h5>
									</li>
									<li className="">
										<h5 className="font-extralight mb-0">
											Eyebrow Hair Transplant
										</h5>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="border-black border-t-[1px] border-b-[1px] p-5 flex flex-col justify-between items-center gap-8">
						<div className="w-full flex justify-between items-center">
							<h4 className="">Non - Surgical Treatments</h4>
							<h6 className="flex justify-normal items-center">
								Check Out Now
								<GoArrowUpRight />
							</h6>
						</div>
					</div>

					<div className="border-black border-t-[1px] border-b-[1px] p-5 flex flex-col justify-between items-center gap-8">
						<div className="w-full flex justify-between items-center">
							<h4 className="">Non - Invasive Treatments</h4>
							<h6 className="flex justify-normal items-center">
								Check Out Now
								<GoArrowUpRight />
							</h6>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full h-max px-[5vw] py-[8vh]">
				<div className="w-full flex justify-center items-center gap-10">
					<div className="w-1/3 flex flex-col justify-center pl-[5%]">
						<h3 className="leading-tight mb-5">
							Welcome to our Hair Transplant Center
						</h3>
						<p className="text-2xl mb-5">
							Vestibulum morbi blandit cursus risus. Augue neque gravida in
							fermentum et sollicitudin.
						</p>
						<ul className="list-disc text-xl ml-5">
							<li className="">Best Clinic for safe Procedure</li>
							<li className="">Advanced Non-touch Bio FUE</li>
						</ul>
					</div>

					<div className="w-1/3 flex justify-center">
						<Image src={images.img.img5} alt="" className="" />
					</div>

					<div className="w-1/3 flex flex-col justify-evenly items-start">
						<div className="w-full px-[5%]">
							<div className="w-full">
								<h5 className="font-semibold">Report Efficiency</h5>
								<hr />
								<p className="text-xl">
									Vestibulum morbi blandit cursus risus. Augue neque gravida.
								</p>
							</div>
							<div className="w-full">
								<h5 className="font-semibold">Report Efficiency</h5>
								<hr />
								<p className="text-xl">
									Vestibulum morbi blandit cursus risus. Augue neque gravida.
								</p>
							</div>
							<div className="w-full">
								<h5 className="font-semibold">Report Efficiency</h5>
								<hr />
								<p className="text-xl">
									Vestibulum morbi blandit cursus risus. Augue neque gravida.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

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
