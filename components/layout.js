import styled from '@emotion/styled'

export const Layout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem;

  @media (min-width: 768px) {
    padding: 5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 2rem;
  }
`