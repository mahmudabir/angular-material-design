import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSlider} from "@angular/material/slider";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slider?: number = 0;
  @ViewChild('matSlider') matSlider?: MatSlider;

  constructor() { }


  sliderValueChange() {
    console.log(this.matSlider?.value);
  }

  ngOnInit(): void {
  }

}
