import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();  

    return (
        <>
            <footer className="py-12">
                <div className="flex justify-center space-x-4 mt-4">
                    <Link href="https://github.com/alefram">
                        <img 
                            alt="githubFooter" 
                            src="/images/github.svg" 
                            className="w-8"
                        />
                    </Link>
                    <Link href="https://twitter.com/FrauditaAlexis">
                        <img 
                            alt="twitterFooter" 
                            src="/images/twitter.svg" 
                            className="w-8"
                        />                    
                    </Link>
                </div>
                <div className="text-center text-lg text-neutral-950 dark:text-gray-100">
                    <small>
                        Make with &#128153; &copy;{currentYear} All rights 
                        reserved
                    </small> 
                </div>
            </footer>
            {/* <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div> */}
        </>
    );
};

export default Footer;
