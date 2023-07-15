import Link from "next/link"
import NextImage from "next/image"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-8">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/logoT.png"
            alt=""
          />
        </Link>
        <div
          className="hidden md:inline-flex
        items-center space-x-10"
        >
          <Link href="www.daksh.fyi">
            <h3>About Me</h3>
          </Link>
          <Link href="/contact">
            <h3>Contact</h3>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-5 ">
        <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
          <Link href="https://github.com/warlock-spell">GitHub</Link>
        </h3>
        <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
          <Link href="https://projects.dakshgaur.com/">Projects</Link>
        </h3>
      </div>
    </header>
  )
}

export default Header
