import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-gray-400 p-4 min-h-[100px] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-white mb-2">
          <Link href="/">Softzap</Link>
        </h1>

        <nav className="flex-1">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-gray-300 font-semibold text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="hover:text-gray-300 font-semibold text-lg"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-gray-300 font-semibold text-lg"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-gray-300 font-semibold text-lg"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-3">
          <Link href="/get-started">
            <button className="bg-white hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
