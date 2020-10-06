import Head from 'next/head'

import Navbar from '../components/navbar'
import ScrollBar from '../components/scroll-bar'
import Hero from '../components/hero'
import Projects from '../components/projects'
import About from '../components/about'
import TechStack from '../components/tech'
import Contact from '../components/contact'
import MessageSidePanel from '../components/message-panel'

export default function Home () {
  return (
    <>
      <Head>
        <title>Piotr Wiśniewski</title>
      </Head>
      <ScrollBar />
      <MessageSidePanel />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Contact />
    </>
  )
}
