import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Button, Container, Typography } from "@mui/material";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import "../styledComponents/ProjectCard.css";

import desny from "../assets/desny.png";
import movix from "../assets/movix.png";
import home from "../assets/home.png";
import hoo from "../assets/hoo.png";
import sa from "../assets/sa.png";
import medical from "../assets/medical.png";
import bazaar from "../assets/bazaar.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


import purplee from "../assets/Grou-removebg-preview.png";
import sphere3 from "../assets/sphere_sm.png";
import sphere2 from "../assets/sphere_lg.png";

const projects = [
  {
    title: "E-commerce Clothing Store",
    built:
      " React, Node.js, Mui, React-hook-form, i18next, Express, MongoDB, jsonwebtoken, Nodemailer, cloudinary, stripe",
    imageUrl: bazaar,
    demoLink: "https://bazaar-main.onrender.com/",
    codeLink: "https://github.com/sabreenahmed21/Bazaar-main",
  },
  {
    title: "Disney plus clone",
    built:
      "React , Firebase",
    imageUrl: desny ,
    demoLink: "https://disney-plus-clone-six-sand.vercel.app/home",
    codeLink: "https://github.com/sabreenahmed21/DisneyPlus-Clone",
  },
  {
    title: "Movix Website",
    built:
      "React + Vite",
    imageUrl: movix,
    demoLink: "https://movix-rzoc.vercel.app/",
    codeLink: "https://github.com/sabreenahmed21/Movix",
  },
  {
    title: "Medical Site",
    built:"React, Bootstrap",
    imageUrl: medical,
    demoLink: "https://medical-site-nu.vercel.app/",
    codeLink: "https://github.com/sabreenahmed21/Medical-site",
  },
  {
    title: "HooBank",
    built:
      " React , Tailwind CSS",
    imageUrl: hoo,
    demoLink: "https://tailwind-kappa-ten.vercel.app/",
    codeLink: "https://github.com/sabreenahmed21/HooBank",
  },
  {
    title: "SA. Company",
    built:
      "Js, Sass, Bootstrap",
    imageUrl: sa,
    demoLink: "https://sa-campany.vercel.app/",
    codeLink: "https://github.com/sabreenahmed21/SA.-Campany",
  },
  {
    title: "Home Company",
    built:
      "Js, Css, Bootstrap",
    imageUrl: home,
    demoLink: "https://home-company-one.vercel.app/#",
    codeLink: "https://github.com/sabreenahmed21/home-company",
  }
];

const ProjectSlider = () => {
  const swiperRef = useRef(null);
  return (
    <>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
        className={"project-card"}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          style={{ width: "100%" }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      maxWidth: "50%",
                      padding: 2,
                    }}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      style={{
                        width: "100%",
                        minWidth:'290px',
                        height: "auto",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      padding: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        marginBottom: { xs: 1.5, md: 3 },
                        fontSize: { xs: "1rem", sm: "1.5rem", lg: "2.25rem" },
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        marginBottom: 3,
                        fontSize: "16px",
                        color: "#cdcdcd",
                      }}
                    >
                      <Typography
                        variant="span"
                        sx={{ fontWeight: "bold", color: "#fff" }}
                      >
                        Built with:{" "}
                      </Typography>
                      {project.built}
                    </Typography>

                    <Box>
                      <Button
                        size="small"
                        color="primary"
                        href={project.codeLink}
                        target="_blank"
                        startIcon={<AiFillGithub />}
                        sx={{
                          p: 1,
                          mt:1,
                          backgroundColor: "#333",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#555",
                          },
                          marginRight: 2,
                        }}
                      >
                        View the code
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        href={project.demoLink}
                        target="_blank"
                        startIcon={<FiExternalLink />}
                        sx={{
                          p: 1,
                          mt:1,
                          backgroundColor: "#007FFF",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#005BBB",
                          },
                        }}
                      >
                        Visit the web
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          sx={{
            position: "absolute",
            top: {xs:"16%", lg:"21%"},
            right: "15%",
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "#9c27b0",
          }}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaArrowAltCircleLeft size={30} />
        </Button>
        <Button
          sx={{
            position: "absolute",
            top: {xs:"16%", lg:"21%"},
            right: { xs: "5%", md: "10%" },
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "#9c27b0",
          }}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaArrowAltCircleRight size={30} />
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          position: "absolute",
          zIndex: -1,
          bottom: "80%",
          left: "30%",
        }}
      >
        <img src={sphere3} alt="img" width={"80px"} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          position: "absolute",
          zIndex: -1,
          bottom: "20%",
          left: "10%",
        }}
      >
        <img src={sphere2} alt="img" width={"150px"} />
      </Box>

      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          display: "flex",
          justifyContent: "end",
        }}
      >
        <img
          src={purplee}
          alt="img"
          className="img"
          width={"200px "}
          height={"180px"}
        />
      </Box>
    </>
  );
};

export default ProjectSlider;
