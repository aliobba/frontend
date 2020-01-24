import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';
@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  @Input ()search: string;

  constructor(private hostElement: ElementRef, private service: ServiceService) { }

  bookmarkObj = { bookmark: [] };

  message: string;

  ngOnInit() {
    this.service.currentMessage.subscribe(message => {
      if (message !== undefined && message !== 'default') {
        console.log(message);
        this.message = message.replace('watch?v=', 'embed/') ;
        const iframe = this.hostElement.nativeElement.querySelector('iframe');
        iframe.src = this.message;
        const postData = { url: message };
        console.log(postData);
        this.service.insert(postData);
      }
    });
    if (localStorage.getItem('bookmark') !== null) {
      this.bookmarkObj = JSON.parse(localStorage.getItem('bookmark'));
    }
  }


  addToBookMark() {
    if(this.message != null){
      this.bookmarkObj.bookmark.push(this.message);
      localStorage.setItem('bookmark', JSON.stringify(this.bookmarkObj));
      console.log(this.bookmarkObj);
    }
  }

}
