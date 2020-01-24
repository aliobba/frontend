import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/service/service.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyObj = { youtube: [] };

  constructor(private service: ServiceService) { }

  ngOnInit() {
    //localStorage.removeItem('history');

    this.historyObj = JSON.parse(localStorage.getItem('history'));
    this.historyObj.youtube.map(video => {
      video = video.replace('watch?v=', 'embed/') ;
      video = video.substring(8 , video.length - 2 );
      console.log('hello');
      const iframe = document.createElement('iframe');
      document.getElementById('historyBox').appendChild(iframe);
      console.log(iframe);
      iframe.src = video;
      console.log(video);
    });
  }

}
