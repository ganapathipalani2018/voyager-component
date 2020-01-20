import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopoverComponent } from './popover/popover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverlayComponent } from './overlay/overlay.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CircleDotComponent } from './circle-dot/circle-dot.component';

@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent,
    NavbarComponent,
    OverlayComponent,
    SubmenuComponent,
    DropdownComponent,
    CircleDotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
