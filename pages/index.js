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
      
      <main className="mx-2">

        <div className='text-center mt-10 mb-10'>
          <h1 className="text-4xl ml-4 mb-2 text-gray-800"> Who I am ?</h1>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A inventore voluptate explicabo voluptatibus, dolore reiciendis tempore totam eveniet assumenda sint in ipsam blanditiis porro fuga harum rerum neque id tempora!</p>
        </div>

        <div>
          <h1>Education</h1>

          <ul>
            <li>Electrical engineer student at Central University of Venezuela</li>
            <li></li>
          </ul>

          <h1>Interested</h1>
        </div>

        
        
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
