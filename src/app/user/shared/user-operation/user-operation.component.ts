import { Component, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

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

  constructor() { }

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

  editUserData(userData: any) {
    // TODO: Call API for EDIT user
  }

}
