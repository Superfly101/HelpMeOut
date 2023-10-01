import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="flex px-8 py-4 justify-between items-center md:px-4">
        <div className="flex gap-2 items-center">
          <Image
            src="/logo.svg"
            alt="HelpMeOut logo"
            width="100"
            height="50"
            className="w-8"
          />
          <h3>HelpMeOut</h3>
        </div>

        <div className="gap-8 hidden md:flex">
          <Link href="/">Features</Link>
          <Link href="/">How it works</Link>
        </div>

        <div>
          <h2 className="text-primary">Get Started</h2>
        </div>
      </nav>
    </header>
  );
};

export default Header;
