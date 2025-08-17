import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string | null) => {
  const width = 600;
  const height = 400;

  if (!url) return noImage;
  if (url.indexOf("screenshot") !== -1) return url;

  return (
    url.slice(0, url.indexOf("/games")) +
    "/crop/" +
    width +
    "/" +
    height +
    url.slice(url.indexOf("/games"))
  );
};

export default getCroppedImageUrl;
