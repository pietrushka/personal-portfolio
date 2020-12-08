import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

import {AnimateOnScroll} from '../utils/gsap-utils'
import {Layout} from './layout'
import SectionHeading from './section-headings'

export default function Projects () {
  const cardsRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  
  useEffect(() => {
    const cards = Array.from(cardsRef.current.children)
    cards.forEach((card, idx) => {
      AnimateOnScroll(gsap, card)
    })
  }, []);  

  return (
    <ProjectsSection id='projects'>
      <Layout>
        
        <SectionHeading 
          h5Text='SELECTED PROJECTS'
          h3Text='My work'
          color='brown'
        />

        <ProjectsContainer ref={cardsRef}>

          <ProjectCard>
            <h3>wideboard.</h3>
            <CardOverlay>
              <p>Fullstack project built with React, SocketIo, Express, MongoDB</p>
              <CodeLink href='https://github.com/pietrushka/shared-workspace-client'>
                View code <img src='github.png' />
              </CodeLink>
              <DemoLink href='https://wideboard.netlify.app/'>Demo ➤</DemoLink>
            </CardOverlay>
            <Image src='/wideboard.jpg' width='1040' height='802'/>
          </ProjectCard>

          <ProjectCard >
            <h3>sikory.</h3>
            <CardOverlay>
              <p>Fullstack project built with Next.js, Strapi, Stripe, Tailwind</p>

              <CodeLink href='https://github.com/pietrushka/ecommerce-watches-next.js'>
                View code <img src='github.png' />
              </CodeLink>
              <DemoLink href='https://sikory.vercel.app/'>Demo ➤</DemoLink>
            </CardOverlay>
            <Image src='/sikory.jpg' width='781' height='678'/>
          </ProjectCard>

          <ProjectCard >
            <h3>2048.vs</h3>
            <CardOverlay>
              <p>Multiplayer 2048 game built with TypeScript, React, SocketIo</p>

              <CodeLink href='https://github.com/pietrushka/2048-multiplayer-client'>
                View code <img src='github.png' />
              </CodeLink>
              <DemoLink href='https://distracted-lalande-e608f0.netlify.app/'>Demo ➤</DemoLink>
            </CardOverlay>
            <Image src='/2048-vs.jpg' width='1229' height='957'/>
          </ProjectCard>

          <ProjectCard >
            <h3>Airsoftum</h3>
            <CardOverlay>
              <p>Landing page with contact form built with Next.js</p>

              <CodeLink href='https://github.com/pietrushka/airsoftium-page'>
                View code <img src='github.png' />
              </CodeLink>
              <DemoLink href='https://airsoftium.pl/'>Demo ➤</DemoLink>
            </CardOverlay>
            <Image src='/airsoftium-landing.jpg' width='1508' height='1008'/>
          </ProjectCard>
        
        </ProjectsContainer>
      </Layout>

    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  background: var(--brown-light);
`

const ProjectsContainer = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }
`
const ProjectCard = styled.div`
  font-size: 1rem;
  letter-spacing: 1px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--grey);
  border-radius: 1em;
  padding: .5em;
  min-height: 250px;

  h3 {
    font-size: 1.5em;
    margin: 0 0 .25em 0;
    text-align: center;
    z-index: 3;
    line-height: 1.25em;
  }

  &::before {
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: var(--black);
    position: absolute;
    z-index: 2;
    opacity: 0;
    transition: all .3s;
  }

  &:hover h3  {
    color: white;
    transform: scale(1.1);
  }
  &:hover div {
     display: flex;
  }

  &:hover::before {
    opacity: .9;
  }

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1024px) {
    height: 100%;
  }
`

const ImageContainer = styled.div`
  position: relative;
  border-radius: 1em;
  overflow: hidden;
  padding-top: 80%;
  height: 0;
`

const CardOverlay = styled.div`
  display: none;
  position: absolute;
  font-size: inherit;
  top: 3em;
  left: 0;
  width: 100%;
  z-index: 3;
  height: calc(100% - 3em);
  text-align: center;
  flex-direction: column;
  justify-content: space-around;

  p {
    color: var(--white);
    font-size: 1em;
    margin: 0;
  }
`

const CodeLink = styled.a`
  position: relative;
  margin: 0 auto;
  color: var(--black);
  font-weight: 700;
  background: white;
  font-size: 1.25em;
  border: 3px solid white;
  border-radius: 1em;
  cursor: pointer;
  padding: .15em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  img {
    margin-left: .5rem;
    background: white;
    padding: .1em;
    border-radius: 50%;
  }

    &:hover {
      background: var(--black);
      color: var(--white);
    }
  
`

const DemoLink = styled.a`
  margin: 0 auto;
  font-size: 1.25em;
  color: white;
  cursor: pointer;
  position: relative;
  transition: .1s linear;
  width: fit-content;
  margin-bottom: 1em;

  &:hover {
    transform: scale(1.1);
  }
`
