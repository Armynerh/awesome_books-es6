import { DateTime } from './luxon.min.js';

export default function updateDateTime() {
  const dateTimeElement = document.getElementById('date-para');
  const newTime = DateTime.now();
  dateTimeElement.textContent = newTime.toFormat('dd-MM-yyyy HH:mm:ss');
}
