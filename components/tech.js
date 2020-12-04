import styled from '@emotion/styled'
import { Layout } from './layout'
import SectionHeading from './section-headings'

export default function TechStack () {
  return (
    <TechSection>
      <Layout>

        <SectionHeading 
          h3Text='Tech Stack'
          h5Text='My favorite technologies'
          color='yellow'
        />

        <CardContainer>

          <TechCard>
            <ImageContainer>
              <img src='html5.svg' />
            </ImageContainer>
            <span>HTML</span>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='css3.svg' />
            </ImageContainer>
            <span>CSS</span>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='js.svg' />
            </ImageContainer>
            <span>JavaScript</span>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='react.svg' />
            </ImageContainer>
            <span>React</span>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='nextjs.png' />
            </ImageContainer>
            <span>Next.js</span>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='expressjs.png' />
            </ImageContainer>
            <span>Express.js</span>
          </TechCard>

          </CardContainer>
      </Layout>
    </TechSection>
  )
}

const TechSection = styled.section`
  background: var(--yellow-light);
`

const CardContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );
  gap: 1rem;
`

const TechCard = styled.div`
  font-size: 1rem;
  border-radius: .5em;
  width: 100%;
  height: 100%;
  padding: .75em;
  background: white;
  text-align: center;
  transition: all 0.3s ease-in;

  span {
    display: block;
    font-size: 1.2em;
    color: var(--black);
    margin-top: .5rem;
  }

  &:hover {
    transform: scaleX(1.05) scaleY(1.05);
  }
`

const ImageContainer = styled.div`
  height: 80%;
  display:flex;
  align-items:center;
  justify-content:center;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`
