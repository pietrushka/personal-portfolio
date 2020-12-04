import styled from '@emotion/styled'

export default function MessageSidePanel () {
  return (
    <Panel>
        <ContactLink name='contact' href='#contact'>
          <div />
        </ContactLink>
    </Panel>

  )
}

const Panel = styled.div`
  display: none;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 10;

  @media (min-width: 1024px) {
    display: block;
  }
`

const ContactLink = styled.a`
  position: absolute;
  bottom: 25px;
  left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--black);
  
  div {
    width: 1.5rem;
    height: 1.5rem;
    background: url('envelope.svg');
    background-repeat: no-repeat;
  }

  &:hover div {
    background: url('envelope-open.svg');
  }

  @media (min-width: 1440px) {
    bottom: 50px;
    left: 50px;
  }
`
