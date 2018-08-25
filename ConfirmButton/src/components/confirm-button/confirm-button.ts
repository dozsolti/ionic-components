
import { Component, Input, Output } from '@angular/core';
@Component({
  selector: 'confirm-button',
  templateUrl: 'confirm-button.html'
})
export class ConfirmButtonComponent {

  //all
  statuses: String[] = ["inactive", "really", "waiting", "error", "activated"];
  @Input('texts') statusesText:          String[] = ["do it!", "you sure?", "loading", "error", "done"];
  @Input('colors') statusesColors:       String[] = ["danger", "primary", "primary", "danger", "secondary"];
  @Input('icons') statusesIcon:          String[] = ["play", "help", "time", "close", "checkmark"];
  @Input('repeatOnError') repeatOnError: Boolean  = true;
  @Input('repeatable') repeatable:       Boolean  = false;
  //current
  currentIndex: any = 0;
  currentMessage: String;
  currentColor: String;
  currentIcon: String;

  @Input('callback') callback;

  constructor() {

  }

  ngAfterViewInit() {
    this.currentIndex = 0;
    this.UpdateCurrents();
  }

  async clicked() {
    if (
      (this.repeatOnError && this.currentIndex == 3) //repeat on error
      ||
      (this.repeatable && this.currentIndex == 4) //repeat on done
    ) {
      this.currentIndex = 0;
    }
    if (this.currentIndex >= 2)
      return;

    this.currentIndex++;
    this.UpdateCurrents();

    if (this.currentIndex == 2) {

      try {
        if (this.callback)
          await this.callback();
        this.currentIndex = 4; //done
      }
      catch (err) {
        console.error(err);
        this.currentIndex = 3; //something went wrong
      } finally {
        this.UpdateCurrents();
      }
    }

  }

  UpdateCurrents() {
    this.currentColor = this.statusesColors[this.currentIndex];
    this.currentMessage = this.statusesText[this.currentIndex];
    this.currentIcon = this.statusesIcon[this.currentIndex];
  }
}
