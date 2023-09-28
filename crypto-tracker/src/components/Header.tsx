import Link from 'next/link';
import { BurgerMenu } from './BurgerMenu';

const Header = () => {
  return (
    <header className="bg-custom-main py-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Your Logo</Link>
        </div>

        <nav className="hidden md:flex space-x-4 text-white text-lg font-blinker font-regular">
          <Link href="/" className="transition-colors hover:text-indigo-500 duration-500">
            Home
          </Link>
          <Link href="/contact" className="transition-colors hover:text-indigo-500 duration-500">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <BurgerMenu />
        </div>

        <div className="hidden md:block">
          <button className="text-white transition-colors hover:bg-indigo-500 duration-500 text-lg px-4 py-2 rounded-full border-solid border border-gray-400">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
