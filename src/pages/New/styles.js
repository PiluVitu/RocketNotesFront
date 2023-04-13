import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    'header'
    'content';
`

export const Form = styled.form`
  max-width: 55rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;

    a {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
