const destinations = [
    // East India
    { 
      id: '1',
      title: 'Darjeeling',
      state: 'West Bengal',
      category: 'Hill Station',
      direction: 'East India',
      img: 'public/Photos/Darjeeling, West Bengal.jpg',
      desc: ''
    },
    {
      id: '2',
      title: 'Konark',
      state: 'Odisha',
      category: 'Heritage',
      direction: 'East India',
      img: 'public/Photos/Konark, Odisha.jpg',
      desc: ''
    },
    {
      id: '3',
      title: 'Gaya',
      state: 'Bihar',
      category: 'Religious',
      direction: 'East India',
      img: 'public/Photos/Gaya, Bihar.jpg',
      desc: ''
    },
    {
      id: '4',
      title: 'Jagannath Puri',
      state: 'Odisha',
      category: 'Religious',
      direction: 'East India',
      img: 'public/Photos/Jagannath puri, Odisha.jpg',
      desc: ''
    },
    {
      id: '5',
      title: 'Deoghar',
      state: 'Jharkhand',
      category: 'Religious',
      direction: 'East India',
      img: 'public/Photos/Deoghar, Jharkhand.jpg',
      desc: ''
    },
    {
      id: '6',
      title: 'Nalanda',
      state: 'Bihar',
      category: 'Heritage',
      direction: 'East India',
      img: 'public/Photos/Nalanda, Bihar.jpg',
      desc: ''
    },
  
    // West India
    {
      id: '7',
      title: 'Calangute Beach',
      state: 'Goa',
      category: 'Beach',
      direction: 'West India',
      img: 'public/Photos/Calangute Beach, Goa.jpg',
      desc: ''
    },
    {
      id: '8',
      title: 'Rann Of Kutch',
      state: 'Gujarat',
      category: 'Nature',
      direction: 'West India',
      img: 'public/Photos/Rann Of Kutch, Gujarat.jpg',
      desc: ''
    },
    {
      id: '9',
      title: 'Jaipur',
      state: 'Rajasthan',
      category: 'Heritage',
      direction: 'West India',
      img: 'public/Photos/Jaipur, Rajasthan.jpg',
      desc: ''
    },
    {
      id: '10',
      title: 'Mahabaleshwar',
      state: 'Maharashtra',
      category: 'Hill Station',
      direction: 'West India',
      img: 'public/Photos/Mahabaleshwar, Maharashtra.jpg',
      desc: ''
    },
    {
      id: '11',
      title: 'Dwaraka',
      state: 'Gujarat',
      category: 'Religious',
      direction: 'West India',
      img: 'public/Photos/Dwaraka, Gujarat.jpg',
      desc: ''
    },
    {
      id: '12',
      title: 'Diu',
      state: 'Diu and Daman',
      category: 'Beach',
      direction: 'West India',
      img: 'public/Photos/Diu, Diu and Daman.jpg',
      desc: ''
    },
  
    // North-east India
    {
      id: '13',
      title: 'Kaziranga National Park',
      state: 'Assam',
      category: 'Wildlife',
      direction: 'North-east India',
      img: 'public/Photos/Kaziranga-National-Park-Assam.jpg',
      desc: 'UNESCO World Heritage Site, renowned for its population of one-horned rhinos, diverse wildlife, wetlands, and conservation efforts against poaching and habitat loss.'
    },
    {
      id: '14',
      title: 'Tawang Monastery',
      state: 'Arunachal Pradesh',
      category: 'Heritage',
      direction: 'North-east India',
      img: 'public/Photos/Tawang Monastery, Arunachal Pradesh.jpg',
      desc: ''
    },
    {
      id: '15',
      title: 'Nathu La Pass',
      state: 'Sikkim',
      category: 'Nature',
      direction: 'North-east India',
      img: 'public/Photos/Nathu La Pass, Sikkim.png',
      desc: ''
    },
    {
      id: '16',
      title: 'Cherrapunji',
      state: 'Meghalaya',
      category: 'Nature',
      direction: 'North-east India',
      img: 'public/Photos/Cherrapunji, Meghalaya.jpg',
      desc: ''
    },
    {
      id: '17',
      title: 'Dampa Tiger Reserve',
      state: 'Mizoram',
      category: 'Wildlife',
      direction: 'North-east India',
      img: 'public/Photos/Dampa Tiger Reserves, Mizoram.jpg',
      desc: ''
    },
    {
      id: '18',
      title: 'Dimapur',
      state: 'Nagaland',
      category: 'City',
      direction: 'North-east India',
      img: 'public/Photos/Dimapur, Nagaland.jpg',
      desc: ''
    },
    {
      id: '19',
      title: 'Loktak Lake',
      state: 'Manipur',
      category: 'City',
      direction: 'North-east India',
      img: 'public/Photos/Loktak Lake, Manipur.jpg',
      desc: ''
    },
  
    // North India
    {
      id: '20',
      title: 'Agra',
      state: 'Uttar Pradesh',
      category: 'Heritage',
      direction: 'North India',
      img: 'public/Photos/Agra, Uttarpradesh.jpg',
      desc: ''
    },
    {
      id: '21',
      title: 'Vrindavan',
      state: 'Uttar Pradesh',
      category: 'Religious',
      direction: 'North India',
      img: 'public/Photos/Vrindavan, Uttarpradesh.jpg',
      desc: ''
    },
    {
      id: '22',
      title: 'Badrinath',
      state: 'Uttarakhand',
      category: 'Religious',
      direction: 'North India',
      img: 'public/Photos/Badrinath, Uttarakhand.jpg',
      desc: ''
    },
    {
      id: '23',
      title: 'Shalimar Bagh',
      state: 'Jammu & Kashmir',
      category: 'Heritage',
      direction: 'North India',
      img: 'public/Photos/shalimar bagh, Jammu & Kashmir.jpg',
      desc: ''
    },
    {
      id: '24',
      title: 'Shimla',
      state: 'Himachal Pradesh',
      category: 'Hill Station',
      direction: 'North India',
      img: 'public/Photos/Shimla, Himachal pradesh.jpg',
      desc: ''
    },
    {
      id: '25',
      title: 'Ayodhya Ram Mandir',
      state: 'Uttar Pradesh',
      category: 'Religious',
      direction: 'North India',
      img: 'public/Photos/Ayodhya Ram Mandir.jpg',
      desc: ''
    },
  
    // South India
    {
      id: '26',
      title: 'Horsley Hills',
      state: 'Andhra Pradesh',
      category: 'Hill Station',
      direction: 'South India',
      img: 'public/Photos/Horsley Hills, Andhra Pradesh.jpg',
      desc: ''
    },
    {
      id: '27',
      title: 'Poovar Island',
      state: 'Kerala',
      category: 'Beach',
      direction: 'South India',
      img: 'public/Photos/Poovar Island, Kerala.jpg',
      desc: ''
    },
    {
      id: '28',
      title: 'Bandipur National Park',
      state: 'Karnataka',
      category: 'Wildlife',
      direction: 'South India',
      img: 'public/Photos/Bandipur National Park, Karnataka.jpg',
      desc: ''
    },
    {
      id: '29',
      title: 'Bijapur',
      state: 'Karnataka',
      category: 'Heritage',
      direction: 'South India',
      img: 'public/Photos/Bijapur, Karnataka.jpg',
      desc: ''
    },
    {
      id: '30',
      title: 'Ooty',
      state: 'Tamil Nadu',
      category: 'Hill Station',
      direction: 'South India',
      img: 'public/Photos/Ooty, Tamilnadu.jpg',
      desc: ''
    },
    {
      id: '31',
      title: 'Hyderabad',
      state: 'Telangana',
      category: 'City',
      direction: 'South India',
      img: 'public/Photos/Hyderabad, Telangana.jpg',
      desc: ''
    },
  ];
  
  export default destinations;
  