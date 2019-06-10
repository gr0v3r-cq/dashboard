import { Component } from '@angular/core';

/*@Component({
  selector: 'ngx-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})*/
@Component({
  selector: 'ngx-user-admin',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class UserAdminComponent {

}
