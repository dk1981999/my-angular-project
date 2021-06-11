import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './posts.model';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http.post<{ name: string }>('https://my-angular-project-d1163-default-rtdb.firebaseio.com/posts.json',
      postData).subscribe((responseData) => {
        console.log(responseData);
      },
        error => {
          this.error.next(error.message);
        });
  }

  fetchPosts() {
    let searchParams = new HttpParams;
    searchParams = searchParams.append('id', 'true');
    searchParams = searchParams.append('name', 'false');
    return this.http
      .get<{ [key: string]: Post }>('https://my-angular-project-d1163-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'newHeaders': 'Hello' }),
          params: searchParams,
          responseType: 'json'
        })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete('https://my-angular-project-d1163-default-rtdb.firebaseio.com/posts.json');
  }
}
