import { styled } from "@linaria/react"

const Section = styled.section`
  width: 80rem;
  margin: 0 auto;
  padding: 0 9.375rem;
  box-sizing: border-box;
  display: flex;
  gap: 3.375rem;
  flex-direction: column;
  @media (max-width: 70rem) {
    padding-inline: 3rem;
    width: unset;
  }
`
import Button from "../components/Button"
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import axios from "axios"
import { useEffect, useState } from "react"

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 70rem) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`

const Buttons = styled.div`
  display: flex;
  column-gap: 6px;
  row-gap: 10px;
  flex-wrap: wrap;
`

export default function Container() {
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)

  async function getPokemos() {
    try {
      const pokemons = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=10`,
      )
      setPokemons(pokemons.data.results)
      setLoading(false)
    } catch (error) {
      console.error("Ошибка при загрузке покемонов", error)
    }
  }

  async function handleChangePokemon(url) {
    try {
      const pokemon = await axios.get(`${url}`)
      setPokemon(pokemon.data)
    } catch (error) {
      console.error("Ошибка при загрузке покемона", error)
    }
  }

  useEffect(() => {
    getPokemos()
  }, [])

  useEffect(() => {
    if (pokemons.length > 0) {
      handleChangePokemon(pokemons[0]?.url)
    }
  }, [pokemons])

  return (
    <Section>
      <Header />
      <Content>
        <Buttons>
          {pokemons.map((pokemon) => (
            <Button
              key={pokemon.name}
              onClick={() => handleChangePokemon(pokemon.url)}
            >
              {pokemon.name}
            </Button>
          ))}
        </Buttons>
        <Card pokemon={pokemon} loading={loading} />
      </Content>
    </Section>
  )
}
