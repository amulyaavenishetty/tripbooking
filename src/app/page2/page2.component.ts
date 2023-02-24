import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  name:string=''

  constructor(private activatedRouter:ActivatedRoute,
        private router:Router) { 
          this.name = this.activatedRouter.snapshot.params['name'];
        }

}
