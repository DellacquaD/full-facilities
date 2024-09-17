import React from 'react';
import { FC, ReactElement } from "react";
import { Box, Typography, Container } from "@mui/material";
import Cards from "../components/Cards";

// Define el array cardInfo dentro de AboutUs
export const AboutUs: FC = (): ReactElement => {

  const cardInfo = [
    { title: "Mision", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, doloribus minus, libero quo expedita sequi voluptas repellat distinctio hic consectetur placeat reiciendis et rem fugiat perferendis quibusdam at officia atque." },
    { title: "Vision", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, doloribus minus, libero quo expedita sequi voluptas repellat distinctio hic consectetur placeat reiciendis et rem fugiat perferendis quibusdam at officia atque." },
    { title: "Persona 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, doloribus minus, libero quo expedita sequi voluptas repellat distinctio hic consectetur placeat reiciendis et rem fugiat perferendis quibusdam at officia atque." },
    { title: "Persona 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, doloribus minus, libero quo expedita sequi voluptas repellat distinctio hic consectetur placeat reiciendis et rem fugiat perferendis quibusdam at officia atque." },
    { title: "Persona 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, doloribus minus, libero quo expedita sequi voluptas repellat distinctio hic consectetur placeat reiciendis et rem fugiat perferendis quibusdam at officia atque." },
    { title: "Persona 4", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, doloribus minus, libero quo expedita sequi voluptas repellat distinctio hic consectetur placeat reiciendis et rem fugiat perferendis quibusdam at officia atque." },
  ];

  return (
    <div>
      <Box sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "1rem",
          padding: "1rem",
          justifyContent: "center",
          minHeight: "80vh",
        }}>
        <Container>
        <Typography sx={{
          color: "white",
          textAlign: "center",
          fontSize: "1.3rem",
          fontFamily: "Roboto",
          padding: "3rem",
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque quibusdam ipsam odio, dolorem quisquam enim officiis, voluptatibus sit, ad est et beatae quae at accusamus laborum. Odit, nesciunt molestias!
          <br></br>
          <br></br>
          Libero accusantium molestiae dolorum incidunt perspiciatis? Quibusdam eius architecto quos tempora, animi impedit a nesciunt deserunt repudiandae praesentium maxime dolorem voluptatum autem rem soluta aliquid. Incidunt consectetur quasi hic similique.
        </Typography>
        </Container>
        <Container sx={{
          display: "grid",
          gridGap: "2rem",
          justifyItems: "center",
        }}>
          <Cards cardInfo={cardInfo} />
        </Container>
      </Box>
    </div>
  );
};

export default AboutUs;
