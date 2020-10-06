
import Link from 'next/link'
import styled from '@emotion/styled'

export default function Projects () {
  return (
    <ProjectsSection>
      <ProjectsWrapper>

        <Heading>
          <h5>SELECTED PROJECTS</h5>
          <h3>My work</h3>
        </Heading>

        <ProjectsContainer>

          <ProjectCard>
            <h3>wideboard.</h3>
            <CardOverlay>
              <p>Fullstack project built with React, SocketIo, Express, MongoDB</p>
              <CodeLink href='https://github.com/pietrushka/shared-workspace-client'>
                <span>View code <img src='github.png' /></span>
              </CodeLink>
              <DemoLink href='https://wideboard.netlify.app/'>Demo ➤</DemoLink>
            </CardOverlay>
            <ImageContainer>
              <img src='wideboard.jpg' />
            </ImageContainer>
          </ProjectCard>

          <ProjectCard className='upper-card'>
            <h3>sikory.</h3>
            <CardOverlay>
              <p>Fullstack project built with Next.js, Strapi, Stripe, Tailwind</p>

              <CodeLink href='https://github.com/pietrushka/ecommerce-watches-next.js'>
                <span>View code <img src='github.png' /></span>
              </CodeLink>
              <DemoLink href='https://sikory.vercel.app/'>Demo ➤</DemoLink>
            </CardOverlay>
            <ImageContainer>
              <img src='sikory.jpg' />
            </ImageContainer>
          </ProjectCard>
        </ProjectsContainer>
      </ProjectsWrapper>

    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 4rem 0;
  background: var(--bg-brown);
  @media (max-width: 767.98px) {
    padding: 4rem 0;
  }
`
const ProjectsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767.98px) {
    width: 90%
  }
`
const Heading = styled.div`
  width: 100%;
  height: auto;
  margin-left: 30px;
  h5 {
    color: var(--brown);
    margin-bottom: .25em;
    font-size: 2rem;
  }
  h3 {
    color: white;
    font-size: 4rem;
    margin-top: .25em;
    margin-bottom: 0;
  }
  @media (max-width: 767.98px) {
    margin-left: 0;
    h5{
      font-size: 1.2rem;
      margin-top: 0;
    }

    h3 {
      margin-top: .2em;
      font-size: 3rem;
      margin-bottom: 0;
    }
  }
`

const ProjectsContainer = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;

  @media (max-width: 767.98px) {
    margin-top: 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    align-items: center;
    gap: 0;
  }

  @media (max-width: 991.98px) {
    gap: 1rem;
  }
`
const ProjectCard = styled.div`
  letter-spacing: 1px;
  position: relative;
  margin-top: 3.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-grey);
  border-radius: 1rem;
  padding: 1rem;

  &.upper-card {
    margin-top: -5rem
  }

  h3 {
    font-size: 3rem;
    text-align: center;
    margin: .5em;
    z-index: 3;
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
     display: block;
  }

  &:hover::before {
    opacity: .9;
  }

  @media (max-width: 767.98px) {
    &.upper-card {
      margin-top: 0rem
    }

  }
`

const ImageContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  padding-top: 80%;
  height: 0;

  img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const CardOverlay = styled.div`
  width: 90%;
  z-index: 3;
  display: none;
  top: 35%;
  position: absolute;
  text-align: center;

  p {
    color: white;
    font-size: 1.5rem;
    margin: 2em;
  }

  @media (max-width: 575.98px) {
    p {
      margin: 1em 0;
      font-size: 1rem;
    }
  }

  @media (max-width: 767.98px) {
    p {
      margin: 2em 0;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 991.98px) {
    p {
      margin: .5em 0;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1199.98px) {
     p {
      margin: 1em 0;
      font-size: 1.5rem;
    }
  }
`

const CodeLink = styled.a`

  span {
    margin: 0 auto;
    color: var(--black);
    font-weight: 700;
    background: white;
    font-size: 1.5rem;
    position: relative;
    border: 3px solid white;
    padding: .4em;
    border-radius: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    img {
      margin-left: .5rem;
      background: white;
      padding: .1rem;
      border-radius: 50%;
    }
    &:hover {
      background: var(--black);
      color: white;
    }

    @media (max-width: 575.98px) {
      font-size: 1rem;
      padding: .2em;
      border: 2px solid white;
    }

    @media (max-width: 991.98px) {
      font-size: 1rem;
    }

    @media (max-width: 1199.98px) {
      width: 70%;
      font-size: 1.5rem;
    }
  }
`

const DemoLink = styled.a`
  display: block;
  margin: 1rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  position: relative;
  transition: .1s linear;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 991.98px) {
    font-size: 1.25rem;
  }

  @media (max-width: 1199.98px) {}
`
