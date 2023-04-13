import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  border-radius: 1rem;
  border: none;

  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 1.6rem;

  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
