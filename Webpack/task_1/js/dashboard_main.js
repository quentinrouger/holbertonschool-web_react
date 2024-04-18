import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

  // Update counter function
  const updateCounter = _.debounce(() => {
    count++;
    const clicksText = count === 1 ? 'click' : 'clicks';
$('#count').text(`${count} ${clicksText} on the button`);
}, 500);

  // Bind updateCounter to button click event
  $('button').on('click', updateCounter);
