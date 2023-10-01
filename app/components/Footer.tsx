import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-4 py-16 grid grid-cols-2 gap-12 text-white lg:grid-cols-4 bg-primary md:px-16">
      <section className="flex gap-2 items-start">
        <Image
          src="/footer-icon.png"
          alt="HelpMeOut logo"
          width={20}
          height={20}
          className="w-8"
        />
        <h4 className="font-[700] text-white">HelpMeOut</h4>
      </section>

      <section>
        <h2 className="font-[600] mb-4">Menu</h2>
        <ul className="flex flex-col gap-2">
          <li>Home</li>
          <li>Converter</li>
          <li>How it works</li>
        </ul>
      </section>

      <section>
        <h2 className="font-[600] mb-4">About us</h2>
        <ul className="flex flex-col gap-2">
          <li>About</li>
          <li>Contact us</li>
          <li>Privacy Policy</li>
        </ul>
      </section>

      <section>
        <h2 className="font-[600] mb-4">Screen Record</h2>
        <ul className="flex flex-col gap-2">
          <li>Browser Window</li>
          <li>Desktop</li>
          <li>Application</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
