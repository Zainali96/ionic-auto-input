import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoInputPageRoutingModule } from './auto-input-routing.module';

import { AutoInputPage } from './auto-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoInputPageRoutingModule
  ],
  declarations: [AutoInputPage]
})
export class AutoInputPageModule {}
