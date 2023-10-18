'use client';
import Link from 'next/link';
import { BurgerMenu } from './BurgerMenu';
import  {ButtonIndigo} from './ButtonIndigo';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {

  const session = useSession();

  console.log(session)

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
          {session?.data &&  <Link href="/favorites" className="transition-colors hover:text-indigo-500 duration-500">
            Favorites
          </Link>}
        </nav>

        <div className="md:hidden">
          <BurgerMenu />
        </div>

        <div className="hidden md:block">
          {session?.data ? <Link href="#" className="transition-colors hover:text-indigo-500 duration-500 text-white" onClick={() => signOut({callbackUrl: '/'})} >
            Sign Out
          </Link> : <Link href="/api/auth/signin" className="transition-colors hover:text-indigo-500 duration-500 text-white" >
            Sign In
          </Link>}
        </div>
      </div>
    </header>
  );
};

export { Header };
