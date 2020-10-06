import Link from 'next/link'
import styled from '@emotion/styled'

export default function Navbar () {
  return (
    <>
      <NavbarInner>
        <NavbarWrapper>
          <Link href='#'>
            <Brand>
              <BrandLogo>Piotr Wiśniewski</BrandLogo>
            </Brand>
          </Link>
        </NavbarWrapper>
      </NavbarInner>
    </>
  )
}

const NavbarInner = styled.nav`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (max-width: 575.98px) {
    height: 4rem;
  }
`

const NavbarWrapper = styled.div`
  display: block;
  width: 80%;
  display: flex;
  align-items: center;

  @media (max-width: 575.98px) {
    width: 90%;
  }
`

const Brand = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  cursor: pointer;
`

const BrandLogo = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  line-height: 1em;
  color: var(--black);

  @media (max-width: 575.98px) {
    font-size: 1.4rem;
  }
`
