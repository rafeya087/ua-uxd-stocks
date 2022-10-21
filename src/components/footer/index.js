import React from "react";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <section className="footerSec_main_container mt-5">
      <section className="footerSec_top_container">
        <Container maxWidth={"xl"}>
          <Grid container spacing={0} style={{ color: "#fff" }}>
            <Grid md={7}>
              <Typography variant="h3" className="footerTopHeading">
                Let's start something completely new together
              </Typography>
            </Grid>
            <Grid md={5}>
              <div className="buttonContactTop">
                <Button variant="outlined">Contact me</Button>
              </div>
            </Grid>

            <Grid md={12}>
              <Divider
                sx={{
                  border: "1px solid #E4E4E4",
                  background: "#f4f4f5",
                  mt: 10,
                  mb: 12,
                  opacity: 1,
                }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack>
                <div className="footerLogo_img">
                  <img src={"/assets/footerLogo.svg"} alt="Kozijen logo" />
                </div>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  paddingRight: 10,
                }}
                className="footerLeft_content"
              >
                <Typography variant="body2" className="footerLeft_info">
                  Ideate. design & iterate until satisfield.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={3} className="footerMiddle_linkSec">
              <Typography variant="h4" className="companyText_mob mb-4">
                Company
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Link to="/">About</Link>
                <Link to="/">Who we are</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Contact us</Link>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3} className="footerMiddle_linkSec">
              <Typography variant="h4" className="companyText_mob mb-4">
                Products
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Link to="/">UI Kits</Link>
                <Link to="/">Mockups</Link>
                <Link to="/">Icons</Link>
                <Link to="/">Templates</Link>
                <Link to="/">Vectors</Link>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              md={2}
              style={{ paddingRight: 0 }}
              className="footerMiddle_linkSec"
            >
              <Typography variant="h4" className="companyText_mob mb-4">
                Social
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Link to="/warranty">Facebook</Link>
                <Link to="/returns">Instagram</Link>
                <Link to="/claims">Twitter</Link>
                <Link to="/claims">Pinterest</Link>
                <Link to="/claims">Linkedin</Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="footerSec_bottom_container">
        <Container maxWidth={"xl"}>
          <Grid container spacing={{ md: 2, lg: 5 }} style={{ color: "#fff" }}>
            <Grid item xs={12} md={4} className="bottomFooter_main">
              <p className="bottomFooter_textMob">© 2020 UXD Stocks.</p>
            </Grid>
            <Grid item xs={12} md={8} className="footerBottom_linkSec">
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <Link to="/">Term of Use</Link>
                <Link to="/">Privacy Police</Link>
                <Link to="/">Cardholder Agreement</Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </section>
    </section>
  );
};

export default Footer;
