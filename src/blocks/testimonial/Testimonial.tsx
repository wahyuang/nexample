"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { RiDoubleQuotesL } from "react-icons/ri";
import "swiper/css";

type CardReviewProps = {
  author?: string;
  content: string;
};

const CardTestimonial = ({ author, content }: CardReviewProps) => {
  return (
    <div className="relative px-2 pt-4 pb-10 md:px-4">
      <div className="p-6 bg-white border border-solid rounded-md shadow-md md:shadow-lg border-gray-50">
        {content && (
          <div className="relative pl-8">
            <div className="absolute top-0 left-0 text-2xl text-sky-500">
              <RiDoubleQuotesL />
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}

        {author && (
          <div className="text-sm font-bold text-sky-500">
            <i>{author}</i>
          </div>
        )}
      </div>
    </div>
  );
};

type SectionReviewProps = {
  title: string;
  reviews: CardReviewProps[];
};

export const Testimonial = ({ title, reviews }: SectionReviewProps) => {
  return (
    <section className="py-12">
      <div>
        {title && (
          <h2
            className="text-3xl font-bold text-center text-sky-500"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
      </div>
      <div className="mt-12">
        {reviews && (
          <Swiper
            slidesPerView={1.2}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={700}
            modules={[Autoplay]}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <CardTestimonial
                  author={review.author}
                  content={review.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
