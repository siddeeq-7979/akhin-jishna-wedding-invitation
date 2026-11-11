import { WeddingEvent, WishMessage } from '../types/wedding';

export const GROOM_DETAILS = {
  name: 'Akhin Kishor',
  role: 'Groom',
  parents: 'S/o Chandran Anchil & Sheela',
  father: 'Chandran Anchil',
  mother: 'Sheela',
  house: 'Anchil House',
  postOffice: 'Kunjom P.O.',
  village: 'Thondernad',
  district: 'Wayanad, Kerala',
  pincode: '670731',
  fullAddress: 'Anchil House, Kunjom P.O., Thondernad, Wayanad, Kerala',
  phone: '+91 94471 23456', // realistic contact affordance for Wayanad
};

export const BRIDE_DETAILS = {
  name: 'Jishna Vijayan',
  role: 'Bride',
  parents: 'D/o Late Vijayan Puthumana & Prema Manari',
  father: 'Late Vijayan Puthumana',
  mother: 'Prema Manari',
  house: 'Puthumana House',
  postOffice: 'Kadavanad P.O.',
  village: 'Ponnani',
  district: 'Malappuram, Kerala',
  pincode: '679586',
  fullAddress: 'Puthumana House, Kadavanad P.O., Ponnani, Malappuram, Kerala',
  phone: '+91 94472 67890',
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'ceremony',
    title: 'Wedding Ceremony (താലികെട്ട്)',
    subTitle: 'Auspicious Muhurtham at holy Guruvayur Temple',
    dateStr: 'Wednesday, 20 January 2027',
    malayalamDate: '1202 Makaram 6 (മകരം 6)',
    timeStr: 'Auspicious Morning Muhurtham',
    venue: 'Guruvayur Sree Krishna Temple',
    venueAddress: 'Guruvayur, Thrissur District, Kerala 680101',
    googleMapQuery: 'Guruvayur Sree Krishna Temple, Kerala',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple+Kerala',
    startDate: new Date('2027-01-20T09:30:00+05:30'),
    endDate: new Date('2027-01-20T12:30:00+05:30'),
    description: 'The sacred Hindu wedding ceremony and Thalikettu solemnized at Guruvayur.',
    iconType: 'ceremony',
  },
  {
    id: 'reception',
    title: 'Grand Wedding Reception (സൽക്കാരം)',
    subTitle: 'Celebration with Family & Friends at Groom’s Residence',
    dateStr: 'Saturday, 23 January 2027',
    malayalamDate: '1202 Makaram 9',
    timeStr: '4:00 PM – 8:00 PM',
    venue: "Groom's Residence (Anchil House)",
    venueAddress: 'Anchil House, Kunjom P.O., Thondernad, Wayanad (11°45\'25.5"N 75°50\'41.3"E)',
    googleMapQuery: '11.757083,75.844806',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=11.757083,75.844806',
    startDate: new Date('2027-01-23T16:00:00+05:30'),
    endDate: new Date('2027-01-23T20:00:00+05:30'),
    description: 'We cordially invite you with family to join us for the reception on this auspicious occasion.',
    iconType: 'reception',
  },
];

export const INVITATION_CORDIAL_TEXT =
  'We cordially invite you with family to join us for the reception on this auspicious occasion.';

export const INVITATION_CREDITS = {
  regards: 'Chandran Anchil & Sheela',
  compliments: 'Friends & Relatives',
};

export const INITIAL_WISHES: WishMessage[] = [
  {
    id: 'w1',
    name: 'Manoj & Family (Wayanad)',
    relation: 'Family Friend',
    message: 'Heartiest congratulations Akhin & Jishna! May Lord Guruvayurappan shower abundant blessings, joy and togetherness throughout your married life!',
    timestamp: 'Yesterday',
    likes: 14,
  },
  {
    id: 'w2',
    name: 'Sujith Kumar',
    relation: 'College Friend',
    message: 'Super thrilled for you brother Akhin! Counting down to 23rd January in Kunjom. Wishing both of you a lifetime of laughter, love, and travels.',
    timestamp: '2 days ago',
    likes: 19,
  },
  {
    id: 'w3',
    name: 'Anjali & Dr. Haridas',
    relation: 'Relative (Malappuram)',
    message: 'Dear Jishna & Akhin, warmest congratulations! Wishing you endless bliss and beautiful memories together. Looking forward to celebrating with everyone!',
    timestamp: '3 days ago',
    likes: 11,
  },
];

export const TIMELINE_PROGRAM = [
  {
    time: '4:00 PM',
    title: 'Guest Welcoming & Traditional Reception',
    desc: 'Traditional Kerala welcome with Panineer, sandalwood paste & refreshing welcome drinks.',
    icon: 'welcome',
  },
  {
    time: '4:45 PM',
    title: 'Arrival of Couple & Nilavilakku Lighting',
    desc: 'Grand entry of newlyweds Akhin & Jishna followed by the lighting of the sacred brass lamp.',
    icon: 'lamp',
  },
  {
    time: '5:15 PM',
    title: 'Felicitations & Stage Greetings',
    desc: 'Blessings, greetings, and photo moments with family, relatives & friends.',
    icon: 'camera',
  },
  {
    time: '6:00 PM – 8:00 PM',
    title: 'Festive Banquet & Traditional Kerala Feast',
    desc: 'A delicious celebratory dinner buffet & traditional delicacies served with love.',
    icon: 'feast',
  },
  {
    time: '7:30 PM',
    title: 'Musical Evening & Celebrations',
    desc: 'Live acoustic melodies, heartfelt laughter, and cherished family gatherings.',
    icon: 'music',
  },
];

export const DRESS_CODE_PALETTE = [
  { name: 'Kasavu Gold', hex: '#C5A059', role: 'Accent & Border' },
  { name: 'Traditional Kerala Off-White', hex: '#F9F6EE', role: 'Primary' },
  { name: 'Earthy Sage Green', hex: '#5E7A68', role: 'Festive Wear' },
  { name: 'Wayanad Forest Green', hex: '#264E36', role: 'Complement' },
  { name: 'Auspicious Kumkum Maroon', hex: '#7A1C28', role: 'Traditional Festive' },
];
