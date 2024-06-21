const Heading = ({ title, desc }: { title: string; desc: string }) => {
	return (
		<section className="w-full lg:w-2/3 px-[2.5vw] lg:px-[8vw] pb-[3vh]">
			<h4 className="font-semibold">{title}</h4>
			<p className="lg:w-3/4 lg:text-xl">{desc}</p>
		</section>
	);
};

export default Heading;
