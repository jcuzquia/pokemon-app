import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import NoFavorites from "../../components/pokemon/NoFavorites";
import { pokemons } from "../../utils/localFavorites";
import FavoritePokemons from "../../components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
