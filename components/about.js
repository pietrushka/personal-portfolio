import Image from 'next/image'
import styled from '@emotion/styled'
import { Layout } from './layout'

import SectionHeading from './section-headings'

export default function About () {
  return (
    <AboutSection id='about'>
      <Layout>

        <SectionHeading 
          h5Text='Short introduction'
          h3Text='About me'
          color='blue'
        />

        <ContentAbout>
          <Image src='/space.png' width='2250' height='2250' /> 
          <DescriptionContainer>
            <p>Hi, my name is Piotr Wiśniewski, a frontend developer, based in Poland.I've always been very keen on technology and business. At the age of 15, I bought Arduino Uno R3, it was my first contact with programming. After graduating high school I decided to learn web-development full-time.
            </p>
            <ResumeLink href='https://drive.google.com/file/d/1DAnRVjKhpqo4BvT4D0QiP9gX4aGzB4gw/view?usp=sharing' target='_blank'>
              Resume ➤
            </ResumeLink>
          </DescriptionContainer>
        </ContentAbout>
      </Layout>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  background: var(--blue-light);
`

const ContentAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

   img {
    object-fit: contain;
    width: 100%;
  }

  @media (min-width: 578px) {
    width: 90%;
    margin: 0 auto;

    img {
      width: 65%;
    }
  }


  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
`

const DescriptionContainer = styled.div`
  width: 100%;
  padding: .75em;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  line-height: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  
  p {
    padding: 0;
    display: block;
    color: var(--white);
    text-align: center;
    margin: 0;
  }

  @media (min-width: 575.98px) {
    font-size: 1.1em;
  }

  @media (min-width: 1024px) {
    font-size: 1.25em;
  }
`
const ResumeLink = styled.a`
  display: block;
  font-size: inherit;
  color: var(--blue-light);
  border: 3px solid var(--white);
  background: var(--white);
  margin-top: 1.5em;
  border-radius: .5em;
  transition: all .3s;
  padding: .6em 1em;
  border-radius: 1.5em;

  &:hover {
    background: var(--blue-light);
    color: var(--white);
  }
`
