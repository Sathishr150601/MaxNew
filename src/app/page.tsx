"use client";

import { PreLoader } from "@/components";
import { useEffect, useState } from "react";
import Home from "./home";

function Origin() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const handleDOMContentLoaded = () => {
			setIsLoading(false);
		};

		if (document.readyState === "complete") {
			setIsLoading(false);
		} else {
			window.addEventListener("load", handleDOMContentLoaded);
			return () => {
				window.removeEventListener("load", handleDOMContentLoaded);
			};
		}
	}, []);

	return <>{isLoading ? <PreLoader /> : <Home />}</>;
}

export default Origin;
