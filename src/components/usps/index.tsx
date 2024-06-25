import { Heading, SectionLayout } from "@/components";
import images from "@/images";
import Image from "next/image";

const content = {
	heading: "Welcome to our Hair Transplant Center",
	paragraph:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum, beatae dolorem nemo et sapiente cumque eligendi eveniet esse ipsum dolor! Corrupti in, laboriosam tempore aliquam dignissimos odio sequi voluptatem.",
	listItems: [
		"Best Clinic for safe Procedure",
		"Advanced Non-touch Bio FUE",
		"Advanced Non-touch Bio FUE",
	],
	reports: [
		{
			title: "Report Efficiency",
			content: "Vestibulum morbi blandit cursus risus. Augue neque gravida.",
		},
		{
			title: "Report Efficiency",
			content: "Vestibulum morbi blandit cursus risus. Augue neque gravida.",
		},
		{
			title: "Report Efficiency",
			content: "Vestibulum morbi blandit cursus risus. Augue neque gravida.",
		},
	],
};

const USPS: React.FC = () => {
	return (
		<SectionLayout>
			<div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10">
				<div className="w-full lg:w-1/3 flex flex-col justify-start items-start gap-2">
					<h4 className="text-3xl">{content.heading}</h4>
					<p className="mb-5">{content.paragraph}</p>
					<ul className="list-disc text-xl ml-5">
						{content.listItems.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>

				<div className="w-full lg:w-1/3 flex justify-center items-center">
					<Image src={images.img.img5} alt="" className="w-3/4" />
				</div>

				<div className="w-full lg:w-1/3">
					<ul className="list-none flex flex-col gap-5">
						{content.reports.map((report, index) => (
							<li key={index}>
								<h5 className="font-semibold">{report.title}</h5>
								<hr />
								<p className="text-xl">{report.content}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</SectionLayout>
	);
};

export default USPS;
