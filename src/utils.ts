import { DOMParser } from '@xmldom/xmldom';
import isBefore from 'date-fns/isBefore';
import isEqual from 'date-fns/isEqual';
import parseISO from 'date-fns/parseISO';
import { Tag, TestId } from './constants';

export const compareDate = (a: string, b: string) => {
  const date1 = parseISO(a);
  const date2 = parseISO(b);

  if (isEqual(date1, date2)) {
    return 0;
  }

  return isBefore(date1, date2) ? 1 : -1;
};

export const getContentFromFirstTag = (post: string, tag: Tag) => {
  if (!post) {
    return '';
  }

  const tags = new DOMParser().parseFromString(post, 'text/html');
  return tags.getElementsByTagName(tag)[0]
    ? (tags.getElementsByTagName(tag)[0].textContent as string)
    : '';
};

export const testId = (id: TestId) => (process.env.NODE_ENV === 'production' ? undefined : id);
