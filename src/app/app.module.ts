import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//header
import { HeaderComponent } from './components/header/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { NewUserComponent } from './components/header/new-user/new-user.component';

//user hub
import { UserHubComponent } from './components/userHub/user-hub/user-hub.component';
import { NewPostComponent } from './components/userHub/new-post/new-post.component';

//market
import { MarketContainerComponent } from './components/market/market-container/market-container.component';
import { CategoriesDropdownComponent } from './components/market/categories-dropdown/categories-dropdown.component';
import { CategoryComponent } from './components/market/category/category.component';
import { SearchComponent } from './components/market/search/search.component';
import { PostingContainerComponent } from './components/market/posting-container/posting-container.component';
import { PostingComponent } from './components/market/posting/posting.component';

//footer
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPostingContainerComponent } from './components/userHub/user-posting-container/user-posting-container.component';
import { UserPostingComponent } from './components/userHub/user-posting/user-posting.component';
import { PostingFormComponent } from './components/userHub/posting-form/posting-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    LoginComponent,
    NewUserComponent,
    UserHubComponent,
    NewPostComponent,
    MarketContainerComponent,
    PostingContainerComponent,
    PostingComponent,
    CategoriesDropdownComponent,
    CategoryComponent,
    FooterComponent,
    UserPostingContainerComponent,
    UserPostingComponent,
    PostingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
