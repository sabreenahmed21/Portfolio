import React, { useRef, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  IconButton,
  Typography,
  FormHelperText,
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
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styledComponents/Contact.css";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();

  const sendEmail = (data) => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_zyina7e",
        "template_z9p6tji",
        form.current,
        "VIFtnOVIKWYpsFUaL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            toast.success("Your message was sent successfully!");
          }, 500);
          reset();
        },
        (error) => {
          console.log(error.text);
          setTimeout(() => {
            toast.error("Your message wasn't sent successfully.");
          }, 500);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <Box mr={6}>
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
            <Box
              component="form"
              noValidate
              autoComplete="off"
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
            >
              <TextField
                fullWidth
                name="user_name"
                margin="normal"
                placeholder="Your Name"
                variant="filled"
                required
                {...register("user_name", { required: "Name is required" })}
                InputProps={{
                  style: {
                    color: "#f5f5f5",
                    backgroundColor: "#202020",
                    borderRadius: "0",
                  },
                  disableUnderline: true,
                }}
              />
              {errors.user_name && (
                <FormHelperText error>
                  {errors.user_name.message}
                </FormHelperText>
              )}
              <TextField
                fullWidth
                name="user_email"
                margin="normal"
                placeholder="Your Email"
                variant="filled"
                type="email"
                required
                {...register("user_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                InputProps={{
                  style: {
                    color: "#f5f5f5",
                    backgroundColor: "#202020",
                    borderRadius: "0",
                  },
                  disableUnderline: true,
                }}
              />
              {errors.user_email && (
                <FormHelperText error>
                  {errors.user_email.message}
                </FormHelperText>
              )}

              <TextField
                fullWidth
                name="message"
                margin="normal"
                placeholder="Message"
                variant="filled"
                multiline
                rows={4}
                required
                {...register("message", { required: "Message is required" })}
                InputProps={{
                  style: {
                    color: "#f5f5f5",
                    backgroundColor: "#202020",
                    borderRadius: "0",
                  },
                  disableUnderline: true,
                }}
              />
              {errors.message && (
                <FormHelperText error>{errors.message.message}</FormHelperText>
              )}

              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  cursor: "pointer",
                  backgroundColor: "#f4a949b8",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#f4a94959",
                  },
                }}
                type="submit"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          position: "absolute",
          zIndex: -1,
          bottom: "50%",
          left: "20%",
        }}
      >
        <img src={romb2} alt="img" width={"200px"} />
      </Box>
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
          width={"200px "}
          height={"180px"}
        />
      </Box>
    </Container>
  );
};

export default ContactSection;
