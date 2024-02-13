import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <nav>
                <div className="flex flex-col md:flex-row p-2 container mx-auto 
                    lg:max-w-screen-lg justify-between md:items-center"
                >
                    <div className="mt-1 flex space-x-2">
                        <Link href="/" className="text-neutral-900 dark:text-neutral-100 font-bold text-4xl font-square-peg">
                        🏓 AleBlog
                        </Link>
                        <button onClick={() => theme == 'dark' ? setTheme('light') : setTheme('dark')}>
                            {theme == 'dark' ? (
                                <Image className="my-auto" src="/images/light.svg" width={20} height={20}/>
                                ): (
                                <Image className="my-auto" src="/images/dark.svg" width={20} height={20}/>
                                )
                            }
                        </button>
                    </div>
                    <div className="mt-2 md:m-2 md:p-4 space-x-4 md:text-center">
                        <Link 
                            href="/Projects" 
                            className="text-neutral-900 font-bold hover:underline
                            hover:text-blue-600 font-nunito dark:text-neutral-100 dark:hover:text-blue-300">
                                Projects
                        </Link>
                        <Link 
                            href="/About" 
                            className="text-neutral-900 font-bold hover:underline
                            hover:text-blue-600 font-nunito dark:text-neutral-100 dark:hover:text-blue-300">
                            About
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
