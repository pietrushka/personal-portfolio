import styled from '@emotion/styled'

export default function MessageSidePanel () {
  return (
    <Panel>
      <ButtonContainer>
        <ContactLink name='contact' href='#contact'>
          <div />
        </ContactLink>
      </ButtonContainer>
    </Panel>

  )
}

const Panel = styled.div`
  width: 10vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 10;

  @media (max-width: 575.98px) {
    display: none;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  height: 20vh;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactLink = styled.a`
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
`
