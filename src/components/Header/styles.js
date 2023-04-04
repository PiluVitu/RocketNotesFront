import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 10.5rem;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8rem;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  gap: 0.9rem;

  > img {
    width: 7rem;
    height: 7rem;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    span {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.4rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
  background: none;

  border: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-size: 3.6rem;
  }
`
