export const parseHash = (hash: string) => {
  const regExp = /[^a-z]/g;
  return hash.replace(regExp, '');
};
