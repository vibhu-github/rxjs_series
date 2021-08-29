import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exclusive:boolean=false;

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.exclusive.subscribe(res=>{this.exclusive=res})
  }

}
