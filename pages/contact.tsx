import Head from "next/head"
import Header from "../components/Header"
import Link from "next/link"

const contact = () => {
  return (
    <div className="max-w-7xl">
      <Head>
        <title>Contact - AI For Cause</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex justify-between items-center bg-ai-logo-black border-y border-black py-10 lg:py-0 h-screen xl:w-fit">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl text-ai-logo-text max-w-xl font-mono">
            How can I help?
          </h1>
          <h1 className="text-4xl text-ai-logo-text max-w-xl font-mono">
            AI for <span className="text-ai-logo-header-yellow">cause </span>
            is an initiative to explore the endless possibilities with the help
            of AI.
          </h1>
          <h2 className="text-4xl text-ai-logo-text max-w-xl font-mono">
            Whether you’re interested in featuring any cause/case-study, you
            want to give any feedback, or you just want to chat, send me a
            message. I’d love to connect!
          </h2>
          <h2 className="text-4xl text-ai-logo-text max-w-xl font-mono">
            Feel free to drop me an email at{" "}
            <Link href="mailto: abc@example.com">
              <span className="text-ai-logo-header-yellow">
                aiforcause@gmail.com
              </span>
            </Link>
          </h2>
        </div>
        {/* img should be less than 10kb */}
        <img
          className="hidden md:inline-flex h-32 lg:h-auto"
          src="/Ai-min.png"
          alt="logo img"
        />
      </div>
    </div>
  )
}

export default contact
