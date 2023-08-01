/* eslint linebreak-style: ["error", "windows"] */

const convertDate = (date = '') => new Date(date).toLocaleTimeString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default convertDate;
