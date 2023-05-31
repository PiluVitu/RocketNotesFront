import { RiShutDownLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services'
import { Container, Logout, Profile } from './styles'

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          title={user.name}
          alt="Foto de perfil do usuário"
        />
        <div>
          <span>Bem Vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
