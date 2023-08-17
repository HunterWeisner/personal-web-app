'use client';
import Header from './header'
import AboutSection from './about'
import More_information from './more_information'
export default function Home() {
  return (
    <main className="bg-gray-800 h-full w-full">
      {Header()}
      {AboutSection()}
      {More_information()}
    </main>
  )
}
