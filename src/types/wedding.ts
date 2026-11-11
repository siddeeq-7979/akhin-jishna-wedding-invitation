export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export interface WeddingEvent {
  id: string;
  title: string;
  subTitle?: string;
  dateStr: string;
  malayalamDate?: string;
  timeStr: string;
  venue: string;
  venueAddress: string;
  googleMapQuery: string;
  googleMapsUrl: string;
  startDate: Date;
  endDate: Date;
  description: string;
  iconType: 'ceremony' | 'reception';
}

export interface WishMessage {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  likes: number;
}

export interface RsvpSubmission {
  name: string;
  phone: string;
  attendance: 'attending' | 'not-attending' | 'tentative';
  guestCount: number;
  dietPreference: 'traditional-sadya' | 'vegetarian' | 'non-veg-feast' | 'any';
  wishes: string;
  submittedAt: string;
}
