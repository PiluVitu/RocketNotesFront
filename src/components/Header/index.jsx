import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/piluvitu.png" alt="GitHub Profile Photo" />
        <div>
          <span>Bem Vindo,</span>
          <strong>Paulo Victor Torres Silva</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
