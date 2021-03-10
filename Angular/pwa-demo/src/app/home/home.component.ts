import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { EmployeeService } from '../core/services/dummy-data/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data;
  private readonly publicKey ="BJhcymvxluoFFk8OnPcLUvLroX_kLilcQO9NMWtATf6kNYRk3-fUekZieL_alsH63-XuEOOxTPbxTGG9KFJS6j0";

  constructor(
    private swUpdate: SwUpdate,
    private employee: EmployeeService,
    private appRef: ApplicationRef,
    private swPush: SwPush
  ) {
    this.updateClient();
    this.checkUpdate();
  }

  ngOnInit(): void {

    // console notification data object
    this.swPush.messages.subscribe(message => console.log(message));

    // click to redirect through notification
    this.swPush.notificationClicks.subscribe(
      ({action, notification}) => {
        window.open(notification.data.url);
      }
    )

    this.employeeData();
    this.pushSubscription();
  }

  // SwUpdate service
  updateClient() {

    // isEnable property
    if(!this.swUpdate.isEnabled) {
      console.log('Not Enabled !');
      return;
    }

    // available property
    this.swUpdate.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);

      // activateUpdate method
      if(confirm('Update avilable for the app, Please confirm')) {
        this.swUpdate.activateUpdate().then(() => location.reload());
      }

    });

    // activated property
    this.swUpdate.activated.subscribe(event => {
      console.log('previous version is', event.previous);
      console.log('activated version is', event.current);
    });

  }

  // checkForUpdate method
  checkUpdate() {
    this.appRef.isStable.subscribe((isStable) => {
      if(isStable) {
        const timeInterval = interval(8 * 60 * 60 * 1000);

        timeInterval.subscribe(() => {
          this.swUpdate.checkForUpdate().then(() => console.log('checked'));
        });
      }
    });
  }

  // SwPush service
  pushSubscription() {
    if(!this.swPush.isEnabled) {
      console.log('Notification Not Enabled');
      return;
    }
    this.swPush
      .requestSubscription({
        serverPublicKey: this.publicKey,
      })
        .then((sub) => console.log(JSON.stringify(sub)))
        .catch((err) => console.log(err));
  }

  // store employee data in object
  employeeData() {
    this.employee.employeeData().subscribe(response => {
      if(response["data"]){
        this.data = response["data"];
      }
    })
  }

}
