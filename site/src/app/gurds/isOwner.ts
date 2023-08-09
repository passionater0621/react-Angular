import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/user/user.service';
import { ApiService } from '../properties/api.service';

@Injectable({ providedIn: 'root' })
export class isOwner implements CanActivate {
    constructor(private userService: UserService, private router: Router, private apiService: ApiService,) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
        const id = route.params?.['propertyId']

        this.apiService.getProperty(id).subscribe({
            next: (property) => {
                if (property.userId != this.userService.userId) {
                    this.router.navigate(['/error'])
                }
            }
        })
        return this.userService.isLogged;
    }
}