import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import purplee from "../assets/Grou-removebg-preview.png";
import sphere1 from "../assets/sphere_md.png";
import sphere3 from "../assets/sphere_sm.png";
import sphere2 from "../assets/sphere_lg.png";
import { motion } from "framer-motion"; 

import "../styledComponents/Project.css";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const [key, setKey] = useState(0);
  useEffect(() => {
    if (inView) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <>
      <Container>
        <Box mr={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              maxWidth: "550px",
              m: "auto",
            }}
            ref={ref}
          >
            <Typography
              variant="h2"
              sx={{
                textTransform: "capitalize",
                mb: 3,
                fontSize: { xs: "1.5rem", md: "2.25rem", lg: "3.25rem" },
                fontWeight: "bold",
                lineHeight: 1.1,
              }}
            >
              Portfolio & Previous Projects
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I have built various different projects to fit different aspects
              of the client's business. If you want to see more examples of my
              work than the ones showcased in this site, please{" "}
              <Link
                to={"https://www.linkedin.com/in/sabreen-ahmed-35bb54264"}
                target="_blank"
                style={{ color: "#f4a949", textDecoration: "none" }}
              >
                {" "}
                contact me!
              </Link>
            </Typography>
            <Box>
              <Link
                to={"my-project"}
                target="_self"
                style={{
                  color: "#9c27b0",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  textTransform: "capitalize",
                }}
              >
                {" "}
                see projects <IoIosArrowForward />
              </Link>
            </Box>
          </Box>
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
          <motion.img
            key={key}
            src={sphere3}
            alt="sphere"
            width={"80px"}
            loading="lazy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            position: "absolute",
            zIndex: -1,
            bottom: "50%",
            right: "10%",
          }}
        >
          <motion.img
            key={key}
            src={sphere2}
            alt="sphere"
            width={"150px"}
            loading="lazy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            position: "absolute",
            zIndex: -1,
          }}
        >
          <motion.img
            key={key}
            src={sphere1}
            alt="sphere"
            width={"100px"}
            loading="lazy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </Box>
      </Container>

      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          display: { xs: "none", md: "flex" },
          justifyContent: "end",
        }}
      >
        <img
          src={purplee}
          alt="img"
          className="img"
          width={"200px"}
          height={"180px"}
          loading="lazy"
        />
      </Box>
    </>
  );
}
