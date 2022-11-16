import Link from "next/link"
import NextImage from 'next/image'

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-8">
        <Link href="/">
          <img 
          className="w-44 object-contain cursor-pointer" 
          src="/logoT.png"
          alt="" />
        </Link>
        <div className="hidden md:inline-flex
        items-center space-x-10">
          <h3>About</h3>
          <h3>Contact</h3>
          
        </div>
      </div>
      
      <div className="flex items-center space-x-5 ">
        <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            <Link href="https://github.com/warlock-spell">
              GitHub
            </Link>
        </h3>
        <h3 className="text-green-600 px-4 py-1 rounded-full border-green-600">
            <Link href="https://daksh.wiki/">
              Other Links
            </Link>
        </h3>

      </div>
    </header>
  )
}

export default Header