export const truncate = (input: string) =>
  input.length > 5
    ? `${input.slice(0, 5)}...${input.slice(input.length - 5, input.length)}`
    : input;

export const safelyParseJSON = (json: string) => {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.log({ err });
  }
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
