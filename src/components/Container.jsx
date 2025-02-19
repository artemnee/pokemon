import { styled } from "@linaria/react"
import Header from "./Header.jsx"

const Section = styled.section`
  width: 80rem;
  margin: 0 auto;
  padding: 0 9.375rem;
  box-sizing: border-box;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
`

export default function Container() {
  return (
    <Section>
      <Header />
    </Section>
  )
}
