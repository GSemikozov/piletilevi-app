export const spliceIntoChunks = (arr: any[], chunkSize: number) => {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.push(chunk);
  }
  return res;
};
