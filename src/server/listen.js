import winston from 'winston'; // eslint-disable-line import/no-extraneous-dependencies

winston.cli();
export default port => (error) => {
  if (error) {
    winston.error(error);
  } else {
    winston.info(`Listening on port ${port}`);
  }
};
