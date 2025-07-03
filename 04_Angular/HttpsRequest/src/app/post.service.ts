import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map, Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  dbUrl =
    'https://test564745grf-default-rtdb.asia-southeast1.firebasedatabase.app';

  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(`${this.dbUrl}/post.json`, postData)
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(`${this.dbUrl}/post.json`)
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }

  deletePosts() {
    return this.http.delete(`${this.dbUrl}/post.json`);
  }
}
