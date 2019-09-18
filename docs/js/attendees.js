
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
    "nickname": "@sirikon@plaza.remolino.town",
    "link": "http://mastodon.social/@sirikon",
  },
  {
    "avatar": "assets/attendees/viroide.jpg",
    "name": "Viroide",
    "nickname": "@viroide",
    "link": "http://twitter.com/viroide",
  },
  {
    "avatar": "assets/attendees/alex.jpeg",
    "name": "Alex",
    "nickname": "@Inverse_Bit",
    "link": "http://twitter.com/Inverse_Bit",
  },
  {
    "avatar": "assets/attendees/josebaseba.jpg",
    "name": "Joseba",
    "nickname": "@Josebaseba",
    "link": "http://twitter.com/Josebaseba",
  },
  {
    "avatar": "assets/attendees/garazi_i.jpg",
    "name": "Garazi",
    "nickname": "@Garazi_i",
    "link": "http://twitter.com/Garazi_i",
  },
  {
    "avatar": "assets/attendees/pulido.jpg",
    "name": "Juan Antonio",
    "nickname": "@pulidoiniesta",
    "link": "http://twitter.com/pulidoiniesta",
  },
  {
    "avatar": "assets/attendees/morti.jpg",
    "name": "Imanol",
    "nickname": "@MortimerGoro",
    "link": "http://twitter.com/MortimerGoro",
  },
  {
    "avatar": "https://avatars0.githubusercontent.com/u/8914783?s=460&v=4",
    "name": "Patricia Perochena",
    "nickname": "@patri_pe",
    "link": "http://twitter.com/patri_pe",
  },
  {
    "avatar": "https://pbs.twimg.com/profile_images/1016630266532696065/bOtB4Hwn_400x400.jpg",
    "name": "Jon Torrado",
    "nickname": "@jontorrado",
    "link": "http://twitter.com/jontorrado",
  },
  {
    "avatar": "https://pbs.twimg.com/profile_images/1048896985338695680/jK6dVL3u_400x400.jpg",
    "name": "Gorka",
    "nickname": "@Ercillagorka",
    "link": "http://twitter.com/ercillagorka",
  },
  {
    "avatar": "https://pbs.twimg.com/profile_images/1119350490356174848/aE4uvCep.jpg",
    "name": "Raul Moreno Sola",
    "nickname": "@miniservers",
    "link": "http://twitter.com/miniservers",
  },
  {
    "avatar": "https://pbs.twimg.com/profile_images/1119719100018720768/h9b1J6zi_400x400.jpg",
    "name": "Iñaki Etxebarria",
    "nickname": "@ilpapis",
    "link": "http://twitter.com/ilpapis",
  },
  {
    "avatar": "https://avatars3.githubusercontent.com/u/610728?s=460&v=4",
    "name": "Unai Orbe",
    "nickname": "@uorbe001",
    "link": "http://twitter.com/uorbe001",
  },
  {
    "avatar": "https://pbs.twimg.com/profile_images/378800000863806205/LSMwsWSG_400x400.png",
    "name": "Elena Ramírez",
    "nickname": "@lenatwitteada",
    "link": "http://twitter.com/lenatwitteada",
  },
  {
    "avatar": "https://avatars0.githubusercontent.com/u/655613?s=460&v=4",
    "name": "Alvaro Salazar",
    "nickname": "@xala3pa",
    "link": "http://twitter.com/xala3pa",
  },
  {
    "avatar": "https://pbs.twimg.com/profile_images/1095620060348145664/kefaORgz.png",
    "name": "carmenansio",
    "nickname": "@carmenansio",
    "link": "http://twitter.com/carmenansio",
  },
  {
    "avatar": "https://pbs.twimg.com/profile_images/471751879056031744/H88Z2_0V_400x400.jpeg",
    "name": "Imanol Pinto",
    "nickname": "@Pahint",
    "link": "http://twitter.com/Pahint",
  },
];

const attendeesDiv = document.querySelector('.attenders');

antiAttendees.forEach(attendee => {
  const item = document.createElement('div');
  item.className = 'item';

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
