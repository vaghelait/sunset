import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sunset-courier-services';


constructor(private router: Router){}


 goToServices(){
   console.log("clicked");
  return this.router.navigateByUrl("/services");
}


}