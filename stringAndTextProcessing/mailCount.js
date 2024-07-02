/*
INPUT: a string of email data
OUTPUT: two basic statistics about the input email:
  1) the number of email messages found in the string; and
  2) the date range of the email messages
RULES:
- string contains multiple email messages separated by the delimiter string `##||##`
- each email message has 5 parts. The delimiter string `##/##` separates the parts
  - the 5 parts are:
    1) Sender
    2) Subject
    3) Date
    4) Recipient
    5) Body
ALGORITHM:
- find emails by splitting on `##||##`
  - find email length (length of this array)
- initialize dates to []
- split emails into a nested array using `#/#`
  - map over this array and return each index position 2
  - sort this array
  - return first and last elements with string interpolation
*/


function mailCount(emailData) {
  let emails = emailData.split('##|##');
  let count = emails.length;
  let emailDates = emails.map(email => email.split('#/#')[2]);

  console.log(`Count of Email: ${count}`);
  console.log(`Date Range: ${displayableDateRange(emailDates)}`);
}

function displayableDateRange(dates) {
  let dateObjects = getDateObjects(dates);
  dateObjects.sort((a, b) => a.valueOf() - b.valueOf());
  return dateObjects[0].toDateString() + '-' + dateObjects[dateObjects.length - 1].toDateString();
}

function getDateObjects(dates) {
  return dates.map(date => {
    let dateElements = date.split(' ')[1].split('-');
    let month = parseInt(dateElements[0], 10) - 1;
    let day = parseInt(dateElements[1], 10);
    let year = parseInt(dateElements[2], 10);
    return new Date(year, month, day);
  });
}



mailCount(emailData);
// console output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016