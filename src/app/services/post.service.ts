import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostInterface } from '@/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  async getPostArr ():Promise<Array<PostInterface>> {
    return await this.http.get<Array<PostInterface>>('https://jsonplaceholder.typicode.com/posts2')
    .toPromise()
  }
}
