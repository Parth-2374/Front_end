import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  count = 0;
  // inc() {
  //   this.count = this.count + 1
  // }
  // dec() {
  //   this.count = this.count - 1
  // }
  // zero() {
  //   this.count = 0
  // }

  allinone(val: string) {
    if (val == "inc") {
      this.count = this.count + 1
    } else if (val == "dec") {
      if (this.count > 0) {
        this.count = this.count - 1
      }
    } else {
      this.count = 0
    }
  }
}
