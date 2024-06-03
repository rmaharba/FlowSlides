import {SlidesArray} from './types';

export const sliderDataMapper = (obj: any): SlidesArray => {
  const result: any[] = [];
  const slideRegex = /^slide(\d+)([A-Z].*)$/;

  for (const [key, value] of Object.entries(obj)) {
    const match = key.match(slideRegex);
    if (match) {
      const slideNumber = parseInt(match[1], 10);
      const propertyName = match[2].charAt(0).toLowerCase() + match[2].slice(1);
      if (!result[slideNumber - 1]) {
        result[slideNumber - 1] = {};
      }
      result[slideNumber - 1][propertyName] = value;
    }
  }

  return result;
};
