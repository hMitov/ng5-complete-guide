import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: [ './account.component.css' ]
})

@Injectable()
export class AccountComponent implements OnInit {
  @Input() account !: { name: string, status: string };
  @Input() id !: number;

  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.changeStatus(this.id, status);
    //this.loggingService.logStatusChanged(status);
  }

}
