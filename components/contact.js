import styled from '@emotion/styled'

export default function Contact () {
  return (
    <ContactSection>
      <ContactWrapper>
        <TextContent>
          <h3>Contact</h3>
          <h5>Email: <span>wisniewski.contact@gmail.com</span></h5>
          <h5>Phone: <span>+48-516-985-781</span></h5>
        </TextContent>
        <SocialLinks>
          <Link href='https://www.linkedin.com/in/piotr-wi%C5%9Bniewski-94136b1a7/' className='linkedin'>
            <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' /></svg>
          </Link>

          <Link href='https://github.com/pietrushka'>
            <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' /></svg>
          </Link>
        </SocialLinks>
      </ContactWrapper>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  display: flex;
  justify-items: center;
  padding: 60px 0;
  @media (max-width: 575.98px) {
    padding: 2rem;
  }
`

const ContactWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 575.98px) {
    width: 90%;
  }
`

const TextContent = styled.div`
  width: 40%;

  h3 {
    color: var(--black);
    font-size: 5rem;
    line-height: 55px;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  h5 {
    color: var(--grey);
    font-size: 1.5rem;

    span {
      color: var(--grey-dark);
    }
  }

  @media (max-width: 1100px) {
    width: 100%;
    text-align: center;

    h3{
      font-size: 6rem;
      margin-bottom: .5em;
      margin: 0;
    }

    h5 {
      font-size: 2rem;
      margin: 1em 0;
    }
  }

  @media (max-width: 767.98px) {
    h3{
      font-size: 4rem;
      margin: 0;
    }

    h5 {
      font-size: 1.3rem;
      margin: 1em 0;
    }
  }

  @media (max-width: 576px) {
    h3{
      font-size: 3rem;
      margin: 0;
    }

    h5 {
      font-size: 1.1rem;
      margin: 1em 0;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`

const Link = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: var(--grey-light);
  height: 200px;
  width: 200px;
  
  &:hover {
    border-radius: 5px;
  }

  &.linkedin:hover svg {
    fill: #2867B2;
  }
  @media (max-width: 767.98px) {
    height: 125px;
    width: 125px;
  }

  @media (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`
