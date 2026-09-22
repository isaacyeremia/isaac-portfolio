// GitHub Pages serves this site from /isaac-portfolio, so plain <img>/<a> tags
// referencing files in /public need this prefix. next/image and next/link
// handle basePath automatically and don't need it.
export const basePath =
  process.env.NODE_ENV === "production" ? "/isaac-portfolio" : "";
