import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import {PostCreateComponent} from './posts/post-create/post-create.component';
import {PostListComponent} from './posts/post-list-bkp/post-list.component'
import {UserAdd} from './users/users-add/users-add.component';
import {UsersList} from './users/users-list/users-list.component'
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    UserAdd,
    UsersList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
