import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className="py-12 prose-lg">
                <div className="flex justify-center space-x-4 mt-4">
                    <Link href="https://github.com/Alexfm101">
                        <a>
                            <img alt="githubFooter" src="/images/github.png" className="w-8"/>
                        </a>
                    </Link>
                    <Link href="https://twitter.com/FrauditaAlexis">
                        <a>
                            <img alt="twitterFooter" src="/images/twitter.png" className="w-8"/>                    
                        </a>
                    </Link>
                </div>
                <div className="text-center text-lg text-text text-gray-100">
                    <small>
                        Make with &#128153; deploy on <Link href="https://vercel.com/"><a className="font-bold text-supertext">Vercel</a></Link>
                    </small> 
                </div>
            </footer>
            {/* <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div> */}
        </>
    );
};

export default Footer;