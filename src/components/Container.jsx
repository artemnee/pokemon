import { styled } from "@linaria/react"
import Header from "./Header.jsx"

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

export default function Container({ children }) {
  return (
    <Section>
      <Header />
      {children}
    </Section>
  )
}
