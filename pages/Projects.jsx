import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Projects() {
    return (
        <div className="bg-background min-h-screen">
            <Head>
                <title>My projects</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
            </Head>

            <Navbar/>

            <main className="mx-auto px-5 lg:max-w-screen-md">
                <div className="m-2 p-4">
                    <h1 className="prose text-5xl text-center text-gray-100 font-bebasNue">Projects</h1>
                </div>
                <div>
                    <h1 className="text-2xl text-center text-gray-100 font-bold">
                        There is no projects for now :(
                    </h1>
                </div>
            </main>
            <Footer/>

        </div>
    );
}