import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import HeadSection from "./components/headSection/headSection";
import FeatureList from "./components/featureList/featureList";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/section6";
import Section7 from "./components/section7/section7";
import Section8 from "./components/section8/section8";



function App() {
  return (
    <div className="App">
      <Header />
      <HeadSection />
      
      <Section4/>
      <Section5/>
      {/* <Section6/>
      <Section7/>
      <Section8/> */}
    </div>
  );
}

export default App;
