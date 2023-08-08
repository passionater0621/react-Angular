import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../shared/constants';

const { apiUrl, apiKey } = environment
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }

  get userId(): string {
    return (this.user!.email).split('@')[0];
  }

  register(email: string, password: string, rePass: string) {
    return this.http
      .post<User>(`/api:signUp?key=${apiKey}`, {
        email, password, rePass,
        returnSecureToken: true
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(`/api:signInWithPassword?key=${apiKey}`, {
        email, password,
        returnSecureToken: true
      })
      .pipe(tap((user) => {
        this.user$$.next(user)
      }))
  }

  logout() {
    localStorage.removeItem('user')
    return this.user$$.next(undefined);
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  isAuthenticated() {
    return this.user = JSON.parse(localStorage.getItem('user')!)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
