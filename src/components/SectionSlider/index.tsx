import { useRef, useState, useEffect } from "react";

interface SectionSliderProps {
	children: React.ReactNode;
}

const SectionSlider: React.FC<SectionSliderProps> = ({ children }) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(true);
		setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
		setScrollLeft(containerRef.current?.scrollLeft || 0);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		const x = e.pageX - (containerRef.current?.offsetLeft || 0);
		const walk = (x - startX) * 1; // Adjust scroll speed if needed
		if (containerRef.current) {
			containerRef.current.scrollLeft = scrollLeft - walk;
		}
	};

	useEffect(() => {
		const handleMouseUpDocument = () => {
			setIsDragging(false);
		};
		document.addEventListener("mouseup", handleMouseUpDocument);
		return () => {
			document.removeEventListener("mouseup", handleMouseUpDocument);
		};
	}, []);

	return (
		<section
			ref={containerRef}
			className="w-full overflow-hidden cursor-grab"
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseUp}
		>
			{children}
		</section>
	);
};

export default SectionSlider;
