import isBefore from 'date-fns/is_before';
import { DOMParser } from 'xmldom';

export const getContentFromFirstTag = (post, tag) => {
  if (!post) {
    return null;
  }

  const tags = new DOMParser().parseFromString(post, 'text/html');
  return tags.getElementsByTagName(tag)[0] ? tags.getElementsByTagName(tag)[0].textContent : null;
};

export const compareDate = (a, b) => (isBefore(new Date(a), new Date(b)) ? -1 : 1);
