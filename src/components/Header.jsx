import { styled } from "@linaria/react"

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 0.75rem;
  margin: 0;
  font-weight: 500;
  line-height: 13.52px;
  color: #ffffff;
  padding: 7px;
  border: 1px solid #ffffff;
`
const Click = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Desc = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 12px;
`

export default function Header() {
  return (
    <Head>
      <Title>ПОКЕМОНЫ API</Title>
      <Click>
        <img src="/hand.svg" alt="hand" />
        <Desc>
          Нажмите на <br /> нужное Покемона
        </Desc>
      </Click>
    </Head>
  )
}
