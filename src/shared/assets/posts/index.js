const dates = [
  '2016-07-18',
  '2016-08-18',
  '2016-09-22',
];

export default async () => {
  const files = await Promise.all(dates.map(date => import(`./${date}.md`)));
  return files.reduce((posts, { default: file }, index) => ({
    ...posts,
    [dates[index]]: file,
  }), {});
};
