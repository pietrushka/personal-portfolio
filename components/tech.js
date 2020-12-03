import styled from '@emotion/styled'

export default function TechStack () {
  return (
    <TechSection>
      <TechWrapper>

        <Heading>
          <h5>My favorite technologies</h5>
          <h3>Tech Stack</h3>
        </Heading>

        <CardContainer>

          <TechCard>
            <ImageContainer>
              <img src='html5.svg' />
            </ImageContainer>
            <p>HTML</p>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='css3.svg' />
            </ImageContainer>
            <p>CSS</p>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='js.svg' />
            </ImageContainer>
            <p>JavaScript</p>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='react.svg' />
            </ImageContainer>
            <p>React</p>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='nextjs.png' />
            </ImageContainer>
            <p>Next.js</p>
          </TechCard>

          <TechCard>
            <ImageContainer>
              <img src='expressjs.png' />
            </ImageContainer>
            <p>Express.js</p>
          </TechCard>

        </CardContainer>
      </TechWrapper>
    </TechSection>
  )
}

const TechSection = styled.section`
  padding-top: 2rem;
  background: var(--yellow-light);
  padding-bottom: 5rem;
`

const TechWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  @media (max-width: 575.98px) {
    width: 90%;
  }
`

const Heading = styled.div`
  width: 100%;
  height: auto;
  margin-left: 30px;
  h5 {
    color: var(--yellow-dark);
    margin-bottom: .5em;
    font-size: 2rem;
  }
  h3 {
    color: white;
    font-size: 4rem;
    margin-top: .5em;
  }
  @media (max-width: 575.98px) {
    margin-left: 0;
    h5{
      font-size: 1.2rem;
    }

    h3 {
      margin-top: .2em;
      font-size: 3rem;
      margin-bottom: 0;
    }
  }
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
  grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );
  gap: 1rem;
  
  @media (max-width: 575.98px) {
    margin-top: 2rem;
    gap: 1rem;
  }
`

const TechCard = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  margin: 1.5%;
  padding: 20px;
  background: white;
  text-align: center;
  transition: all 0.3s ease-in;

  p {
    font-size: 1.2rem;
    padding: 5px;
    color: var(--yellow-dark);
  }

  &:hover {
    transform: scaleX(1.05) scaleY(1.05);
  }

  @media (max-width: 575.98px) {
    padding: .5rem;

    p {
      margin: 0;
      padding: 0;
    }
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
