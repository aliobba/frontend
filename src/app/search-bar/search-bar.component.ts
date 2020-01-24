import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  search: string;
  historyObj = { youtube: [] };
  constructor(private service: ServiceService) { }

  ngOnInit() {
    if (localStorage.getItem('youtube') !== null) {
      this.historyObj = JSON.parse(localStorage.getItem('youtube'));
    }
  }

  send(search) {
    this.service.changeMessage(search.value);
  }

  addHistory(dataToSave) {
    this.historyObj.youtube.push(dataToSave.value);
    localStorage.setItem('youtube', JSON.stringify(this.historyObj));
  }

}
