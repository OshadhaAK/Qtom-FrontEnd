import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsServicesComponent } from './products-services/products-services.component';
import { IndustriesComponent } from './industries/industries.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ContactUs', component: ContactComponent},
  { path: 'AboutUs', component: AboutComponent},
  { path: 'Gallery', component: GalleryComponent},
  { path: 'Products&Services', component: ProductsServicesComponent},
  { path: 'Products&Services/:id', component: ProductsServicesComponent},
  { path: 'Industries', component: IndustriesComponent},
  { path: 'Industries/:id', component: IndustriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 40]
   })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
