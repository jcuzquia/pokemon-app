import { Card, Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { Pokemon } from "../../interfaces/pokemon-full";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props {
  pokemons: number[];
}

const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((pid) => (
        <FavoriteCardPokemon pokemonId={pid} key={pid} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;
