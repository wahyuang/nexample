import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { RiDoubleQuotesL } from "react-icons/ri";
import "swiper/css";

const CardTestimonial = () => {
  return (
    <div className="relative px-2 pt-4 pb-10 md:px-4">
      <div className="p-6 bg-white border border-solid rounded-md shadow-md md:shadow-lg border-gray-50">
        <div className="relative pl-8">
          <div className="absolute top-0 left-0 text-2xl text-sky-500">
            <RiDoubleQuotesL />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum illo
            veniam, id similique omnis dolore hic magni vel alias. Deserunt.
          </p>
        </div>
        <div className="text-sm font-bold text-sky-500">
          <i>John Doe</i>
        </div>
      </div>
    </div>
  );
};

export const Testimonial = () => {
  return (
    <section className="py-12">
      <div>
        <h2 className="text-3xl font-bold text-center text-sky-500">
          What People Say About Us
        </h2>
      </div>
      <div className="mt-12">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={0}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {[...Array(10)].map((index) => {
            return (
              <SwiperSlide key={index}>
                <CardTestimonial />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
