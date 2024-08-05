import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import WorkFlow from "./components/WorkFlow";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
          <WorkFlow />
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default App;
