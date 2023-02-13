export interface Media {
  node: {
    title: string;
    sourceUrl: string;
    sizes: string;
    mediaDetails: {
      width: number;
      height: number;
    };
  };
}
