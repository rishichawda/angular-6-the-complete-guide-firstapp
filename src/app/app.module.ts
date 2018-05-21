import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountInputComponent } from './account-input/account-input.component';
import { AccountService } from './shared/account-service.service';

// import { ServerElementComponent } from './server-element/server-element.component';
// import { CockpitComponent } from './cockpit/cockpit.component';
// import { ServerHoverDirective } from './server-hover/server-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountInputComponent,
    // ServerElementComponent,
    // CockpitComponent,
    // ServerHoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
