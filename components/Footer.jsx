import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className="py-12 mt-60">
                <div className="flex justify-center space-x-4 mt-4">
                    <Link href="https://github.com/Alexfm101">
                        <a>
                            <Image
                                src="/images/github.png"
                                width={30}
                                height={30}
                            />
                        </a> 
                    </Link>
                    <Link href="https://twitter.com/FrauditaAlexis">
                        <a>
                            <Image
                                src="/images/twitter.png"
                                width={30}
                                height={30}
                            />
                        </a> 
                    </Link>
                </div>
                <div className="text-center mt-1 text-lg text-gray-600">
                    <small>
                        Make with &#128153; and <Link href="https://tailwindcss.com/"><a className="font-bold text-text">Tailwindcss</a></Link> and deploy on <Link href="https://vercel.com/"><a className="font-bold text-text">Vercel</a></Link>
                    </small> 
                </div>
            </div>
        </>
    );
};

export default Footer;