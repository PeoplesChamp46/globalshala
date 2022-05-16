import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFilterComponent } from './shared/user-filter/user-filter.component';
import { UserViewComponent } from './shared/user-view/user-view.component';
import { UserOperationComponent } from './shared/user-operation/user-operation.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserFilterComponent,
    UserViewComponent,
    UserOperationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
