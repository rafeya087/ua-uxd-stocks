import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Grid,
  Button,
  FormControl,
  Input,
} from "@mui/material";
import "./homePage.scss";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MoreItems from "./viewMoreItems";

const itemAbove = [
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/1.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/2.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/4.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/2.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/1.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/4.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/1.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/2.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/4.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/2.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/1.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/4.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/1.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/4.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/1.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/4.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/1.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/4.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/1.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/3.png",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/items/4.png",
    alt: "ottonova - Working on the future of health insurance",
  },
];

const imgTools = [
  "/assets/homePage/tools/sketch.svg",
  "/assets/homePage/tools/Figma.svg",
  "/assets/homePage/tools/webflow.svg",
  "/assets/homePage/tools/XD.svg",
  "/assets/homePage/tools/illustrator.svg",
  "/assets/homePage/tools/photoshop.svg",
  "/assets/homePage/tools/aftereffects.svg",
  "/assets/homePage/tools/invision.svg",
  "/assets/homePage/tools/abstract.svg",
  "/assets/homePage/tools/slack.svg",
  "/assets/homePage/tools/zeplin.svg",
  "/assets/homePage/tools/dropbox.svg",
];

function MainPage() {
  const [showItem, setShowItem] = useState(18);
  return (
    <section className="homePage_main_container">
      <div className="homePage_top_heading">
        <Container maxWidth="xl">
          <Stack
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Typography variant="h2">
              <span className="logoHeading">
                Professional <img src="/assets/homePage/lines.svg" />{" "}
              </span>{" "}
              looking designs Ready for use in{" "}
              <span style={{ color: "#04AA69", position: "relative" }}>
                Mintutes!
                <img
                  className="curveArrow_ic"
                  src="/assets/homePage/arrowCurve.svg"
                />
              </span>
            </Typography>
            <Typography variant="body2">
              Save time and money by focusing on what matters
            </Typography>
          </Stack>
        </Container>
      </div>
      <Container maxWidth="xl">
        <div className="itemCard_page_cards_area">
          <div className="itemCard-features-card">
            {itemAbove.map((item, index) => {
              if (index < showItem) {
                return (
                  <Link
                    className="itemCard-feature-card use-loader"
                    to={{
                      pathname: item.link,
                    }}
                  >
                    <Card
                      style={{ width: "390px" }}
                      className="features-card-mod"
                    >
                      <Card.Img variant="top" alt={item.alt} src={item.image} />
                      <Card.Body>
                        <Card.Title
                          style={{ color: "black", fontSize: "17px" }}
                          className="itemCards-cards-headings-for-itemCards-top"
                        >
                          <Row>
                            <div className="col-9 align-self-center">
                              <div className="meta_col">
                                <h6 className="itemCards-cards-headings-for-itemCards">
                                  {item.category}
                                </h6>
                              </div>
                            </div>
                            <div className="col-3 text-right align-self-center"></div>
                          </Row>
                          {item.title}
                        </Card.Title>
                        <Card.Text>
                          <p
                            className="read-more-1"
                            style={{ marginTop: "15px" }}
                          >
                            <center>{item.currency}</center>
                          </p>

                          <div className="addCart_tableTop">
                            <table>
                              <tr>
                                <th rowSpan={2}>{item.currency}</th>
                                <th className="addCart_text" rowSpan={2}>ADD TO CART</th>
                              </tr>
                            </table>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                );
              }
            })}
          </div>
          <div className="showmore_Button_itemCardsDbDesign_topclass">
            {showItem < itemAbove.length ? (
              <a
                onClick={() => setShowItem(showItem + 3)}
                className="showmore_Button_itemCardsDbDesign"
              >
                Show More
              </a>
            ) : (
              // ) : itemAbove.length < 9 ? (
              //   ""
              <>
                {/* <a
                  onClick={() => setShowItem(9)}
                  className="showmore_Button_itemCardsDbDesign"
                >
                  Show Less
                </a> */}
              </>
            )}
          </div>
        </div>
      </Container>

      <div class="home-page-top-container">
        <div class="home-page-top-content">
          <Container maxWidth="xl">
            <Grid container>
              <Grid
                xl={6}
                lg={6}
                md={8}
                sm={8}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="home-banner-inside-content">
                  <Typography variant="h2">
                    Join 10,000+ designers, founders and makers.
                  </Typography>
                  <Typography variant="body2">
                    Design should always serve your business growth. The perfect
                    on-boarding journey, the best converting landing page, the
                    stickiest dashboard, the jaw-dropping logo, the ultimate
                    personas research - UX, UI and Product Growth go together.
                  </Typography>
                </div>
              </Grid>

              <Grid xl={6} lg={6} md={4} sm={4}>
                <div className="home-page-rightFrame">
                  <div className="home-page-content-rightFrame">
                    <Typography variant="h4">Design For Growth</Typography>
                    <Typography variant="body2">
                      Bi-weekly emails with actionable design tips and
                      insightful content one how to boost your product growth
                      effectively.
                    </Typography>
                    <div className="form-group">
                      <FormControl>
                        <Input
                          type="text"
                          label="Search"
                          variant="outlined"
                          placeholder="Your email"
                          inputProps={{ "aria-label": "description" }}
                        />
                      </FormControl>
                    </div>
                    <Button variant="contained">Subscribe</Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>

      <Container maxWidth={"xl"}>
        <MoreItems />
        <div className="categoryTool_top">
          <Typography variant="h4">Browse by category:</Typography>
          <div className="categoryTool_imgs">
            {imgTools.map((item, index) => (
              <img src={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainPage;
