'use client';
import Header from '../../public/page_sections/home_header'
import AboutSection from '../../public/page_sections/home_about'
import More_information from '../../public/page_sections/more_information'
export default function Home() {
  return (
    <main className="bg-gray-800 h-full w-full">
      {Header()}
      {AboutSection()}
      {More_information()}
    </main>
  )
}
