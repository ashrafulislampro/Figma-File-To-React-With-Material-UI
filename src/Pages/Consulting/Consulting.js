import { Container, Typography, Toolbar, Box, Paper, Grid, styled } from "@mui/material";
import React from "react";
import pic1 from "../../images/pic1.png";
import "./Consulting.css";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Consulting = () => {
  return (
    <div className="consulting_container">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "#FF191B",
              fontWeight: "bold",
              textTransform: "uppercase",
              transform: `rotate(-90deg)`,
            }}
          >
            CONSULTING
          </Typography>
          <Typography variant="p" component="div" sx={{ color: "black" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minus praesentium provident quod totam illum, dolores
            necessitatibus. Ipsum culpa eaque, libero, at deleniti aut quod quas
            a ullam repellendus veniam. Iusto quibusdam distinctio ea ipsam
            officia, ullam ex! A nobis exercitationem dicta expedita architecto
            iusto reprehenderit, ab, fuga provident tenetur atque molestiae!
            Deserunt minus provident quia, impedit totam aliquid voluptas?
            Delectus natus, rerum magni magnam unde, a libero nemo quidem
            veritatis, voluptatum quae porro ex quasi. Nisi reiciendis labore
            debitis ut! Similique placeat, vero recusandae quaerat ratione
            consectetur illo blanditiis. Hic odit eos sit, alias reprehenderit
            ratione necessitatibus facilis laudantium accusamus dolor magnam,
            nesciunt sed provident quasi eaque ab ea error cum nostrum ipsam
            esse quae eveniet ad modi? Assumenda.
          </Typography>
          <Typography
            variant="img"
            component="div"
            sx={{
              width: "50rem",
              height: "20rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              borderRadius: "0 0 20rem 20rem",
              backgroundColor: "#252525",
            }}
          >
            <img className="image" src={pic1} alt="" />
          </Typography>
        </Toolbar>
      </Container>
    </div>
  );
};

export default Consulting;
