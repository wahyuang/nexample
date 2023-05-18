import dynamic from "next/dynamic";

import type { Block } from "@/types/api/block";
import type { Hero as HeroType } from "@/types/api/blocks/hero";
import type { BasicTextType } from "@/types/api/blocks/basic-text";
import type { InlineLogoBlock } from "@/types/api/blocks/inline-logo";
import type { NewsletterBlock } from "@/types/api/blocks/newsletter";
import type { CarouselReviewBlock } from "@/types/api/blocks/carousel-review";

import { formatImage } from "@/utils/formatImage";

export default function BlockGenerator(block: Block) {
  const { id, __component: name } = block;
  const key = name.replace(`.`, `-`) + `_` + id;

  switch (name) {
    case `blocks.hero`: {
      const dataBlock = block as HeroType;

      const Hero = dynamic(() => import(`@/blocks/hero`));

      const heroImage = dataBlock.media_image.data
        ? formatImage(dataBlock.media_image.data)
        : undefined;

      return (
        <Hero
          title={dataBlock.title}
          content={dataBlock.content}
          image={heroImage}
          key={key}
        />
      );
    }

    case `blocks.basic-text`: {
      const dataBlock = block as BasicTextType;

      const BasicText = dynamic(() => import("@/blocks/simple-text"));

      const ctaButton = dataBlock.cta_button;

      const cta =
        ctaButton !== null
          ? {
              title: ctaButton.title,
              url: ctaButton.url,
              target: ctaButton.new_window ? "_blank" : undefined,
            }
          : undefined;

      return (
        <BasicText
          title={dataBlock.title}
          content={dataBlock.content}
          cta={cta}
          key={key}
        />
      );
    }

    case `blocks.inline-logo`: {
      const dataBlock = block as InlineLogoBlock;

      const InlineLogo = dynamic(() => import("@/blocks/inline-logo"));

      const logos = dataBlock.logo_gallery.data;

      const images = logos ? logos.map((logo) => formatImage(logo)) : undefined;

      return <InlineLogo title={dataBlock.title} images={images} key={key} />;
    }

    case `blocks.carousel-review`: {
      const dataBlock = block as CarouselReviewBlock;

      const SectionReview = dynamic(() => import("@/blocks/testimonial"));

      const reviews = dataBlock.reviews
        ? dataBlock.reviews.map((review) => ({
            author: review.author,
            content: review.content,
          }))
        : [];

      return (
        <SectionReview title={dataBlock.title} reviews={reviews} key={key} />
      );
    }

    case `blocks.newsletter`: {
      const dataBlock = block as NewsletterBlock;

      const SectionNewsletter = dynamic(() => import("@/blocks/newsletter"));

      return (
        <SectionNewsletter
          title={dataBlock.title}
          content={dataBlock.content}
          key={key}
        />
      );
    }

    default: {
      return <p>component {name} is being develop</p>;
    }
  }
}
