import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { Box, Container } from "@mui/material";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

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
        <Navbar swiperRef={swiperRef} /> </Container>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          speed={1500}
          className="mySwiper"
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              const formattedNumber = `00${index}`.slice(-2);
              return `<span class="${className}" title="${sections[index]}">${formattedNumber}</span>`;
            },
          }}
          modules={[Mousewheel, Pagination]}
          onSlideChange={(swiper) => updateURLHash(swiper.activeIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateURLHash(swiper.activeIndex);
          }}
        >
          <SwiperSlide id="home">
            <Box className="slide-content">
              <Intro />
            </Box>
          </SwiperSlide>
          <SwiperSlide id="about">
            <Box className="slide-content" >
              <About />
            </Box>
          </SwiperSlide>
          <SwiperSlide id="skills">
            <Box className="slide-content">
              <Skills />
            </Box>
          </SwiperSlide>
          <SwiperSlide id="projects">
            <Box className="slide-content">
              <Projects />
            </Box>
          </SwiperSlide>
          <SwiperSlide id="contact">
            <Box className="slide-content">
              <Contact />
            </Box>
          </SwiperSlide>
        </Swiper>
       
    </>
  );
}
