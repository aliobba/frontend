import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyObj = { youtube: [] };

  constructor() { }

  ngOnInit() {
    this.historyObj = JSON.parse(localStorage.getItem('youtube'));
    this.historyObj.youtube.map(video => {
      video = video.replace('watch?v=', 'embed/') ;
      const iframe = document.createElement('iframe');
      document.getElementById('historyBox').appendChild(iframe);
      iframe.src = video;
    });
  }

}
