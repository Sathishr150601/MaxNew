const SectionLayout = ({ children }: any) => {
	return (
		<section className="SectionLayout py-[3vh] lg:py-[6vh]">
			<div className="SectionLayoutWrapper px-[2.5vw] lg:px-[5vw]">
				{children}
			</div>
		</section>
	);
};

export default SectionLayout;
