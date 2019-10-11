import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { GaleryComponent } from './galery/galery.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { VideoComponent } from './home/video/video.component';
import { HomegaleryComponent } from './home/homegalery/homegalery.component';
import { ContactComponent } from './home/contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { CartminiComponent } from './cartmini/cartmini.component';
import { AuthenticationService} from './authentication.service';
import { PostblogService } from './postblog.service';
import { ShoppingService } from './shopping.service';
import { GuardService } from './guard.service';
import { environment } from 'src/environments/environment';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  {path: '', component: FrontpageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-add', component: BlogAddComponent},
  {path: 'galery', component: GaleryComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'itemdetails/:productId', component: ItemdetailsComponent},
  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/pagenotfound'}
];

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    GaleryComponent,
    ShopComponent,
    ShoppingcartComponent,
    SignupComponent,
    SigninComponent,
    PagenotfoundComponent,
    ItemdetailsComponent,
    IntroductionComponent,
    CarouselComponent,
    VideoComponent,
    HomegaleryComponent,
    ContactComponent,
    NavComponent,
    CartminiComponent,
    BlogAddComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    Ng2CarouselamosModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBK_DYq58LvOhAG7q2uLVMAUg-EPSH-bxo'
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule 
  ],
  providers: [AuthenticationService, PostblogService, ShoppingService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
