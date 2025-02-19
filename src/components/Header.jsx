import { styled } from "@linaria/react"

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Header() {
  return (
    <Head>
      <div>ПОКЕМОНЫ API</div>
      <div>
        <img src="/hand.svg" alt="hand" />
        <span>Нажмите на нужное Покемона</span>
      </div>
    </Head>
  )
}
