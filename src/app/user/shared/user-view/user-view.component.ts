import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @Input() profile : any;

  constructor() { }

  ngOnInit(): void { 

    if (this.profile) {

      console.log(this.profile);
    }
  }
 
  onPatch() {

  }

  onDelete() {

  }

}
