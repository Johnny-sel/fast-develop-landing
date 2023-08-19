import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {MegaMenuModule} from 'primeng/megamenu';
import {InputTextModule} from 'primeng/inputtext';
import {StyleClassModule} from 'primeng/styleclass';
import {DeferModule} from 'primeng/defer';
import {FocusTrapModule} from 'primeng/focustrap';
import {RippleModule} from 'primeng/ripple';
import {AutoFocusModule} from 'primeng/autofocus';
import {AnimateModule} from 'primeng/animate';
import {OverlayModule} from 'primeng/overlay';
import {DataViewModule} from 'primeng/dataview';
import {CardModule} from 'primeng/card';
import {PreviewComponent} from './preview/preview.component';
import {DividerModule} from 'primeng/divider';
import {PanelModule} from 'primeng/panel';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ChipModule} from 'primeng/chip';
import {DialogModule} from 'primeng/dialog';
import {TagModule} from 'primeng/tag';
import {BadgeModule} from 'primeng/badge';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    MegaMenuModule,
    InputTextModule,
    StyleClassModule,
    DeferModule,
    FocusTrapModule,
    RippleModule,
    AutoFocusModule,
    AnimateModule,
    OverlayModule,
    DataViewModule,
    CardModule,
    DividerModule,
    PanelModule,
    ChipModule,
    DialogModule,
    TagModule,
    BadgeModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
