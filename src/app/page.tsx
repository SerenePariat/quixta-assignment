import Technology from "@/components/Technology";
import BrandNews from "@/components/BrandNews";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import WhoWeAre from "@/components/WhoWeAre";
import Solutions from "@/components/Solutions";
import Navbar from "@/components/Navbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import { AppProvider } from "@/context/AppContext";


export default function Home() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <div className="w-full">
          <Navbar/>
          <WhoWeAre/>
          <Technology/>
          <Solutions/>
          <BrandNews/>
          <Careers/>
          <Footer/>
        </div>
      </ErrorBoundary>
    </AppProvider>
  );
}
