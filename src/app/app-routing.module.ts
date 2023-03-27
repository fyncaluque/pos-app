import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalePageComponent } from './pages/sale-page/sale-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'sale', pathMatch: 'full' },
  { path: 'sale', component: SalePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
