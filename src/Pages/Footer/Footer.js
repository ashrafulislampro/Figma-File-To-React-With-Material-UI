import { Container, Typography } from "@mui/material";
import React from "react";
import Image from "../../images/logo.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Footer.css";
const pages = [
  "Consulting",
  "Podiatry",
  "Nutrition",
  "Marketing",
  "Physiotherapy",
];
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "transparent",
  boxShadow: "none",
}));

const Footer = () => {
  return (
    <div className="footer_container">
      <Container>
        <Box sx={{ flexGrow: 1, justifyContent: "center" , paddingTop: "150px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} sm={12} lg={4} xl={4}>
              <Item>
                <img style={{ width: "20rem" }} src={Image} alt="img" />
              </Item>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={4} xl={4}>
              <Item>
                <Typography textAlign="left" color="#ffffff">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur, inventore. Natus velit voluptatem expedita
                  provident at sequi, incidunt dolore quaerat quae itaque,
                  obcaecati praesentium blanditiis.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={4} xl={4}>
              <Item>
                {pages.map((page) => (
                  <Typography textAlign="left" color="#ffffff">
                    {page}
                  </Typography>
                ))}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
