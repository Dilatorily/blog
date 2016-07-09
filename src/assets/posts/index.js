import markdown from '../../utils/markdown';

const getPosts = (load) => {
    const CURRENT_PATH_INDEX = 2;
    const EXTENSION_INDEX = -3;
    const posts = {};

    load.keys().forEach((file) => {
        const date = file.slice(CURRENT_PATH_INDEX, EXTENSION_INDEX);
        posts[date] = markdown.render(load(file));
    });

    return posts;
};

export default getPosts(require.context('./', false, /\.md$/));
