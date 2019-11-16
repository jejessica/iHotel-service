import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from './hotel.model'; 
import { Cliente } from './tipo.component';

@Component({
  selector: 'mt-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

    @Input() hotel: Hotel
  

  constructor() { }

  ngOnInit() {
  }

}
