export const isDevelopment = process.env.NODE_ENV === 'development';

export const getContentFromFirstTag = (post, tag) => {
    const tags = new DOMParser().parseFromString(post, 'text/html');
    return tags.getElementsByTagName(tag)[0] ?
        tags.getElementsByTagName(tag)[0].textContent : null;
};
