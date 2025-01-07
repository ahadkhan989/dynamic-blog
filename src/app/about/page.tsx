import Image from "next/image";
export default function About() {
  return (
    <main className="bg-[#DDD0C8] flex-grow container mx-auto px-4 py-6 my-16 rounded-lg">
      <div className="flex justify-between">
        <div className="w-[700px]">
          <h1 className="text-[#323232] font-bold text-5xl mt-24 px-5">
            The KHAN BLOGS Story
          </h1>
          <p className="mt-6 pl-10 pr-9 text-justify font-serif leading-[o.2px] tracking-[1]">
            Khan Blogs was founded by [Ahad Khan] in [2022].I have been a software
            engineer for 2 years, I have traveled to over 30 countries, I am a
            self-taught chef.I started this blog because I wanted to share my
            passion for Web 3.0, Generative AI and Metaverse, I believe that
            everyone should have the opportunity to make their dreams comes true
            and get success in their life, I am always looking for new ways to
            teach people about Internet of things (IoT), Artificial Intelligence
            (AI) and their core principles. We are passionate about [Rise of AI]
            and dedicated to providing our readers with accurate information,
            engaging content and helpful resources.
          </p>
        </div>
        <div className="w-[500px] hidden md:inline justify-center items-center">
          <Image
            className="bg-lime-50 rounded-2xl"
            src="/about-img.jpg"
            alt="about-image"
            width={550}
            height={550}
          />
        </div>
      </div>
      <div className="mt-14 px-5">
        <h3 className="tex[#323232]] font-semibold text-3xl">Who Are We ?</h3>
        <p className="text-gray-500 text-xl leading-[o.2px] tracking-[2]">
          A space dedicated to exploring the fascinating world of Artificial
          Intelligence.
        </p>
        <p className="text-gray-500 text-xl leading-[o.2px] tracking-[2] mb-3">
          Our mission is to provide insightful articles and practical skills
          that helps you in your everyday work
        </p>
        <p className="text-xl leading-[o.2px] text-gray-800">
          We are a fast-growing company, but we have never lost sight of our
          core values. We believe in collaboration, innovation, and customer
          satisfaction. We are always looking for new ways to improve our
          products and services.
        </p>
      </div>

      <div className="mt-20 px-5">
        <h3 className="text-[#323232] font-semibold text-3xl mb-2">
          What we offer
        </h3>
        <ul className="text-lg tracking-[1] leading-[o.2px] pl-4 text-gray-800">
          <li>
            In-depth articles on the latest AI breakthroughs and their potential
            impacts.
          </li>
          <li>Interviews with leading AI researchers and innovators.</li>
          <li>
            Practical guides and tutorials for implementing AI in various
            industries.
          </li>
          <li>
            Ethical discussions surrounding the development and deployment of AI
            technologies.
          </li>
          <li>
            News and updates from major AI conferences and events worldwide.
          </li>
        </ul>
      </div>
      <div className="mt-20 px-5">
        <h3 className="text-[#323232] font-semibold text-3xl">
          Our Commitment
        </h3>
        <p className="leading-[o.2px] tracking-[2] text-justify font-serif text-gray-800 mb-14">
          We are committed to providing accurate, unbiased, and accessible
          information about AI. Our goal is foster a community of informed
          individuals who can critically engage with AI technologies and
          contribute to shaping the future of this rapidly evolving field.
          <br />
          Join us on this exciting journey as we explore the frontiers of
          Artificial Intelligence and its potential to transform our world.
        </p>
      </div>
    </main>
  );
}
