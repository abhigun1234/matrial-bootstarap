import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 

    alert('constructor')
  }

  ngOnInit() {
    alert('ng on init')
  }
  searchText(val:string)
  {
   alert(val)

  }
  login(name:string,password:string)
  {
    if(name=='abc' && password=='abc')
    {
      alert('login')
    }

  }

}
