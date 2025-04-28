import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import bgImg from "../../img/bg.png";
import heroImg from "../../img/hero2.png";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return ( 

      <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "95vh" }}>
        <Container>
          <Navbar />
          <CustomBox>
            <Box sx={{ flex: "2" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 1,
                  mb: 4,
                }}
              >
            

              Welcome to SafeTrace 
            </Typography>
            <Title variant="h1">
              Securely Authenticate Your Products with SafeTrace
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#32425c", my: 4, }}
            >
            "Secure your products with our blockchain-powered identification system, ensuring authenticity and protection against fraud. Verify with confidence and experience seamless product authentication today!"            </Typography>
            <Link to="/scanner">

              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Scan QR"
                heroBtn={true}
              />
            </Link>

          </Box>
        

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "180%", marginBottom: "2rem"}}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
