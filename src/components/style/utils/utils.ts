const calculateWidth = (width: any, media: any) => {
  if (width?.[media]) {
    return width[media];
  } else if (typeof width === 'string') {
    return width;
  }
  return false;
};

export { calculateWidth };
