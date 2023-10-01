import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen py-8 flex flex-col justify-center gap-2 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-[141414] text-[2.5rem]  font-bold md:text-[3.5rem]">
          Show Them Don't Just Tell
        </h1>
        <h4 className="text-[#000000BF]">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </h4>

        <button className="bg-primary text-white flex items-center gap-3 p-3 mt-10 w-fit rounded-md">
          Install HelpMeOut
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.91699 10.5H16.942"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <Image
          src="/hero-image.png"
          alt="Hero image"
          width={600}
          height={400}
          className="w-full"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
