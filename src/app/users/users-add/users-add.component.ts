import {Component,EventEmitter,Output} from '@angular/core'
@Component({
  "styleUrls":[],
  "selector":'app-user-add',
  "templateUrl":'./users-add.component.html'
})

export class UserAdd {
  mobile_number = "";
  user_name = "";
  @Output() create_user = new EventEmitter();
  onAdd(){
    var users_data = {
      user_name:this.user_name,
      mobile_number:this.mobile_number,
    }
    this.create_user.emit(users_data);
  }


}
