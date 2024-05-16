export const required = (value: string) => {
  if (value) return undefined;

  return "Field id required";
};

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;

  return undefined;
};

/*export const required = (value) => {
  if (value) return undefined;

  return undefined;
};*/
