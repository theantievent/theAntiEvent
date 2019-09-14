
const antiAttendees = [
  {
    "avatar": "assets/attendees/mercedes.jpg",
    "name": "Mercedes",
    "nickname": "@laponyo",
    "link": "http://twitter.com/laponyo",
  },
  {
    "avatar": "assets/attendees/keldor.jpg",
    "name": "Keldor",
    "nickname": "@keldor88",
    "link": "http://twitter.com/keldor88",
  },
  {
    "avatar": "assets/attendees/Nahikariii.jpg",
    "name": "Nahikari",
    "nickname": "@Nahikariii",
    "link": "http://twitter.com/Nahikariii",
  },
  {
    "avatar": "assets/attendees/sirikon.jpg",
    "name": "Carlos Fdez Llamas",
    "nickname": "@sirikon",
    "link": "http://mastodon.social/@sirikon",
  },
  {
    "avatar": "assets/attendees/viroide.jpg",
    "name": "Viroide",
    "nickname": "@viroide",
    "link": "http://twitter.com/viroide",
  },
];

const attendeesDiv = document.querySelector('.attenders');

antiAttendees.forEach(attendee => {
  const item = document.createElement('div');
  item.className = `item ${attendee.name === 'Ladycircus' ? ' princesa' : ''}`;

  const chItem = document.createElement('div');
  chItem.className = 'ch-item';

  const chInfo = document.createElement('div');
  chInfo.className = 'ch-info';

  const chInfoFront = document.createElement('div');
  chInfoFront.className = 'ch-info-front';
  const image = document.createElement('img');
  image.src = attendee.avatar;

  chInfoFront.appendChild(image);
  chInfo.appendChild(chInfoFront);
  chItem.appendChild(chInfo);
  item.appendChild(chItem);

  const chInfoBack = document.createElement('div');
  chInfoBack.className = 'ch-info-back';

  const name = document.createElement('h3');
  name.innerText = attendee.name;

  const description = document.createElement('p');

  const link = document.createElement('a');
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.text = attendee.nickname;
  link.href = attendee.link;

  description.appendChild(link);
  chInfoBack.appendChild(name);
  chInfoBack.appendChild(description);

  chInfo.appendChild(chInfoBack);

  attendeesDiv.insertBefore(item, attendeesDiv.firstChild);
});
