import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  rootURL =
    'https://ap-south-1.aws.data.mongodb-api.com/app/quickreply-tkieg/endpoint';

  getProperties(query: any) {
    return this.http.get(this.rootURL + '/property/list?secret=quickreply', query['params'] = query);
  }

  addProperty(data: any) {
    return this.http.post(this.rootURL + '/property/add?secret=quickreply', data);
  }

  deleteProperty(id: string) {
    return this.http.post(this.rootURL + '/property/delete?secret=quickreply', {id: id});
  }
}
