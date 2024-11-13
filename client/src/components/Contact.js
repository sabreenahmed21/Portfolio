import React, { useRef } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import purplee from "../assets/Grou-removebg-preview.png";
import romb2 from "../assets/dark_romb.png";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zyina7e', 'template_z9p6tji', form.current, 'VIFtnOVIKWYpsFUaL')
      .then((result) => {
          console.log(result.text);
          alert('your msg send successfully');
      }, (error) => {
          console.log(error.text);
          alert("your msg wasn't received nsuccessfully");
      });
  };
  return (
    <>
      <Container>
        <Grid
          container
          spacing={1}
          mt={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box>
              <Box display="flex" alignItems="center" mb={2.5}>
                <Box
                  sx={{
                    backgroundColor: "#f4a949b8",
                    p: 1,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "8px",
                  }}
                >
                  <FaMapMarkerAlt
                    style={{
                      color: "#f5f5f5",
                    }}
                  />
                </Box>

                <Typography variant="body1" sx={{ color: "#f5f5f5" }}>
                  El Bagor, Al Minufiyah, Egypt
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2.5}>
                <Box
                  sx={{
                    backgroundColor: "#f4a949b8",
                    p: 1,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "8px",
                  }}
                >
                  <FaPhoneAlt style={{ color: "#f5f5f5" }} />
                </Box>
                <Typography variant="body1" sx={{ color: "#f5f5f5" }}>
                  +02 01097438046
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2.5}>
                <Box
                  sx={{
                    backgroundColor: "#f4a949b8",
                    p: 1,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "8px",
                  }}
                >
                  <FaEnvelope style={{ color: "#f5f5f5" }} />
                </Box>
                <Typography variant="body1" sx={{ color: "#f5f5f5" }}>
                  sabreenahmed212@gmail.com
                </Typography>
              </Box>
              <Box display="flex" mt={5}>
                <IconButton
                  href="https://github.com/sabreenahmed21"
                  target="_blank"
                  sx={{ color: "#f5f5f5" }}
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/sabreen-ahmed-35bb54264/"
                  target="_blank"
                  sx={{ color: "#f5f5f5" }}
                >
                  <FaLinkedin />
                </IconButton>
                <IconButton
                  href="https://wa.me/201097438046"
                  target="_blank"
                  sx={{ color: "#f5f5f5" }}
                >
                  <FaWhatsapp />
                </IconButton>
                <IconButton
                  href="https://web.facebook.com/sabreen.ahmed.127201"
                  target="_blank"
                  sx={{ color: "#f5f5f5" }}
                >
                  <FaFacebook />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} pr={3}>
            <Box component="form" noValidate autoComplete="off"  ref={form} onSubmit={sendEmail}>
              <TextField
                fullWidth
                name="user_name"
                margin="normal"
                placeholder="Your Name"
                variant="filled"
                required
                InputProps={{
                  style: { color: "#f5f5f5", backgroundColor: "#7777773b" },
                  disableUnderline: true,
                }}
              />
              <TextField
                fullWidth
                name="user_email"
                margin="normal"
                placeholder="Your Email"
                variant="filled"
                type="email"
                required
                InputProps={{
                  style: { color: "#f5f5f5", backgroundColor: "#7777773b" },
                  disableUnderline: true,
                }}
              />
              <TextField
                fullWidth
                name="message"
                margin="normal"
                placeholder="Message"
                variant="filled"
                multiline
                rows={4}
                required
                InputProps={{
                  style: { color: "#f5f5f5", backgroundColor: "#7777773b" },
                  disableUnderline: true,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#f4a949b8",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#f4a94959",
                  },
                }}
                type="submit"
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
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
          <img src={romb2} alt="img" width={"200px"} />
        </Box>
      </Container>
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

export default ContactSection;