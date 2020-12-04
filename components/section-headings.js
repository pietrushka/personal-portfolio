import styled from '@emotion/styled'

export default function SectionHeading ({h3Text, h5Text, color}) {
  return (
    <Heading color={color}>
      <h5>{h5Text}</h5>
      <h3>{h3Text}</h3> 
    </Heading>
  )
}

const Heading = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
  
  h5 {
    color: ${({color}) => color === 'black' ? 'var(--grey-dark)' : `var(--${color}-dark)`};
    font-size: 1.1em;
    margin: 0;
  }
  
  h3 {
    margin-top: .15em;
    font-size: 2em;
    color: ${({color}) => color === 'black' ? 'var(--black)' : 'var(--white)'};
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
    margin-bottom: 4rem;
  } 
`