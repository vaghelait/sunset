import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToQuote(){
    return this.router.navigateByUrl('quotation');
  }

  goToServices(){
    return this.router.navigateByUrl('services');
  }

  goToContact(){
    return this.router.navigateByUrl('contact');
  }

  goToHome(){
    return this.router.navigateByUrl('home');
  }



}
