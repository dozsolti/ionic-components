import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'countdown',
  templateUrl: 'countdown.html'
})
export class CountdownComponent {

  time: number;
  status: number;

  interval: any;

  @Input('isBar') isBar = false;
  @Input('hideTime') hideTime = false;
  @Input('startTime') startTime: number = 60;
 
  //status = ready:3, running:1, paused:0, finished:2
  @Input('buttonTexts') buttonTexts = ["resume", "pause", "replay", "start"];

  @Output() callback = new EventEmitter();

  ngAfterViewInit() {
    this.time = this.startTime;
    this.status = 3;
  }

  getPercent() {
    return (this.time * 100) / this.startTime;
  }

  toggleStart() {
    if (this.status == 3) //3 = ready
      this.start();
    else if (this.status == 1) //1 = running
      this.pause();
    else if (this.status == 0) //0 = paused
      this.resume();
    else // 2 = finished
      this.replay();
  }

  getTimeString() {

    let hours: any = Math.floor(this.time / 3600);
    let minutes: any = Math.floor((this.time - (hours * 3600)) / 60);
    let seconds: any = Math.trunc(this.time - (hours * 3600) - (minutes * 60));

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    let text = minutes + ':' + seconds;

    if (hours > 0 || (hours == 0 && minutes > 50))
      text = hours + ':' + text;

    return text;
  }

  tick() {
    if (this.time > 0) {
      this.time -= 0.01;
      if (this.time < 0)
        this.time = 0;
    }
    else {
      this.time = 0;
      this.status = 2;
      clearInterval(this.interval);
      if (this.callback)
        this.callback.emit(true);
    }
  }

  start() {
    this.interval = setInterval(() => this.tick(), 10);
    this.status = 1;
  }
  pause() {
    clearInterval(this.interval);
    this.status = 0;
  }
  resume() {
    this.interval = setInterval(() => this.tick(), 10);
    this.status = 1;
  }
  reset() {
    clearInterval(this.interval);
    this.time = this.startTime;
    this.start();
  }
  replay() {
    this.time = this.startTime;
    this.status = 3;
  }
}
