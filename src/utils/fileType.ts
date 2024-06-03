export const fileType = (url: string) => {
  const regex = /\.([0-9a-z]+)(?:[\?#]|$)/i;

  const match = url.match(regex);
  if (match) {
    const extension = match[1];
    return extension;
  } else {
    return null;
  }
};
