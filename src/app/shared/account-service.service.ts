import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
    accounts: {name: string, status: string}[] = [];

    constructor(private logging_service: LoggingService) {}

    add_account(iname: string, istatus: string) {
        this.accounts.push({name: iname, status: istatus});
    }

    update_account(id: number, new_status: string) {
        this.accounts[id].status = new_status;
        this.logging_service.logger(new_status);
    }
}
