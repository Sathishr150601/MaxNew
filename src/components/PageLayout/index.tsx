import Header from "../Header";
import Footer from "../Footer";
import Template from "./template";

interface LayoutProps {
	children: React.ReactNode;
	showHeader?: boolean;
	showFooter?: boolean;
}

const PageLayout: React.FC<LayoutProps> = ({
	children,
	showHeader = false,
	showFooter = false,
}) => {
	return (
		<Template>
			{showHeader && <Header />}

			{children}

			{showFooter && <Footer />}
		</Template>
	);
};

export default PageLayout;
