import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get(`${environment.url}person`).toPromise()
  }
  getById(userId){
    return this.http.get<User>(`${environment.url}person/${userId}`).toPromise()
  }
  save(user: User){
    if(user.id){
      return this.update(user);
    } else {
      return  this.add(user);
    }
  }
  private add(user: User){
    return this.http.post(`${environment.url}person`, user).toPromise()
  }
  private update(user: User){
    return this.http.put(`${environment.url}person/${user.id}`, user).toPromise()
  }
  delete(userId){
    return this.http.delete(`${environment.url}person/${userId}`).toPromise()
  }
}
