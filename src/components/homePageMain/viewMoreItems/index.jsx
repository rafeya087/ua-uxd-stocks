import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import "./viewMore.scss";

const itemMobile = [
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/viewAll/1.svg",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/viewAll/2.svg",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/viewAll/3.svg",
    alt: "ottonova - Working on the future of health insurance",
  },
  {
    link: "/ottonova-working",
    title: "ottonova - Working on the future of health insurance",
    category: "WEB DESIGN",
    currency: "$ 19.00",
    image: "/assets/homePage/viewAll/4.svg",
    alt: "ottonova - Working on the future of health insurance",
  },
];

function MoreItems() {
  return (
    <section className="viewMore_main_container">
      <Container maxWidth="xl">
        <div className="categoryHeading">
          <Typography variant="h2">Mobile UI Kits</Typography>
          <Button className="viewAllBtn" variant="contained">
            View all
          </Button>
        </div>
        <div className="viewAllItemsCard_page_cards_area">
          <div className="viewAllItemsCard-features-card">
            {itemMobile.map((item, index) => {
              return (
                <Link
                  className="viewAllItemsCard-feature-card use-loader"
                  to={{
                    pathname: item.link,
                  }}
                >
                  <Card className="features-card-mod">
                    <Card.Img variant="top" alt={item.alt} src={item.image} />
                    <Card.Body>
                      <Card.Title
                        style={{ color: "black", fontSize: "17px" }}
                        className="viewAllItemsCards-cards-headings-for-viewAllItemsCards-top"
                      >
                        <Row>
                          <div className="col-9 align-self-center">
                            <div className="meta_col">
                              <h6 className="viewAllItemsCards-cards-headings-for-viewAllItemsCards">
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
                              <th className="addCart_text" rowSpan={2}>
                                ADD TO CART
                              </th>
                            </tr>
                          </table>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ui kits icons */}
        <div className="categoryHeading">
          <Typography variant="h2">Icons</Typography>
          <Button className="viewAllBtn" variant="contained">
            View all
          </Button>
        </div>
        <div className="viewAllItemsCard_page_cards_area">
          <div className="viewAllItemsCard-features-card">
            {itemMobile.map((item, index) => {
              return (
                <Link
                  className="viewAllItemsCard-feature-card use-loader"
                  to={{
                    pathname: item.link,
                  }}
                >
                  <Card className="features-card-mod">
                    <Card.Img variant="top" alt={item.alt} src={item.image} />
                    <Card.Body>
                      <Card.Title
                        style={{ color: "black", fontSize: "17px" }}
                        className="viewAllItemsCards-cards-headings-for-viewAllItemsCards-top"
                      >
                        <Row>
                          <div className="col-9 align-self-center">
                            <div className="meta_col">
                              <h6 className="viewAllItemsCards-cards-headings-for-viewAllItemsCards">
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
                              <th className="addCart_text" rowSpan={2}>
                                ADD TO CART
                              </th>
                            </tr>
                          </table>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* UI Kits */}
        <div className="categoryHeading">
          <Typography variant="h2">UI Kits</Typography>
          <Button className="viewAllBtn" variant="contained">
            View all
          </Button>
        </div>
        <div className="viewAllItemsCard_page_cards_area">
          <div className="viewAllItemsCard-features-card">
            {itemMobile.map((item, index) => {
              return (
                <Link
                  className="viewAllItemsCard-feature-card use-loader"
                  to={{
                    pathname: item.link,
                  }}
                >
                  <Card className="features-card-mod">
                    <Card.Img variant="top" alt={item.alt} src={item.image} />
                    <Card.Body>
                      <Card.Title
                        style={{ color: "black", fontSize: "17px" }}
                        className="viewAllItemsCards-cards-headings-for-viewAllItemsCards-top"
                      >
                        <Row>
                          <div className="col-9 align-self-center">
                            <div className="meta_col">
                              <h6 className="viewAllItemsCards-cards-headings-for-viewAllItemsCards">
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
                              <th className="addCart_text" rowSpan={2}>
                                ADD TO CART
                              </th>
                            </tr>
                          </table>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MoreItems;
