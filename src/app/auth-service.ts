
export class AuthService {
    logged_in = false;

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
                    resolve(this.logged_in);
                }, 700);
            }
        );
    }
}
