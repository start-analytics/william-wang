import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
export default function Page() {
	return (
		<>
			<Header />
			<Home />
			<Portfolio />
			<Services />
			<Skills />
			<Footer />
		</>
	);
}
