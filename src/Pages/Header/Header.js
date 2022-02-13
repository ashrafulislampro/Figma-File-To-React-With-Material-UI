import React from "react";
import "./Header.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const Header = () => {
  return (
    <div className="header_container">
      <Container maxWidth="xxl">
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{
              color: "white",
              padding: "17rem 0 0 8rem",
              fontWeight: "bold",
            }}
          >
            The most valuable player <br /> is the one who makes the <br />{" "}
            <span style={{ color: "#FF191B" }}>most players valuable.</span>
          </Typography>
      </Container>
    </div>
  );
};

export default Header;
