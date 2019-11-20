import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from './hotel/hotel.model';
import { HoteisService } from './hoteis.service';

@Component({
  selector: 'mt-hoteis',
  templateUrl: './hoteis.component.html',
  styleUrls: ['./hoteis.component.css']
})
export class HoteisComponent implements OnInit {

  hoteis: Hotel[]

@Input() cliente: any = ['Regular', 'Reward']

  constructor(private hoteisService: HoteisService) { }

  ngOnInit() {
     this.hoteisService.hoteis()
                       .subscribe(hoteis => this.hoteis )
  }

}
