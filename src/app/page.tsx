import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Page() {
    return (
        <div>
            <Navbar />
            <main>
                <Home />
                <div className="bg-gradient-to-b h-12 from-slate-800 to-slate-900"></div>
                <About />
                <div className="bg-gradient-to-b h-12 from-slate-900 to-slate-800"></div>
                <Portfolio />
                <div className="bg-gradient-to-b h-12 from-slate-800 to-slate-900"></div>
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
