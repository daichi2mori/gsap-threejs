import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-5 md:px-6 border-b border-gray-200 dark:border-gray-800 w-full">
      <Link href="/" className="flex items-center">
        Home
      </Link>
      <nav className="hidden space-x-4 md:flex">
        <Link href="/gsap" className="font-medium hover:underline underline-offset-4">
          Gsap
        </Link>
        <Link href="/apple" className="font-medium hover:underline underline-offset-4">
          Apple
        </Link>
      </nav>
    </header>
  );
};

export default Header;
