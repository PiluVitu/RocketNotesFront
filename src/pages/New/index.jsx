import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { useState } from 'react'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
 import { useNavigate } from 'react-router-dom'

import { api } from '../../services'

import { Container, Form } from './styles'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleDeleteLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert('Insira um título da nota')
    }

    if (newLink || newTag) {
      return alert('Você digitou uma nova tag/link, mas não clicou em salvar!')
    }

    await api.post('/notes', {
      title, 
      description, 
      tags, 
      links
    })

    alert('Nota cadastrada com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to={-1}>Voltar</Link>
          </header>
          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          ></Textarea>
          <Section title="Links Úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => {
                  handleDeleteLink(link)
                }}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={index}
                  value={tag}
                  onClick={() => {
                    handleDeleteTag(tag)
                  }}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote}  />
        </Form>
      </main>
    </Container>
  )
}
