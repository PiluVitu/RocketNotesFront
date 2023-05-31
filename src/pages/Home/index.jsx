import { useEffect, useState } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { TextButton } from '../../components/TextButton'
import { api } from '../../services'
import { Brand, Container, Content, Menu, NewNote, Search } from './styles'

export function Home() {
  const navigate = useNavigate()

  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  function handleTagSelected(tagName) {
    if (tagName === 'all') {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleDetails(noteId) {
    navigate(`/details/${noteId}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )
      setNotes(response.data)
    }
    fetchNotes()
  }, [tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <TextButton
            title="Todos"
            onClick={() => handleTagSelected('all')}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map(tag => (
            <li key={tag.id}>
              <TextButton
                title={tag.name}
                isActive={tagsSelected.includes(tag.name)}
                onClick={() => {
                  handleTagSelected(tag.name)
                }}
              />
            </li>
          ))}
      </Menu>
      <Search>
        <Input
          placeholder="Pesquisar por título"
          icon={FiSearch}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>
      <Content>
        <Section title="Minhas Notas ">
          {notes.map(note => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => {
                handleDetails(note.id)
              }}
            />
          ))}
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
