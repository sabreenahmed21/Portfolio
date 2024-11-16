import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../styledComponents/skills.css";
import { Link } from "react-router-dom";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiReactquery } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import purplee from "../assets/Grou-removebg-preview.png";
import romb1 from "../assets/purple_romb2.png";
import romb2 from "../assets/dark_romb.png";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <>
      <Container>
        <Box sx={{ mr: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "700px",
              m: "auto",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textTransform: "capitalize",
                mb: { xs: 1, md: 1.25, lg: 2 },
                fontSize: { xs: "1.5rem", md: "2.25rem", lg: "3.25rem" },
                fontWeight: "bold",
                lineHeight: 1.1,
              }}
            >
              Skills & Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 1, md: 1.25, lg: 2 },
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                textAlign: "center",
              }}
            >
              The main area of expertise is front end development (client side
              of the web).
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 1, md: 1.25, lg: 2 },
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                textAlign: "center",
              }}
            >
              HTML, CSS, JS, building small and medium web applications with
              React, custom plugins, features, animations, and coding
              interactive layouts.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 1, md: 1.25, lg: 2 },
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
              }}
            >
              Visit my{" "}
              <Link
                to={"https://www.linkedin.com/in/sabreen-ahmed-35bb54264/"}
                target="_blank"
                style={{ color: "#f4a949", textDecoration: "none" }}
              >
                Linkedin
              </Link>{" "}
              ,{" "}
              <Link
                to={"https://github.com/sabreenahmed21"}
                target="_blank"
                style={{ color: "#f4a949", textDecoration: "none" }}
              >
                Github
              </Link>{" "}
              for more details.
            </Typography>
          </Box>
          <Box className="skills">
            {[{
              Icon: IoLogoJavascript,
              label: "Java Script"
            }, {
              Icon: FaReact,
              label: "React"
            }, {
              Icon: RiNextjsFill,
              label: "Next.js"
            }, {
              Icon: SiTypescript,
              label: "TypeScript"
            }, {
              Icon: IoLogoNodejs,
              label: "Node"
            }, {
              Icon: DiMongodb,
              label: "MongoDB"
            }, {
              Icon: SiReactquery,
              label: "RTK Query"
            }, {
              Icon: IoLogoHtml5,
              label: "HTML"
            }, {
              Icon: IoLogoCss3,
              label: "CSS"
            }, {
              Icon: BsFillBootstrapFill,
              label: "Bootstrap"
            }, {
              Icon: RiTailwindCssFill,
              label: "Tailwind CSS"
            }, {
              Icon: IoLogoSass,
              label: "Sass"
            }, {
              Icon: FaGitAlt,
              label: "Git"
            }, {
              Icon: IoLogoFigma,
              label: "Figma"
            }].map(({ Icon, label }, index) => (
              <motion.div
                key={index}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.9 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Icon className="icon" />
                <Typography
                  variant="body2"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 500,
                    fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem", lg: "1rem" },
                    mt: 1,
                    textAlign: "center",
                  }}
                >
                  {label}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            position: "absolute",
            zIndex: -1,
            top: "10%",
            right: "30%",
            opacity: "0.5",
          }}
        >
          <img src={romb1} alt="img" width={"120px"} loading="lazy" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            position: "absolute",
            zIndex: -1,
            bottom: "30%",
            left: "20%",
          }}
        >
          <img src={romb2} alt="img" width={"200px"} loading="lazy" />
        </Box>
      </Container>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          display: "flex",
          justifyContent: "start",
        }}
      >
        <img
          src={purplee}
          alt="img"
          className="img2"
          width={"200px "}
          height={"180px"}
          loading="lazy"
        />
      </Box>
    </>
  );
}
