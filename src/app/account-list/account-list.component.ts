import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountService } from '../shared/account-service.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers: [LoggingService]
})
export class AccountListComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private account_service: AccountService) {
  }

  ngOnInit() {
  }

  on_update_status(status: string) {
    this.account_service.update_account(this.id, status);
  }

}
