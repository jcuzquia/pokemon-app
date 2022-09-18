import { Card, Grid, Row, Text } from "@nextui-org/react";
import React, { FC } from "react";
import { SmallPokemon } from "../../interfaces/pokemon-list";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, image, name } = pokemon;
  const router = useRouter();
  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

interface Props {
  pokemon: SmallPokemon;
}

export default PokemonCard;
