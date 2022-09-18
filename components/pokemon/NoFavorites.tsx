import { Container, Image, Text } from "@nextui-org/react";
import React from "react";
import { useState } from "react";

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>no hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/148.svg"
        width={250}
        height={250}
        css={{ opacity: 0.1 }}
        alt="Pokemon image"
      />
    </Container>
  );
};

export default NoFavorites;
