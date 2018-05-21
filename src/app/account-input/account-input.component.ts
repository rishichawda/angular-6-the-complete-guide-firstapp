import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountService } from '../shared/account-service.service';

@Component({
  selector: 'app-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.component.css'],
  providers: [LoggingService]
})
export class AccountInputComponent implements OnInit {

  constructor(private loggin_service: LoggingService, private account_service: AccountService) { }

  ngOnInit() {
  }

  on_add_account(name: string, info: string) {
    this.account_service.add_account(name, info);
  }


}
