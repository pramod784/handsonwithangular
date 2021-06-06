import { Component } from  '@angular/core';

@Component({
  selector:"app-post-create",
  templateUrl:"./post-create.component.html",
  styleUrls:["./post-create.component.css"]
})

export class PostCreateComponent {
  usermessage = "Initial Message!"
  myContent = "Blank";
  onAddPost(){
    this.usermessage = this.myContent;
    //alert('here');
  }
}
