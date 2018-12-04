
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot,Route, RouterStateSnapshot, CanLoad, CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

import {Observable} from 'rxjs/observable';


@Injectable()
export class AuthGuard implements  CanActivate,CanLoad {
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
       return this.checkLoggedIn(route.path);
    }

    constructor(private authService: AuthService,
                private router: Router){

                }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return this.checkLoggedIn(state.url);
    }
    

    checkLoggedIn(url: string): boolean {
        if(this.authService.isLoggedIn()){
            return true;
        }
        this.authService.redirectUrl=url;
        this.router.navigate(['/login']);
        return false;
    }


    
}

