const SectionLayout = ({ children }: any) => {
	return (
		<section className="SectionLayout py-[5vh] lg:py-[5vh]">
			<div className="SectionLayoutWrapper px-[2.5vw] lg:px-[5vw]">
				{children}
			</div>
		</section>
	);
};

export default SectionLayout;
