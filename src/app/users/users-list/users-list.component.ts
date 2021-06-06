import {Component,Input} from '@angular/core'

@Component({
  selector:'app-users-list',
  templateUrl:'./users-list.component.html',
  styleUrls:['./users-list.component.css']
})

export class UsersList{

  //@Input() storedUserdata = [];

  @Input() storedUserdata = [{
    user_name:"Pramod Yewale",
    mobile_number:9423777503
  },
  {
    user_name:"Vidhi Yewale",
    mobile_number:8087511309
  }];


  /* users_list = [{
    user_name:"Pramod Yewale",
    mobile_number:9423777503
  },
  {
    user_name:"Vidhi Yewale",
    mobile_number:8087511309
  }]; */
}
