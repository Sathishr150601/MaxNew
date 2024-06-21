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

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		const x = e.pageX - (containerRef.current?.offsetLeft || 0);
		const walk = (x - startX) * 1; // Adjust scroll speed if needed
		if (containerRef.current) {
			containerRef.current.scrollLeft = scrollLeft - walk;
		}
	};

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
		setScrollLeft(containerRef.current?.scrollLeft || 0);
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
		const walk = (x - startX) * 1; // Adjust scroll speed if needed
		if (containerRef.current) {
			containerRef.current.scrollLeft = scrollLeft - walk;
		}
	};

	const stopDragging = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		const handleMouseUpDocument = () => {
			stopDragging();
		};
		document.addEventListener("mouseup", handleMouseUpDocument);
		document.addEventListener("touchend", handleMouseUpDocument);
		return () => {
			document.removeEventListener("mouseup", handleMouseUpDocument);
			document.removeEventListener("touchend", handleMouseUpDocument);
		};
	}, []);

	return (
		<section
			ref={containerRef}
			className="w-full overflow-hidden cursor-grab"
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseLeave={stopDragging}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
		>
			{children}
		</section>
	);
};

export default SectionSlider;
