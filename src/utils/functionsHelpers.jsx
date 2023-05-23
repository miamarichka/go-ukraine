/** @format */

export function cutTextDesc(text) {
  const shortedText = text.length > 270 ? `${text.slice(0, 140)}...` : text;

  return shortedText;
}

export function getRandomRating() {
  return ((Math.random() * 100) / 100 + 4).toFixed(1);
}

export const formatSearchParams = (searchPath) => {
    return searchPath.slice(1).split("%20").join(" ");
  };