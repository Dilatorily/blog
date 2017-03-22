import { DOMParser } from 'xmldom';

export const getContentFromFirstTag = (post, tag) => {
  if (!post) {
    return null;
  }

  const tags = new DOMParser().parseFromString(post, 'text/html');
  return tags.getElementsByTagName(tag)[0] ? tags.getElementsByTagName(tag)[0].textContent : null;
};

export default { getContentFromFirstTag };
