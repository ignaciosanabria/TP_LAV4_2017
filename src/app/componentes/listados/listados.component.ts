import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule} from 'ng2-smart-table';


@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent implements OnInit {
  
  constructor() { }
  settings = {
    columns : {
    id : {
      title: 'ID'
    },
    name : {
      title: 'Full Name'
    },
    username : {
      title: 'User Name'
    },
    email : {
      title : 'Email'
    }
  }
  };

  data = [
    {
      id : 1,
      name : "Leanne Graham",
      username : "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 11,
      name : "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
   ngOnInit() {
  }

}
