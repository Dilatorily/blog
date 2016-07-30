export const isDevelopment = process.env.NODE_ENV === 'development';

export const getContentFromFirstTag = (post, tag) => {
    const tags = document.createElement('div');
    tags.innerHTML = post;
    return tags.getElementsByTagName(tag)[0] ?
        tags.getElementsByTagName(tag)[0].textContent : null;
};
