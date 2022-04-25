import Image from "next/image";

const About = () => {
  return (
    <main>
      about
      <Image
        src={"/assest/4.jpeg"}
        width="280"
        height="480"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="/assest/4.jpeg"
      />
      {/* <Image /> */}
    </main>
  );
};

export default About;
