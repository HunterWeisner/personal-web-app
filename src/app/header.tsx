import Image from 'next/image'
export default function Header() {
  return (
    <div className="content-center flex">
        <div className="w-2/3 inline-block m-auto">
            <h1 className='mr-3 ml-5'>
            <div className="text-white text-xl mt-2"><p>Hi, I'm</p></div>
            <div className="bg-teal-400 text-gray-800 rounded-2xl font-extrabold text-2xl text-center w-fit pl-3 pr-3 -ml-3 -mr-3 mt-2">Hunter Weisner</div>
            <div className="text-white text-xl mt-2"><p>A Software Developer</p></div>
            </h1>
        </div>
        <div className="w-1/3 inline-block center m-3">
            <img className='rounded-md' src="/hunter-weisner-headshot-cold.png" alt="" />
        </div>
    </div>
  )
}
