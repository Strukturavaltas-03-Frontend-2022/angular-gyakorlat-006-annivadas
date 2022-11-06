import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {

  eventList: Event[] = [];

  titles: string[] = ['Event', 'Date', 'Time', 'Location'];

  constructor(private eventService: EventService) {
    this.eventList = eventService.getAll();
   }

  ngOnInit(): void {
  }

}
