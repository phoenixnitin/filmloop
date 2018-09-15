import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  constructor(){}
  ngOnInit(){
    let docHeight = jQuery(document).height();
    let floopHeight = jQuery("#filmloop").height();
    jQuery("#filmloop").css("margin-top", (docHeight - floopHeight)/2);
  }
  ngAfterViewInit(){
  }
}
