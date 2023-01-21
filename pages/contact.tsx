import Head from "next/head"
import Header from "../components/Header"
import Link from "next/link"

const contact = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Contact - AI For Cause</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row justify-between items-center py-10 h-screen mx-auto">
        <div className="px-10 space-y-5 text-center">
          <h1 className="sm:text-2xl text-4xl font-medium">How can I help?</h1>
          <p className="text-lg leading-relaxed">
            AI for cause is an initiative to explore the endless possibilities
            with the help of AI.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you’re interested in featuring any cause/case-study, you
            want to give any feedback, or you just want to chat, send me a
            message. I’d love to connect!
          </p>
          <p className="text-lg leading-relaxed">
            Feel free to drop me an email at{" "}
            <Link href="mailto: aiforcause@gmail.com">
              <span className="text-primary">aiforcause@gmail.com</span>
            </Link>
          </p>
          <a
            href="mailto: aiforcause@gmail.com"
            className="bg-primary text-white text-lg px-4 py-2 rounded-lg hover:bg-primary-dark"
          >
            Contact Us
          </a>
        </div>
        <img className="lg:ml-5 md:ml-0" src="/Ai-min.png" alt="logo img" />
      </div>
    </div>
  )
}

export default contact
