import styled from '@emotion/styled'

export default function About () {
  return (
    <AboutSection id='about'>
      <AboutWrapper>
        <Heading>
          <h5>Short introduction</h5>
          <h3>About me</h3>
        </Heading>

        <ContentAbout>
          <img src='space.png' />
          <DescriptionContainer>
            <p>Hi, my name is Piotr Wiśniewski, a frontend developer, based in Poland.
I've always been very keen on technology and business. At the age of 15, I bought Arduino Uno R3, it was my first contact with programming. After graduating high school I decided to learn web-development full-time.
            </p>
            <ResumeLink href='https://drive.google.com/file/d/1CkiNFO3w4YF8-ISn61WtmMm19InlZwqT/view' target='_blank'>
              Resume ➤
            </ResumeLink>
          </DescriptionContainer>

        </ContentAbout>

      </AboutWrapper>

    </AboutSection>
  )
}

const AboutSection = styled.section`
  background: var(--red);
  padding: 4rem 0;
  @media (max-width: 575.98px) {
    padding: 4rem 0;
  }
`

const AboutWrapper = styled.div`
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
    color: var(--red-dark);
    margin-bottom: .5em;
    font-size: 2rem;
  }
  h3 {
    color: white;
    font-size: 4rem;
    margin-top: .5em;
    margin-bottom: 0;
  }

  @media (max-width: 575.98px) {
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

const ContentAbout = styled.div`
  margin-top: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;

   img {
    object-fit: contain;
    width: 90%;
  }

  @media (max-width: 767.98px) {
    margin-top: 0;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 991.98px) {
    img {
      width: 100%;
    }
  }
`

const DescriptionContainer = styled.div`
  width: 100%;
  padding: .75em;
  font-size: 1.75rem;
  border-radius: .75em;
  background: var(--bg-grey);
  display: flex;
  align-items: center;
  line-height: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  
  p {
    display: block;
    color: var(--black);
    text-align: center;
  }

  @media (max-width: 575.98px) {
    font-size: 1.25rem;
    padding: .75em;
  }

  @media (max-width: 991.98px) {
    font-size: 1.5rem;
    padding: .5em;
  }
`
const ResumeLink = styled.a`
  display: block;
  font-size: 2rem;
  padding: .5em;
  color: var(--black);
  border: 2px solid var(--black);
  border-radius: .5em;
  transition: all .3s;

  &:hover {
    color: white;
    background: var(--black);
  }

  @media (max-width: 575.98px) {
    font-size: 1.5rem;
  }
`
