import Image from 'next/image'
export default function Home() {
  return (
    <main className="">
      <div className="introduction-container">
        <div className="text-container">
          <h1>
            <div className="basic-text">Hi, I'm</div>
            <div className="name-text">Hunter Weisner</div>
            <div className="basic-text">A Software Developer</div>
          </h1>
        </div>
        <div className="headshot-container">
          <img src="/hunter-weisner-headshot-cold.png" alt="Photo of Hunter Weisner" />
        </div>
      </div>
    </main>
  )
}
