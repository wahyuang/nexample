export type MediaFormats = {
  ext: string;
  url: string;
  width: number;
  height: number;
};

export type Media = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    placeholder: string;
    url: string;
    formats: {
      large: MediaFormats;
      medium: MediaFormats;
      small: MediaFormats;
      thumbnail: MediaFormats;
    };
  };
};
