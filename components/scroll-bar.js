import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

export default function ScrollBar () {
  const progressRef = useRef()
  let totalHeight

  useEffect(() => {
    totalHeight = window.document.body.offsetHeight - window.innerHeight
    window.onscroll = function () {
      const progressHeight = (window.pageYOffset / totalHeight) * 100
      progressRef.current.style.height = progressHeight + '%'
    }
  }, [])

  return (
    <>
      <ProgressBar ref={progressRef} />
      <ScrollPath />
    </>
  )
}

const ProgressBar = styled.div`
  left: auto;
  position: fixed;
  top: 0;
  right: 0;
  width: 8px;
  height: 0;
  background: var(--blue-dark);

`
const ScrollPath = styled.div`
  left: auto;
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
`
