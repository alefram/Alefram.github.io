import Head from 'next/head';
import Navbar from '../components/Navbar'
import ArticleList from '../components/ArticleList'

function Articles() {
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
                <div className="mt-6 text-center">
                    <h1 className="text-4xl ml-4 mb-2 font-semibold text-gray-900">My Articles</h1>
                </div>

                <ArticleList/>
            </main>


            <footer className="">

            </footer>
        </div>
    );
}
  
export default Articles