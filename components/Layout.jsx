
import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from 'next/head';
import Date from '../components/Date';


export default function Layout({ children, meta }) {

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}/>
        <meta name="author" content="Alexis Fraudita" />
        <meta name="keywords" content={meta.keywords}/>

				<meta property="title" content={meta.title} />
        <meta property="url" content={`https://alefram.github.io/posts/${meta.title}`} />
        <meta property="type" content="website" />
        <meta 
          name="viewport" 
          content="initial-scale=1.0, width=device-width" 
          key="viewport" 
        />
        <meta name="robots" content="index, follow"/>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={`https://alefram.github.io/posts/${meta.title}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={meta.title}/>
        <meta property="og:description" content={meta.description}/>
        <meta property="og:image" content="🏓"/>
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_short_image"/>
        <meta property="twitter:domain" content="alefram.github.io"/>
        <meta property="twitter:url" content={`https://alefram.github.io/posts/${meta.title}`}/>
        <meta name="twitter:title" content={meta.title}/>
        <meta name="twitter:description" content={meta.description}/>
        <meta name="twitter:image" content="🏓"/> 
      </Head>
      <Navbar />
      <main className="container mx-auto px-2 lg:px-0 lg:max-w-screen-md mt-10 content-center">
        <div>
          <h1
            className=" text-3xl font-sans font-bold text-background lg:text-4xl">
            {meta.title}
          </h1>
          <small className="mt-1 text-gray-500 md:text-lg">
            <Date dateString={meta.date} />
          </small>
        </div>
        <div className="prose prose-lg prose-p:text-base mt-4 font-nunito 
					markdown prose-p:text-gray-900 prose-h2:text-background">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}


