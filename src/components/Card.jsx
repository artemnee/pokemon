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

const LoadingImg = styled.div`
  width: 24.75rem;
  height: 12.5rem;
  background: linear-gradient(90deg, #232323, #181818);
  background-size: 400% 400%;
  animation: gradient 2s ease infinite;
  transform: translate3d(0, 0, 0);

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`

const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.0625rem;
  line-height: 25.5px;
  color: #a0a0a0;
`

export default function Card({ pokemon, loading }) {
  return (
    <CardPoke>
      <TitleWrapper>
        <CardTitle>{pokemon.name}</CardTitle>
        {loading ? (
          <LoadingImg />
        ) : (
          <CardImg>
            <img
              src={pokemon?.sprites?.front_default}
              alt=""
              width={396}
              height={200}
            />
          </CardImg>
        )}
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
