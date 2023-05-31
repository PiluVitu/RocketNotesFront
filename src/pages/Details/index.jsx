import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tags } from '../../components/Tags'
import { TextButton } from '../../components/TextButton'
import { api } from '../../services'
import { Container, Content, Links } from './styles'

export function Details() {
  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState(null)

  function handleBack() {
    navigate(-1)
  }

  async function handleDelete() {
    const confirm = window.confirm('Você deseja excluir essa nota ?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      alert('Nota deletada com sucesso')
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <TextButton title="Excluir Nota" onClick={handleDelete} />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links Úteis">
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="blank_" rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map(tag => (
                  <Tags key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  )
}
