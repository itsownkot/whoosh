import "./App.scss";
import {
  Navbar,
  Hero,
  Info,
  About,
  Partners,
  Payment,
  InfoText,
  Footer,
  Divider,
} from "./components";
import isMobileHook from "./isMobileHook";

function App() {
  const isMobile = isMobileHook();

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Info />
        <Divider style={isMobile ? { marginTop: 48 } : { marginTop: 80 }} />
        <Partners />
        <About />
        <Payment />
        <Divider style={isMobile ? { marginTop: 48 } : { marginTop: 80 }} />
        <InfoText />
        <Footer />
      </main>
    </>
  );
}

export default App;
