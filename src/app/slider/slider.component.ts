import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSlider} from "@angular/material/slider";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slider?: number = 0;
  slideToggleChecked = false;
  @ViewChild('matSlider') matSlider?: MatSlider;


  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 10;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  constructor() { }


  sliderValueChange() {
    console.log(this.matSlider?.value);
  }

  progressBarValue(value: any): number{
    return +value;
  }

  ngOnInit(): void {
  }

}
