import Link from 'next/link';
import { BurgerMenu } from './BurgerMenu';
import  {ButtonIndigo} from './ButtonIndigo';

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
          <ButtonIndigo buttonText='Sign In'/>
        </div>
      </div>
    </header>
  );
};

export { Header };
