import Image from "next/image";

const Features = () => {
  return (
    <section className="py-16">
      <section>
        <h2 className="text-3xl text-[141414] text-center">Features</h2>
        <p className="text-gray text-center">Key Highlights of Our Extension</p>
      </section>

      <section className="mt-8 py-4 flex flex-col gap-8 md:flex-row">
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-4 items-start">
            <Image
              src="/record-icon.png"
              alt="Recording icon"
              width={20}
              height={20}
              className="w-8"
            />
            <div>
              <h4 className="text-[#1B233D] font-[600]">
                Simple Screen Recording
              </h4>
              <p className="text-gray">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Image
              src="/send-icon.png"
              alt="Send icon"
              width={20}
              height={20}
              className="w-8"
            />
            <div>
              <h4 className="text-[#1B233D] font-[600]">Easy-to-Share URL</h4>
              <p className="text-gray">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Image
              src="/revisit-icon.png"
              alt="Send icon"
              width={20}
              height={20}
              className="w-8"
            />
            <div>
              <h4 className="text-[#1B233D] font-[600]">Revisit Recordings</h4>
              <p className="text-gray">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/features-image.png"
            alt="Key highlights image of our extension"
            width={600}
            height={400}
            className="w-full"
          />
        </div>
      </section>
    </section>
  );
};

export default Features;
