import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ConfirmButtonComponent } from './confirm-button/confirm-button';
@NgModule({
	declarations: [ConfirmButtonComponent],
	imports: [IonicModule],
	exports: [ConfirmButtonComponent]
})
export class ComponentsModule {}
