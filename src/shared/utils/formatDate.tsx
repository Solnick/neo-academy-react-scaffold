import { Moment } from 'moment';

function formatDate(date: Moment) {
  return date.format('MM/DD/YYYY');
}

export default formatDate;
