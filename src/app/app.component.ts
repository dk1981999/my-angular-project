import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './posts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchData();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http.post('https://my-angular-project-d1163-default-rtdb.firebaseio.com/posts.json',
    postData).subscribe((responseData)=>{
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.onFetchData();
  }

  onClearPosts() {
    // Send Http request
  }

  private onFetchData(){
    this.http
    .get('https://my-angular-project-d1163-default-rtdb.firebaseio.com/posts.json')
    .pipe(
      map((responseData: {[key: string]: Post }) =>{
        const postsArray: Post[]=[];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key], id:key });
          }
        }
        return postsArray;
      }))
    .subscribe((responseData)=>{
      console.log(responseData);
    })
  }
}
