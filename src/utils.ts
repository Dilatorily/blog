import { DOMParser } from '@xmldom/xmldom';
import isBefore from 'date-fns/isBefore';
import parseISO from 'date-fns/parseISO';
import { Tag } from './constants';

export const getContentFromFirstTag = (post: string, tag: Tag) => {
  if (!post) {
    return '';
  }

  const tags = new DOMParser().parseFromString(post, 'text/html');
  return tags.getElementsByTagName(tag)[0]
    ? (tags.getElementsByTagName(tag)[0].textContent as string)
    : '';
};

export const compareDate = (a: string, b: string) => (isBefore(parseISO(b), parseISO(a)) ? -1 : 1);
