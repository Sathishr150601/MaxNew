import Image from "next/image";
import Heading from "../Heading";
import SectionLayout from "../SectionLayout";
import { Carousel } from "antd";
import images from "@/images";
import Link from "next/link";

const data = {
	title: "Latest Blogs",
	desc: "Odit dolor dolores rem fugiat. Qui, minima itaque. Eveniet iure incidunt odio at consequuntur.",

	btn1: "View More",
	btn2: "Click to Continue",
};

const blogs = [
	{
		title: "Lorem ipsum dolor sit amet 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus hic enim facilis dolorum veniam accusamus animi!...",
		imgSrc: images.img.img1,
	},
	{
		title: "Lorem ipsum dolor sit amet 2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus hic enim facilis dolorum veniam accusamus animi!...",
		imgSrc: images.img.img1,
	},
	{
		title: "Lorem ipsum dolor sit amet 3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus hic enim facilis dolorum veniam accusamus animi!...",
		imgSrc: images.img.img1,
	},
	{
		title: "Lorem ipsum dolor sit amet 4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus hic enim facilis dolorum veniam accusamus animi!...",
		imgSrc: images.img.img1,
	},
	{
		title: "Lorem ipsum dolor sit amet 5",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus hic enim facilis dolorum veniam accusamus animi!...",
		imgSrc: images.img.img1,
	},
	{
		title: "Lorem ipsum dolor sit amet 6",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus hic enim facilis dolorum veniam accusamus animi!...",
		imgSrc: images.img.img1,
	},
];

const commonCarouselProps = {
	arrows: true,
	dots: true,
	draggable: true,
	autoplay: true,
	autoplaySpeed: 3500,
	pauseOnHover: true,
	pauseOnFocus: true,
	pauseOnDotsHover: true,
	adaptiveHeight: true,
};

const BlogSlider: React.FC = () => {
	const generateUrl = (title: string) => {
		return `/blogs/${title.toLowerCase().replace(/\s+/g, "-")}`;
	};

	return (
		<SectionLayout>
			<div className="flex justify-between items-center">
				<Heading title={data.title} desc={data.desc} />
				<div className="px-[10%] text-xl max-lg:hidden">{data.btn1}</div>
			</div>

			<div className="lg:hidden">
				<Carousel {...commonCarouselProps}>
					{blogs.map((blog, index) => (
						<Link
							href={generateUrl(blog.title)}
							key={index}
							className="w-full h-max p-5 hover:text-black"
						>
							<Image src={blog.imgSrc} alt="" className="rounded-3xl" />

							<div className="px-5">
								<h5>{blog.title}</h5>
								<p>{blog.description}</p>
								<p>{data.btn2}</p>
							</div>
						</Link>
					))}
				</Carousel>
			</div>

			<div className="max-lg:hidden">
				<Carousel {...commonCarouselProps} slidesPerRow={3}>
					{blogs.map((blog, index) => (
						<Link
							href={generateUrl(blog.title)}
							key={index}
							className="w-full h-max p-5 hover:text-black"
						>
							<Image src={blog.imgSrc} alt="" className="rounded-3xl" />

							<div className="px-5">
								<h5>{blog.title}</h5>
								<p>{blog.description}</p>
								<p>{data.btn2}</p>
							</div>
						</Link>
					))}
				</Carousel>
			</div>
		</SectionLayout>
	);
};

export default BlogSlider;
