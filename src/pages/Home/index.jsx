import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <TextButton title="Todos" />
        </li>
        <li>
          <TextButton title="React" />
        </li>
        <li>
          <TextButton title="Node" />
        </li>
        <li>
          <TextButton title="Python" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar por título" icon={FiSearch}/>
      </Search>
      <Content>
        <Section title="Minhas Notas ">
          <Note
            data={{
              title: 'Minha Primeira Aplicação em React',
              tags: [
                {
                  id: '1',
                  name: 'React'
                },
                {
                  id: '2',
                  name: 'SPA'
                }
              ]
            }}
          />
          <Note
            data={{
              title: 'Bot para o discord com Python',
              tags: [
                {
                  id: '1',
                  name: 'Python'
                },
                {
                  id: '2',
                  name: 'Automação'
                }
              ]
            }}
          />
          <Note
            data={{
              title: 'Primeira API com nodeJs',
              tags: [
                {
                  id: '1',
                  name: 'Node'
                },
                {
                  id: '2',
                  name: 'Crudzin'
                }
              ]
            }}
          />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
