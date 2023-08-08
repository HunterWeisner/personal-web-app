import Image from 'next/image'
import Header from './header'
import AboutSection from './about'
export default function Home() {
  return (
    <main className="bg-gray-800 h-full w-full">
      {Header()}
      {AboutSection()}
    </main>
  )
}
