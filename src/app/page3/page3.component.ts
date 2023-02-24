import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  router:Router;

  constructor(router:Router)
  {
    this.router = router;
  }

  moveToPage1()
  {
    this.router.navigate(['search']);
  }

  moveToPage2(name:string)
  {
    this.router.navigate(['admin',name]);
  }

}
