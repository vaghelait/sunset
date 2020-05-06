import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { QuotationComponent } from './quotation/quotation.component';

const routes: Routes = [
{ path:  '',
  redirectTo:  'index',
  pathMatch:  'full' 
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'quotation',
  component: QuotationComponent
},
{
  path: 'services',
  component: ServicesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 