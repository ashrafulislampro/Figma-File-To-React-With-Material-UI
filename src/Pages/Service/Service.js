import React from "react";
import "./Service.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const serviceItem = [
  "CONSULTING >",
  "Podiatry >",
  "NUTRITION >",
  "MARKETING >",
  "PHYSIOTHERAPY >",
];
const Service = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <section className="service_container">
      <Container maxWidth="xxl">
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          Service
        </Typography>
        <Typography variant="body2" sx={{ color: "white", padding: "10px 0" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          pariatur natus quasi quas? Animi tenetur odio adipisci autem
          voluptatum! Neque magnam, quibusdam voluptas aut quam dignissimos
          totam dolorum exercitationem eius. Repudiandae labore ut laboriosam
          voluptates repellat molestiae in quidem mollitia maiores, beatae,
          inventore fugit, aliquam veritatis saepe earum doloribus reprehenderit
          iusto? Quia ullam sunt suscipit, ab quidem voluptas officiis expedita.
        </Typography>
        <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
          {serviceItem.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mr: 5,
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                color: "#FF191B",
                display: "inline-block",
                fontSize: "1.2rem",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Service;
