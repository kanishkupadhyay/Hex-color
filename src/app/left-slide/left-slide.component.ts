import { Component } from '@angular/core';
import { DesignService } from '../service/design.service';

@Component({
  selector: 'app-left-slide',
  templateUrl: './left-slide.component.html',
  styleUrls: ['./left-slide.component.css']
})
export class LeftSlideComponent {
  invalid:boolean=false
  constructor(private service: DesignService) { }

  onChange(colorName) {
    this.service.color.next(`#${colorName.value}`)
    if (colorName.value == '') {
      this.service.color.next('#0000cc')
    }
if(colorName.value.includes('z')){
  this.invalid=true
}
  }
}
