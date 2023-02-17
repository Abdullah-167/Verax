import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import ReactPageScroller from "react-page-scroller";
import { useState } from "react";
import WelcomeSession from "../components/WelcomeSection/WelcomeSection";
import WelcomeSessionMobile from "../components/WelcomeSection/WelcomeSection-mobile";
import ProcessSection from "../components/ProcessSection/ProcessSection";
import ProcessSectionMobile from "../components/ProcessSection/ProcessSection-mobile";
// import MintSection from "../components/MintSection/MintSection";
import MintSectionMobile from "../components/MintSection/MintSection-mobile";
import FAQSection from "../components/FAQSection/FAQSection";
import FAQSectionMobile from "../components/FAQSection/FAQSection-mobile";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import ProjectSectionMobile from "../components/ProjectSection/ProjectSection-mobile";
import TechniqueInfoSection from "../components/TechniqueInfoSection/TechniqueInfoSection";
import TechniqueInfoSectionMobile from "../components/TechniqueInfoSection/TechniqueInfoSection-mobile";
import WhySectionMobile from "../components/WhySection/WhySectionMobile";
import WhySection from "../components/WhySection/WhySection";
import EnterScreen from "../components/EnterScreen/EnterScreen";
import { useMediaQuery } from "react-responsive";
const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [enterScreen, setEnterScreen] = useState<boolean>(false);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  const handlePageChange = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <Layout>
      {enterScreen ? (
        isBigScreen ? (
          <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={currentPage!}
          >
            <WelcomeSession handlePageChange={handlePageChange} />
            <ProcessSection />
            <ProjectSection />
            <TechniqueInfoSection />
            {/* <MintSection /> */}
            <FAQSection />
            <WhySection />
          </ReactPageScroller>
        ) : (
          <ReactPageScroller 
            pageOnChange={handlePageChange}
            customPageNumber={currentPage!}
          >
            <WelcomeSessionMobile handlePageChange={handlePageChange} />
            <ProcessSectionMobile />
            <ProjectSectionMobile />
            <TechniqueInfoSectionMobile />
            <MintSectionMobile />
            <FAQSectionMobile />
            <WhySectionMobile />
          </ReactPageScroller>
        )
      ) : (
        <EnterScreen setEnterScreen={setEnterScreen} />
      )}
    </Layout>
  );
};

export default Home;
