import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../interface/user';
import { UserServiceService } from '../../..//user/user-service.service';



@Component({
  selector: 'app-user-operation',
  templateUrl: './user-operation.component.html',
  styleUrls: ['./user-operation.component.css']
})
export class UserOperationComponent implements OnInit {

  /**
   * True if operation is Edit mode.
   */
  @Input() isEditOperation: Boolean = false;
  @Input() profileData: any;

  constructor(private users: UserServiceService) { }

  ngOnInit(): void {
    this.checkEditOperation();
  }

  checkEditOperation() {
    if (this.isEditOperation) {
      // TODO: Patch user vale in form
    }
  }

  save() {
    const passUserData = this.profileData;
    if (this.isEditOperation) {
      this.editUserData(passUserData);
    } else {
      this.addUserData(passUserData);
    }
  }

  addUserData(userData: any) {
    // TODO: Call API for ADD new user
  }

  editUserData(form: NgForm) {
    const firstName = form.value.f_name;
    const lastName = form.value.l_name;
    const eMail = form.value.email;

    const user : User = {
      id : this.profileData.id,
      first_name: firstName,
      last_name: lastName,
      email: eMail,
      avatar: ''
    }

    this.users
    .patchUser(user)
    .subscribe((response: any) => console.log(response));
  }

}
