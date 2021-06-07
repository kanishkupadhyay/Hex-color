import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { DesignService } from '../service/design.service';

@Component({
  selector: 'app-right-slide',
  templateUrl: './right-slide.component.html',
  styleUrls: ['./right-slide.component.css']
})
export class RightSlideComponent {

  constructor(private service: DesignService) { }
  @Input()dynColor='#0000cc'
  // @ViewChild('box') box
  
}
