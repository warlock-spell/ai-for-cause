import Link from "next/link"
import NextImage from 'next/image'

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <img 
          className="w-44 object-contain cursor-pointer" 
          src="/logoT.png"
          alt="" />
        </Link>
      </div>
      <div></div>
    </header>
  )
}

export default Header