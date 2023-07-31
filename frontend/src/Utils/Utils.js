// Data url to base64
export const dataUrlToBase64 = (imageUrl) => {
  const base64 = imageUrl.split(";base64,")[1];
  return base64;
};
