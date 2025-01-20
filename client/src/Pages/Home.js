import React, { useEffect, useRef, lazy, Suspense } from "react";
import "../styledComponents/loading.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
const Intro = lazy(() => import("../components/Intro"));
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));

export default function MySwiperComponent() {
  const swiperRef = useRef(null);

  const updateURLHash = (index) => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    if (index >= 0 && index < sections.length) {
      window.history.pushState(null, null, `/#${sections[index]}`);
    }
  };

  const location = useLocation();

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const hash = location.hash.replace("#", "");
    const index = sections.indexOf(hash);
    if (index !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  }, [location]);

  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <>
      <Container>
        <Navbar swiperRef={swiperRef} />{" "}
      </Container>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        speed={1000}
        lazy={{ loadPrevNext: true }}
        className="mySwiper"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const formattedNumber = `00${index}`.slice(-2);
            return `<span class="${className}" title="${sections[index]}">${formattedNumber}</span>`;
          },
        }}
        modules={[Mousewheel, Pagination]}
        onSlideChange={() => updateURLHash(swiperRef.current.activeIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateURLHash(swiper.activeIndex);
        }}
      >
        <SwiperSlide id="home">
          <section className="slide-content">
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              }
            >
              <Intro />
            </Suspense>
          </section>
        </SwiperSlide>
        <SwiperSlide id="about">
          <section className="slide-content">
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              }
            >
              <About />
            </Suspense>
          </section>
        </SwiperSlide>
        <SwiperSlide id="skills">
          <section className="slide-content">
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              }
            >
              <Skills />
            </Suspense>
          </section>
        </SwiperSlide>
        <SwiperSlide id="projects">
          <section className="slide-content">
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              }
            >
              <Projects />
            </Suspense>
          </section>
        </SwiperSlide>
        <SwiperSlide id="contact">
          <section className="slide-content">
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              }
            >
              <Contact />
            </Suspense>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
