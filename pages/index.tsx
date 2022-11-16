import Head from 'next/head'
import Header from "../components/Header"

export default function Home(){
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>AI For Cause</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-ai-logo-black border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl text-ai-logo-text max-w-xl font-mono'>AI for <span className='text-ai-logo-header-yellow'>cause</span> - Exploring Endless Possibilities With AI.</h1>
        <h2 className='text-ai-logo-text'>Making a difference with Artificial Intelligence.</h2>
        </div>
        
        <img 
        className='hidden md:inline-flex h-32 lg:h-full'
        src="/AI_4.png" alt="logo img" />

      </div>

      {/* Posts */}
    </div>
  )
}

