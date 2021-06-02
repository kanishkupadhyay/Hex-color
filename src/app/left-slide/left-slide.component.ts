import { Component } from '@angular/core';
import { DesignService } from '../service/design.service';

@Component({
  selector: 'app-left-slide',
  templateUrl: './left-slide.component.html',
  styleUrls: ['./left-slide.component.css']
})
export class LeftSlideComponent {
  invalid: boolean = false;
  pattern = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i;

  constructor(private service: DesignService) { }

  onChange({ value }) {
    const colorCode = `#${value}`;
    this.invalid = !this.pattern.test(colorCode);
    this.service.color.next(colorCode)
  }
}
