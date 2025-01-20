import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cubic1 from "../assets/dark_cube1.png";
import cubic2 from "../assets/dark_romb.png";
import sabreenImg from "../assets/sJPG.JPG";
import "../styledComponents/about.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const floatAnimation = {
  hidden: { y: 0 },
  visible: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const [key, setKey] = useState(0);
  useEffect(() => {
    if (inView) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <motion.div
        key={key}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <Box sx={{ mr: 6 }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: 3,
            }}
          >
            <motion.img
              src={sabreenImg}
              alt="sabreenImg"
              width={"230px"}
              loading="lazy"
              className="sabreenImg"
              variants={fadeIn}
            />
            <Grid item xs={12} md={5.5}>
              <motion.div variants={fadeIn}>
                <Typography
                  variant="h2"
                  sx={{
                    textTransform: "capitalize",
                    mb: "20px",
                    fontSize: { xs: "2.5rem", md: "3rem", lg: "3.5rem" },
                    fontWeight: "bold",
                    lineHeight: 1.1,
                  }}
                >
                  Hi, I'm Sabreen <br /> Web Developer
                </Typography>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#afb0b1",
                    textTransform: "capitalize",
                    letterSpacing: "0.05rem",
                  }}
                >
                  Front-End Developer / JavaScript / React & TypeScript Expert
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
                  Passionate about building interactive and responsive web
                  applications. Skilled in HTML, CSS, JavaScript, React,
                  Next.js, and TypeScript.
                </Typography>
                <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
                  Problem solver with a strong attention to detail and an
                  organized approach to development.
                </Typography>
                <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
                  Eager to work on ambitious front-end projects with creative
                  and collaborative teams.
                </Typography>
                <Button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/drive/folders/1MAczR8vPoBJtZV3X_43hnnduj5sMGuWf?usp=sharing",
                      "_blank"
                    )
                  }
                  sx={{
                    p: 2,
                    cursor: "pointer",
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                  variant="contained"
                  color="secondary"
                  size="medium"
                >
                  Download CV
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          position: "absolute",
          bottom: "10px",
          zIndex: -1,
          opacity: 0.8,
        }}
      >
        <motion.img
          src={cubic1}
          alt="img"
          width={"190px"}
          height={"170px"}
          loading="lazy"
          variants={floatAnimation}
          animate="visible"
          key={key}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          zIndex: -1,
          top: 0,
          right: 0,
        }}
      >
        <motion.img
          src={cubic2}
          alt="img"
          width={"250px"}
          height={"210px"}
          loading="lazy"
          // variants={floatAnimation}
          // animate="visible"
          key={key}
        />
      </Box>
    </Container>
  );
}
