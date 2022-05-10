import { Component, Injectable, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: [ './new-account.component.css' ]
})

@Injectable()
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChanged(accountStatus);
  }

}
