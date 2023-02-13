import { ButtonSolid } from "@/components/buttons";
import Image from "next/image";

const CardMediaText = () => {
  return (
    <div className="flex flex-wrap items-center justify-between even:flex-row-reverse">
      <div className="w-full md:w-1/2 ">
        <div className="relative w-full overflow-hidden rounded-md bg-sky-500">
          <div className="block pt-[72%]"></div>
          <Image
            src={`/images/hero-home.jpg`}
            className="absolute top-0 left-0 object-cover w-full h-full"
            alt="Card Image"
            fill
          />
        </div>
      </div>
      <div className="w-full pt-5 md:w-2/5 md:pt-0">
        <div>
          <h3 className="text-xl font-bold text-sky-500">
            Lorem ipsum dolor sit.
          </h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam
            quo labore eius eos fugit nihil tempora exercitationem voluptas
            consequatur.
          </p>
        </div>
        <div className="mt-5">
          <ButtonSolid className="text-white bg-sky-500">Read more</ButtonSolid>
        </div>
      </div>
    </div>
  );
};

export const MediaText = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div>
            <h2 className="text-3xl font-bold text-center text-sky-500">
              Lorem Ipsum Dolor.
            </h2>
          </div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
              <br />
              Quia ipsam impedit odit iure, omnis magnam soluta repellendus
              distinctio tempora nisi.
            </p>
          </div>
        </div>
        <div className="space-y-24">
          {[...Array(2)].map((index) => {
            return <CardMediaText key={`card-media-text-${index}`} />;
          })}
        </div>
      </div>
    </section>
  );
};
