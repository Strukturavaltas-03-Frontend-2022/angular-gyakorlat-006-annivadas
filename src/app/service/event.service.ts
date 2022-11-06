import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  upcomingEvents: Event[] = [
    {
      name: 'Name-day',
      date: '2022-11-25',
      time: '17:00',
      location: {
        address: 'Üllői út 3.',
        city: 'Budapest',
        country: 'Hungary',
      },
    },

    {
      name: 'Christmas',
      date: '2022-12-31',
      time: '20:30',
      location: {
        address: 'Tátra u. 11.',
        city: 'Budapest',
        country: 'Hungary',
      },
    },

    {
      name: 'Sylvester',
      date: '2022-10-25',
      time: '17:30',
      location: {
        address: 'Vasvári u. 7.',
        city: 'Szekszárd',
        country: 'Hungary',
      },
    },
  ];

  getAll() {
    return this.upcomingEvents;
  }

  constructor() {}
}
