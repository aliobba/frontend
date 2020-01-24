import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarkObj = { bookmark: [] };

  constructor() { }

  ngOnInit() {
    this.bookmarkObj = JSON.parse(localStorage.getItem('bookmark'));
    this.bookmarkObj.bookmark.map(video => {
      video = video.replace('watch?v=', 'embed/') ;
      const iframe = document.createElement('iframe');
      document.getElementById('bookmarkBox').appendChild(iframe);
      iframe.src = video;
    });
  }

}
