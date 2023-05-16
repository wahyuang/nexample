import { Media } from "@/types/api/media";
import { ImageType } from "@/types/common";

const STRAPI_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export function formatImage(strapiImage: Media) {
  const { alternativeText, formats, width, height, url, placeholder } =
    strapiImage.attributes;

  const res: ImageType = {
    url: STRAPI_URL + url,
    width: width,
    height: height,
    alt: alternativeText,
    placeholder,
  };

  if (formats) {
    res.width = formats.large ? formats.large.width : width;
    res.height = formats.large ? formats.large.height : height;
  }

  if (formats.large) {
    res.url = STRAPI_URL + formats.large.url;
  }

  return res;
}
