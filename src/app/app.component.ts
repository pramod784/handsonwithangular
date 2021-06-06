import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //storedUserdata = [];
  storedUserdata: any = [ ];
  onUserAdded(users_data) {
    let current_length = this.storedUserdata.length;
    var temp = {
      user_name:users_data.user_name,
      mobile_number:users_data.mobile_number
    };

    this.storedUserdata.push(users_data);
    //this.storedUserdata.push(temp);
    //this.storedUserdata[current_length] = temp;
  }
}
