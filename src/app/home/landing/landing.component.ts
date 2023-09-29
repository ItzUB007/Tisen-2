import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  header = $('.header');
	menuActive:any;
	menu = $('.menu');
	burger = $('.burger_container');


  ngOnInit(): void {
    
    this.header = $('.header');
    this.menuActive = false;
    this.menu = $('.menu');
    this.burger = $('.burger_container');
    
	

	
	this.setHeader();

	$(window).on('resize', function()
	{
		if($(window).scrollTop()! > 100)
		{
      $('.header').addClass('scrolled');
		}
		else
		{
      $('.header').removeClass('scrolled');
		}
	});

	$(document).on('scroll', function()
	{
    if($(window).scrollTop()! > 100)
		{
      $('.header').addClass('scrolled');
		}
		else
		{
      $('.header').removeClass('scrolled');
		}	
  });

	/* 

	2. Set Header

	*/

		

	/* 

	3. Init Menu

  */
	

	document.querySelector('.menu_close')!.addEventListener('click', (e:any)=>{
		this.closeMenu();
	})


		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.burger_container').length)
			{
				document.querySelector('.burger_container')!.addEventListener('click', (e:any)=>
				{
					if(this.menuActive)
					{
						this.closeMenu();
					}
					else
					{
						this.openMenu();

						/*$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								this.closeMenu();
							}
						});*/
					}
				});
			}
		}
	}

	openMenu()
	{
		this.menu.addClass('active');
		this.menuActive = true;
	}

	closeMenu()
	{
		this.menu.removeClass('active');
		this.menuActive = false;
	}

  setHeader(){
    if($(window).scrollTop()! > 100)
		{
			this.header.addClass('scrolled');
		}
		else
		{
			this.header.removeClass('scrolled');
		}
  }




  }

