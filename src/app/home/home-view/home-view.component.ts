import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  ngOnInit(): void {


    $(document).ready(function(){
      var mouseX, mouseY;
      var ww = $( window ).width();
      var wh = $( window ).height();
      var traX, traY;
      $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;
        console.log(traX);
        $(".title2").css({"background-position": traX + "%" + traY + "%"});
      });
    });
    
    
    /*$(document).ready(function () {


      //FLEXSLIDER
      $('.flexslider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
      });




    })*/

  }

}
