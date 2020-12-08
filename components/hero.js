import {useRef, useEffect} from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import {gsap, TimelineLite, Power3} from 'gsap'


import {Layout} from './layout'

export default function Hero () {
  const contentRef = useRef()
  const tl = new TimelineLite({ delay: 0.8 })
  
  useEffect(() => {
    const heading = contentRef.current.children[0].children[0].children[0].children[0]
    const buttons = contentRef.current.children[0].children[1]
    const picture = contentRef.current.children[1].children[0]

    //Remove initial flash
    gsap.to(contentRef.current, 1, {css: {visibility: 'visible'}})
    tl.staggerFrom(heading, 1, {
      y: 105,
      opacity: 0,
      ease: Power3.easeOut
    }, 1, 'Start')
      .from(buttons, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 0)
      .from(picture, 1, { y: 40, opacity: 0, ease: Power3.easeOut }, 0)
  }, [])

  return (
    <HeroSection>
      <Layout>
        <HeroWrapper ref={contentRef} >
          <TextContent>
            <Heading>
              <HeadingWall>
                <div>
                  Hi! I am <span>Piotr</span>, frontend developer foucused on providing value and self development
                </div>
              </HeadingWall>
            </Heading>
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
      </Layout>
      <ScrollIconContainer>
        <ScrollIcon />
      </ScrollIconContainer>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  background: var(--grey);
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const HeroWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: auto 0;
  flex-direction: column-reverse;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const TextContent = styled.div`
  text-align: center;
  font-size: 1rem;
  margin-top: 1em;

  @media (min-width: 576px) {
    font-size: 1.5rem;
  }


  @media (min-width: 1024px) {
    font-size: 1.75rem;
    width: 60%;
    text-align: left;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Heading =  styled.h1`
  font-size: 1.2em;
  color: var(--black);
  margin-bottom: .25em;
  line-height: 1.1em;

  span {
    color: var(--blue-light);

    &:hover{
      color: var(--blue-dark);
    }
  }
`

const HeadingWall = styled.div`
  overflow: hidden;
  margin: 0;
`

const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  @media (min-width: 576px) {
    margin-top: 3rem;
  }

  @media (min-width: 1024px) {
    margin-top: 2rem;
    flex-direction: row;
  }

`

const BtnMain = styled.a`
  font-size: 1em;
  margin-bottom: .75em;
  padding: .6em 1em;
  color: white;
  background: var(--blue-light);
  border: 0;
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: 700;
  border-radius: 22px;
  transition: all 350ms ease;

  &:hover {
    background: var(--blue-dark);
  }

  @media (min-width: 1024px) {
    margin: 0;
    font-size: .75em;
  }
`

const BtnSecondary = styled.a`
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--blue-light);
  transition: color 200ms ease;

  &:hover {
    color: var(--blue-dark);
  }

  @media (min-width: 1024px) {
    font-size: .75em;
    margin-left: 1em;
  }
`

const ImageContent = styled.div`
  width: 100%;
  margin-top: .5rem;
  display: flex;
  justify-content:center;
  align-items: center;

  @media (min-width: 575.98px) {
    margin-top: 1.5rem;
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`

const PortraitContainer = styled.div`
  width: 60%;
  position: relative;
  max-width: 300px;

  @media (min-width: 1200px) {
    max-width: none;
    width: 70%;
  }
`

const PortraitBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -5%;
  left: 5%;
  background: var(--blue-light);
`

const ScrollIconContainer = styled.div`
  margin-top: .5rem;
  position: relative;

  @media (min-width: 575.98px) {
    margin-bottom: 3rem;
  } 
`

const ScrollIcon = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 35px;
  border-radius: 25px;
  border: 3px solid var(--black);

  &::before {
    position: relative;
    display: inline-block;
    top: -8px;
    content: '';
    width: 4px;
    height: 6px;
    margin-left: 5px;
    background: var(--black);
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
