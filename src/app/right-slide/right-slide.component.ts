import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DesignService } from '../service/design.service';

@Component({
  selector: 'app-right-slide',
  templateUrl: './right-slide.component.html',
  styleUrls: ['./right-slide.component.css']
})
export class RightSlideComponent implements AfterViewInit {

  constructor(private service: DesignService) { }

  @ViewChild('box') box
  ngAfterViewInit() {
    this.service.color.subscribe(data => this.box.nativeElement.style.background = data)
  }

}
