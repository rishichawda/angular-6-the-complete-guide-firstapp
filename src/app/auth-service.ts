import { EventEmitter } from '@angular/core';

export class AuthService {
    logged_in = false;
    authEvent = new EventEmitter<boolean>();

    login() {
        this.logged_in = true;
    }

    logout() {
        this.logged_in = false;
    }

    is_authenticated() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    this.authEvent.emit(this.logged_in);
                    resolve(this.logged_in);
                }, 700);
            }
        );
    }
}
