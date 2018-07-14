import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  constructor(){}
  ngOnInit(){
    let winHeight = jQuery(window).height();
    let winWidth = jQuery(window).width();
    let floopHeight = jQuery("#filmloop").height();
    jQuery("#filmloop").css("margin-top", (winHeight - floopHeight)/2);
    let memRangeWidth = jQuery("#mem-range").width();
    jQuery("#mem-range").css("margin-left", (winWidth-memRangeWidth-40)/2);
    jQuery(".container-block").height(jQuery(window).height());
  }
  ngAfterViewInit(){
  }
}

