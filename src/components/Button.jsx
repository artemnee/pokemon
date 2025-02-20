import { styled } from "@linaria/react"

const ButtonPoke = styled.button`
  background-color: #1986ec;
  border: none;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 1.25rem;
  border-radius: 2.75rem;
  color: white;
  cursor: pointer;
  min-width: 60px;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

export default function Button({ children, onClick }) {
  return <ButtonPoke onClick={onClick}>{children}</ButtonPoke>
}
