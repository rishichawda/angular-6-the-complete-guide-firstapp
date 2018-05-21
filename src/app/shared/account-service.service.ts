export class AccountService {
    accounts: {name: string, status: string}[] = [];

    add_account(iname: string, istatus: string) {
        this.accounts.push({name: iname, status: istatus});
    }

    update_account(id: number, new_status: string) {
        this.accounts[id].status = new_status;
    }
}
