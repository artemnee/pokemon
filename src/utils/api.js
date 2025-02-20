import axios from "axios"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export const fetchPokemons = async (limit = 10) => {
  const response = await axios.get(`${BASE_URL}?limit=${limit}`)
  return response.data.results
}

export const fetchPokemonByUrl = async (url) => {
  const response = await axios.get(url)
  return response.data
}
