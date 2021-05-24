import { Component, OnInit } from '@angular/core';

import {Video} from '../../video'

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

   videos : Video[] = [
     {"_id" : 1, "title" : "Nodejs", "url" : "http://nodejs", "description" :"nodejs videos"},
     {"_id" : 2, "title" : "Mongodb", "url" : "http://mongodb", "description" :"mongodb videos"},
     {"_id" : 3, "title" : "ReactJs", "url" : "http://reactjs", "description" :"reactjs videos"}, 
   ]
  selectedVideo: Video | undefined 

  constructor() { }

  ngOnInit(): void {
  }

  onSelectVideo(video:any){
    this.selectedVideo = video
    console.log(this.selectedVideo)
  }
}
