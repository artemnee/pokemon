import { styled } from "@linaria/react"

const CardPoke = styled.article`
  display: flex;
  flex-direction: column;
  padding: 44px 44px 16px;
  background-color: black;
  gap: 2.75rem;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
`

const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  height: 3rem;
  line-height: 3rem;
  color: #a0a0a0;
  margin: 0;
`

const CardImg = styled.div`
  width: 24.75rem;
  height: 12.5rem;
`

const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.0625rem;
  line-height: 25.5px;
  color: #a0a0a0;
`

export default function Card({ pokemon, clicked }) {
  return (
    <CardPoke
      style={{
        opacity: clicked ? 0.5 : 1,
        transition: "opacity 0.2s linear",
      }}
    >
      <TitleWrapper>
        <CardTitle>{pokemon.name}</CardTitle>
        <CardImg>
          <img
            src={pokemon?.sprites?.front_default}
            alt=""
            width={396}
            height={200}
            style={{
              opacity: clicked ? 0.1 : 1,
            }}
          />
        </CardImg>
      </TitleWrapper>
      <CardDesc>
        <span>Снялся в ??? сериях</span>
        <span> Id: {pokemon.id}</span>
        <span> height: {pokemon.height}</span>
        <span>
          Attack:{" "}
          {
            pokemon?.stats?.find((stat) => stat.stat.name === "attack")
              ?.base_stat
          }
        </span>
      </CardDesc>
    </CardPoke>
  )
}
