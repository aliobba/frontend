import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {History} from '../model/history';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  ListHistory: History[];
  search: string;
  historyObj = { youtube: [] };
  constructor(private service: ServiceService) { }

  ngOnInit() {

    if (localStorage.getItem('history') !== null) {
      this.historyObj = JSON.parse(localStorage.getItem('history'));
    }
  }

  send(search) {
    this.service.changeMessage(search.value);
  }

  addHistory() {
  }

}
