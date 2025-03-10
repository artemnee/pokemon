import Button from "./Button.jsx"
import Card from "./Card.jsx"
import { useEffect, useState } from "react"
import { fetchPokemonByUrl, fetchPokemons } from "../utils/api.js"
import { styled } from "@linaria/react"

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 70rem) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`

const LoadingButtons = styled.div`
  width: 31rem;
  height: 12.5rem;
  background: linear-gradient(90deg, rgba(17, 17, 17, 0.9), #131313);

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

const Buttons = styled.div`
  display: flex;
  column-gap: 6px;
  row-gap: 10px;
  flex-wrap: wrap;
`

export default function Content() {
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const [clicked, setClicked] = useState(true)

  async function loadPokemons() {
    try {
      const pokemons = await fetchPokemons()
      setPokemons(pokemons)
      setLoading(false)
    } catch (error) {
      console.error("Ошибка при загрузке покемонов", error)
    }
  }

  async function handlePokemonSelect(url) {
    try {
      setClicked(true)
      const pokemon = await fetchPokemonByUrl(url)
      setPokemon(pokemon)
      setTimeout(() => setClicked(false), 300)
    } catch (error) {
      console.error("Ошибка при загрузке покемона", error)
    }
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  useEffect(() => {
    if (pokemons.length > 0) {
      handlePokemonSelect(pokemons[0]?.url)
    }
  }, [pokemons])

  return (
    <ContentSection>
      {loading ? (
        <LoadingButtons />
      ) : (
        <Buttons>
          {pokemons.map((pokemon) => (
            <Button
              key={pokemon.name}
              onClick={() => handlePokemonSelect(pokemon.url)}
            >
              {pokemon.name}
            </Button>
          ))}
        </Buttons>
      )}

      <Card pokemon={pokemon} loading={loading} clicked={clicked} />
    </ContentSection>
  )
}
