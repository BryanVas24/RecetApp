import AboutTheApp from "@/components/app/HomePageComponents/AboutTheApp";
import HeroSection from "@/components/app/HomePageComponents/HeroSection";
import Questions from "@/components/app/HomePageComponents/Questions";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <HeroSection />
      <AboutTheApp />
      <Questions />
    </>
  );
}
