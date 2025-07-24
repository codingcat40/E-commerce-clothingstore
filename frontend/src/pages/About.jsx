import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10  flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born as a passion and the desire to revolutionaize the
            way people shop online. Our journey began as the idea of providing
            the platform where customers can easily discover, explore and
            purchase wide range of products from the comforts of their place.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id
            aliquid commodi pariatur molestiae ab ipsa reprehenderit minima
            aspernatur necessitatibus, earum adipisci repellat exercitationem
            iste sit qui vero voluptatibus quos?
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            ullam quas molestias minus impedit illo voluptatum sapiente nam
            ipsam officia laborum, optio blanditiis eaque facere atque hic. Ut,
            quod fugiat?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We select and vet each product to ensure it meets our stringent
            quality standards.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring to solve all the problems and issues of our customers.</p>
        </div>
      </div>

      <NewsLetterBox />
      
    </div>
  );
};

export default About;
