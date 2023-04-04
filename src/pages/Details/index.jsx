import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Tags } from '../../components/Tags'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <TextButton title="Excluir Nota" />

          <h1>ReactZin Brabissimo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi
            consequatur quasi possimus doloremque magni, voluptatum corrupti
            ipsum nesciunt et unde quas, harum cupiditate assumenda cumque
            sapiente, sed quos explicabo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus saepe aspernatur non enim et, culpa
            magnam? Nihil ab error, obcaecati laborum magni nam architecto unde
            distinctio doloremque inventore dolores rerum! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quaerat inventore pariatur itaque
            a? Officiis ad ducimus repudiandae aliquam, eligendi cumque. Vel non
            harum recusandae exercitationem deleniti distinctio delectus ab
            architecto.
          </p>
          <Section title="Links Úteis">
            <Links>
              <li>Minha</li>
              <li>Cabeça</li>
              <li>Tá</li>
              <li>Pixcanu</li>
              <li>
                <a href="https://piluvitu.dev " target="blank_">
                  Site Do Brabo
                </a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tags title="Piramide" />
            <Tags title="Bah" />
            <Tags title="Cumida" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
