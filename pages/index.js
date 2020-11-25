import Head from 'next/head';
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ale Ale Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="pt-2">
        <Navbar/>     
      </nav>
      
      <main>

        <h1 className="text-4xl mt-20 ml-4 text-gray-800"> Who I am ?</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A inventore voluptate explicabo voluptatibus, dolore reiciendis tempore totam eveniet assumenda sint in ipsam blanditiis porro fuga harum rerum neque id tempora!</p>
        
        
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
