import Head from 'next/head';
import Footer from '../components/Footer';

export default function ManualCI() {

    return (
        <div> 
            <Head>
                <title>Manual Tesis</title>
                <meta 
                    name="description" 
                    content="Here There are my projects about Machine Learning, 
                    Robotics and Electronics that are my personal portfolio" 
                />
                <meta name="author" content="Alexis Fraudita"/>
                <meta 
                    name="keywords" 
                    content="Machine Learning, Robotics, Electronics, 
                    Reinforcement Learning, Blog, Portfolio, Alexis, Fraudita, 
                    Alexis Fraudita, Python, Pytorch"
                />
                <meta 
                    property="og:title" 
                    content="Projects | Alexis Fraudita" 
                />
                <meta 
                    property="og:description" 
                    content="Here There are my projects about Machine Learning, 
                    Robotics and Electronics that are my personal portfolio" 
                />
                <meta 
                    property="og:url" 
                    content="https://alexfm101.github.io/ManualCI" 
                />
                <meta property="og:type" content="website" />
                <meta 
                    name="viewport" 
                    content="initial-scale=1.0, width=device-width" 
                    key="viewport" 
                />
            </Head>


            <main className="mx-auto md:px-8 lg:max-w-screen-lg mt-10">
                <div className='text-center'>
                    <h1 className=' text-5xl font-bold text-gray-800 md:text-7xl'>Manual TEG</h1>
                    <h3 className=' text-gray-500 font-medium md:text-xl mt-1'>Manual guía 
                        para el diseño de controladores inteligentes basados 
                        aprendizaje por refuerzo
                    </h3>   

                </div>
                

            </main>
            
            <Footer/>
        </div>
    );
}



