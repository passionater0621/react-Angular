import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }

  register(username: string, email: string, password: string, rePass: string) {
    return this.http
      .post<User>('https:identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCutIIBlW2IzESPDMFpnxqGJb4Mv_pUi7U', {
        username, email, password, rePass,
        returnSecureToken: true
      })
      .pipe(tap((user) => this.user$$.next(user)))
  }

  login(email: string, password: string) {
    return this.http
      .post<User>('https:identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCutIIBlW2IzESPDMFpnxqGJb4Mv_pUi7U', {
        email, password,
        returnSecureToken: true
      })
      .pipe(tap((user) => this.user$$.next(user)))
  }

  logout() {
    localStorage.removeItem('user')
  }

  get isLogged(): boolean {
    return !!this.user;
  }
}
