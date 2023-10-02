import Image from "next/image";

const Demo = () => {
  return (
    <section className="py-16 flex flex-col gap-8 text-center">
      <h2 className="text-[141414] font-bold text-3xl mb-4">How it works</h2>

      <section className="grid grid-cols-16 gap-8">
        <div className="flex flex-col gap-4 justify-center">
          <Image
            src="/one-icon.png"
            alt="Number one icon"
            width={20}
            height={20}
            className="w-12 mx-auto"
          />
          <h4 className="font-[600] text-[#1B233D]">Record Screen</h4>
          <p className="text-gray">
            Click the `&quot;Start Recording`&quot; button in our extension.
            choose which part of your screen to capture and who you want to send
            it to.
          </p>
          <Image
            src="/record-image.png"
            alt="Record screen image"
            width={300}
            height={200}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <Image
            src="/two-icon.png"
            alt="Number one icon"
            width={20}
            height={20}
            className="w-12 mx-auto"
          />
          <h4 className="font-[600] text-[#1B233D]">Share Your Recording</h4>
          <p className="text-gray">
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
          <Image
            src="/record-image.png"
            alt="Record screen image"
            width={300}
            height={200}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <Image
            src="/three-icon.png"
            alt="Number one icon"
            width={20}
            height={20}
            className="w-12 mx-auto"
          />
          <h4 className="font-[600] text-[#1B233D]">Learn Effortlessly</h4>
          <p className="text-gray">
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
          <Image
            src="/record-image.png"
            alt="Record screen image"
            width={300}
            height={200}
            className="w-full"
          />
        </div>
      </section>
    </section>
  );
};

export default Demo;
