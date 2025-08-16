const getCroppedImageUrl = (url: string | null) => {
  const width = 600;
  const height = 400;

  return (
    url?.slice(0, url.indexOf("/games")) +
    "/crop/" +
    width +
    "/" +
    height +
    url?.slice(url?.indexOf("/games"))
  );
};

export default getCroppedImageUrl;
