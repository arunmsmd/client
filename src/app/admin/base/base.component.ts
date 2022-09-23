import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: [
    './base.component.scss',
    '../../../assets/theme/style.css',
    '../../../assets/modified.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdminBaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('body').addClass('fixed-navbar fixed-sidebar fixed-footer');
    this.fixWrapperHeight()
    this.setBodySmall();
    $('#side-menu').metisMenu();
    $('.hide-menu').on('click', function (event:any) {
      event.preventDefault();
      if ($(window).width() < 769) {
        $("body").toggleClass("show-sidebar");
      } else {
        $("body").toggleClass("hide-sidebar");
      }
    });
    $('.modal').appendTo("body");
    window.addEventListener("resize", this.resize);
  }
  fixWrapperHeight():void{
    // console.log('fix wrapper')
    // Get and set current height
    var headerH = 62;
    var navigationH = $("#navigation").height();
    var contentH = $(".content").height();

    // Set new height when contnet height is less then navigation
    if (contentH < navigationH) {
      $("#wrapper").css("min-height", navigationH + 'px');
    }

    // Set new height when contnet height is less then navigation and navigation is less then window
    if (contentH < navigationH && navigationH < $(window).height()) {
      $("#wrapper").css("min-height", $(window).height() - headerH + 'px');
    }

    // Set new height when contnet is higher then navigation but less then window
    if (contentH > navigationH && contentH < $(window).height()) {
      $("#wrapper").css("min-height", $(window).height() - headerH + 'px');
    }
  }
  setBodySmall():void {
    // console.log('set body')
    const body = $('body');
    if (window.innerWidth < 769) {
      body.addClass('page-small');
    } else {
      body.removeClass('page-small');
      body.removeClass('show-sidebar');
    }
  }
  resize() {
    this.setBodySmall()
    this.fixWrapperHeight()
  }

}
