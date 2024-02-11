import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import BoxContainer from "./components/BoxContainer";
import InfoSection from "./components/InfoSection";
import FAQSection from "./components/FAQ/FAQSection";
import ArticleSection from "./components/Articles/ArticleSection";
import ReviewSection from "./components/Review/ReviewSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <HeroSection />
      <BoxContainer />
      <InfoSection />
      <FAQSection />
      <ArticleSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}

export default App;
