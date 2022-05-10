import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    } ];

  constructor(private loggingService : LoggingService) { }

  changeStatus(id: number, newStatus: string) {
    this.accounts[ id ].status = newStatus;
    this.loggingService.logStatusChanged(status);
  }

  addAccount(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status
    });
    this.loggingService.logStatusChanged(status);
  }
}
