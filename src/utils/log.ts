const isLog = () => {
  if (process.env.NODE_ENV === 'production') {
    return false;
  }
  return true;
};

export const info = (message?: any, ...optionalParams: any[]) => {
  if (!isLog) {
    return;
  }
  console.info(message, ...optionalParams);
};

export const error = (message?: any, ...optionalParams: any[]) => {
  if (!isLog) {
    return;
  }
  console.error(message, ...optionalParams);
};
