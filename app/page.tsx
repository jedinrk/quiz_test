import Image from 'next/image'
import Header from './components/Header/Header'
import NavBar from './components/Navbar/NavBar'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <h1>
        Hello World!
      </h1>
    </main>
  )
}
