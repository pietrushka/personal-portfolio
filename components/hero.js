import styled from '@emotion/styled'

export default function Hero () {
  return (
    <HeroSection>
      <HeroWrapper>
        <TextContent>
          <h5>Piotr Wiśniewski</h5>
          <h1>Frontend Developer</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim illum deserunt corrupti, laudantium mollitia architecto adipisci in dolor quod expedita!</p>
          <ButtonsContainer>
            <BtnMain name='projects' href='#projects'>View my work</BtnMain>
            <BtnSecondary name='about' href='#about'>Read about me</BtnSecondary>
          </ButtonsContainer>
        </TextContent>
      </HeroWrapper>
      <ScrollIconContainer>
        <ScrollIcon />
      </ScrollIconContainer>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  background: var(--bg-grey);
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroWrapper = styled.div`
  display: flex;
  font-size: 1rem;
  position: relative;
  width: 80%;
  margin: auto 0;

  @media (max-width: 575.98px) {
    flex-direction: column
  }
`

const TextContent = styled.div`
  width: 50%;

  h5 {
    color: var(--blue);
    margin-bottom: 1em;
    font-size: 1.8rem;
  }

  h1 {
    color: var(--black);
    margin-bottom: .5em;
    font-size: 3.5rem;
    line-height: 1.1em;
  }

  p {
    color: var(--grey-dark);
  }

  @media (max-width: 575.98px) {


    h5 {
      font-size: 1.2rem;
      margin-bottom: .5em;
    }
    h1 {
      font-size: 3rem;
      margin: 0 auto;
    }
    p{
      font-size: .9rem;
    }
  }

  @media (max-width: 767.98px) {
    width: 100%;
    text-align: center;
    h5 {
      font-size: 1.4rem;
      margin-bottom: .5em;
    }
    h1 {
      font-size: 4rem;
      margin: 0 auto;
    }
    p{
      margin: 1em auto;
      font-size: 1rem;
      width: 85%;
    }
  }
  
  @media (max-width: 991.98px) {
    
  }

  @media (max-width: 1340px) {

  }
  `

const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 767.98px) {
    justify-content: center;
  }

  
`

const BtnMain = styled.a`
  margin-bottom: 10px;
  margin-right: 20px;
  padding: 9px 15px;
  color: white;
  background: var(--blue);
  border: 0;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 22px;
  transition: all 350ms ease;

  &:hover {
    background: var(--blue-dark);
  }
`

const BtnSecondary = styled.a`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--blue);
  transition: color 200ms ease;

  &:hover {
    color: var(--blue-dark);
  }
`

const ScrollIconContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  position: relative;
  
`

const ScrollIcon = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 35px;
  border-radius: 25px;
  border: 3px solid var(--grey-dark);

  &::before {
    position: relative;
    display: inline-block;
    top: -8px;
    content: '';
    width: 4px;
    height: 6px;
    margin-left: 5px;
    background: var(--grey-dark);
    border-radius: 2px;
    opacity: 1;
    animation: slide 2s infinite;
  }

  @keyframes slide {
  from {
    top: -8px;
    opacity: 1;
  }
  to {
    top: 8px;
    opacity: 0;
  }
}
`
