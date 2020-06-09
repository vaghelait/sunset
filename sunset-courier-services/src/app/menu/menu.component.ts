import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
 
 
  ngOnInit() {
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  constructor(private router: Router) { }
  
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
