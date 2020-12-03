import Image from 'next/image'
import styled from '@emotion/styled'

export default function Hero () {
  return (
    <HeroSection>
      <HeroWrapper>
        <TextContent>
          <h1>Hi! I am <span>Piotr</span>, frontend developer foucused on providing value and self development</h1>
          <ButtonsContainer>
            <BtnMain name='projects' href='#projects'>View my work</BtnMain>
            <BtnSecondary name='about' href='#about'>Read about me</BtnSecondary>
          </ButtonsContainer>
        </TextContent>
        <ImageContent>
          <PortraitContainer>
            <PortraitBackground/> 
              <Image src='/portrait-piotr.jpg' width='2483' height='2790'/>
          </PortraitContainer>
        </ImageContent>
      </HeroWrapper>
      <ScrollIconContainer>
        <ScrollIcon />
      </ScrollIconContainer>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  background: var(--bg-grey);
  min-height: calc(100vh - 4rem);
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

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const TextContent = styled.div`
  width: 60%;

  h1 {
    color: var(--black);
    margin-bottom: .25em;
    font-size: 3rem;
    line-height: 1.1em;

    span {
      color: var(--blue);

      &:hover{
        color: var(--blue-dark);
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 2rem;

    h1 {
      font-size: 2.5rem;
      margin: 0 auto;
    }
  }

  @media (max-width: 575.98px) {
    margin-top: 1rem;
    h1 {
      font-size: 1.5rem;
      margin: 0 auto;
    }
  }
`

const ButtonsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: start;

  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 575.98px) {
    flex-direction: column;
    margin-top: 1rem;
  }
  
`

const BtnMain = styled.a`
  margin-right: 20px;
  padding: .6em 1em;
  color: white;
  background: var(--blue);
  border: 0;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 22px;
  transition: all 350ms ease;

  &:hover {
    background: var(--blue-dark);
  }

  @media (max-width: 575.98px) {
    margin-right: 0;
    margin-bottom: .5em;
  }
`

const BtnSecondary = styled.a`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--blue);
  transition: color 200ms ease;

  &:hover {
    color: var(--blue-dark);
  }
`

const ImageContent = styled.div`
  width: 40%;
  display: flex;
  justify-content:center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
  }

  @media (max-width: 575.98px) {
    margin-top: 2rem;
  }
`

const PortraitContainer = styled.div`
  width: 65%;
  position: relative;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`

const PortraitBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -5%;
  left: 5%;
  background: var(--blue);
`

const ScrollIconContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 575.98px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
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
