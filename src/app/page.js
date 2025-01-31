import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import Portfolio from "@/components/Portfolio/portfolio";
import Home from "@/components/Home/home";
import Skills from "@/components/Skills/skills";
import Services from "@/components/Services/services";
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
