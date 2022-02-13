import React from "react";
import { Container, Typography, Toolbar } from "@mui/material";
import pic4 from "../../images/pic4.png";
import "./Physiotherapy.css";
const Physiotherapy = () => {
  return (
    <div className="physiotherapy_container">
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
            Physiotherapy
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              color: "black",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit,
            facere saepe accusantium temporibus, eius dignissimos, ipsa quidem
            omnis voluptatum rem soluta atque iusto voluptate maiores excepturi
            cupiditate! Iure, ratione. Sunt perferendis unde voluptatum officia
            magni facere, quis nisi ea mollitia rem nemo quaerat et excepturi
            similique officiis iusto explicabo cum illo velit. Nobis illum sunt,
            dicta similique excepturi debitis! Saepe natus, impedit dolore
            voluptas nobis aperiam corporis perferendis blanditiis aspernatur
            qui, labore nulla dolorum eius, vitae nisi! Obcaecati laborum
            deserunt veritatis ab? Eos aut, ab quam corrupti voluptate facilis!
            Dicta expedita voluptates, similique sequi enim eaque, autem quos
            beatae ipsam vitae doloribus eveniet, facere blanditiis. Nobis eius
            ut aperiam tempora ea atque obcaecati nemo necessitatibus autem, quo
            debitis porro? Nobis iusto earum eos excepturi voluptatibus tenetur
            temporibus quos dignissimos est voluptatem neque aspernatur laborum
            voluptate.
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
            <img className="image" src={pic4} alt="" />
          </Typography>
        </Toolbar>
      </Container>
    </div>
  );
};

export default Physiotherapy;
