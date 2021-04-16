$(function(){
		
		/*팝업*/

		$(".close").click(function(){
			$("#popUp").hide();
		});





		/*지앤비*/
		
	//	$("#gnb .main a").hover(function(){
	//		$(this).next().slideDown();
	//	});
	//	
	//	$("#gnb .main a").mouseleave(function(){
	//		$(this).next().slideUp();
	//	});


		
		 $("#gnb .main").mouseenter(function(){      
         $(this).children(".subMenu").stop().slideDown();
      });
   
      $("#gnb .main").mouseleave(function(){
         $(this).children(".subMenu").stop().slideUp();
      });





		//	var indexNum=0;
		//		$(".menu li").mouseenter(function(){
		//			indexNum = $(this).index(); //해당 요소의 인덱스번호를 가져와서 변수에 넣는다.
		//			console.log(indexNum);
		//			$("subMenu").eq(indexNum).animate({top:0},500);
		//		});
		//		$("button").mouseleave(function(){
		//			$(".subMenu").animate({top:"-300px"});
		//		});


		/*슬라이드*/

			var n=0;
			setInterval(function(){

				n++;
				if(n==6){
					$('.imgS').css({left:0});
					n=1;
				}

				$('.imgS').animate({left:-1150*n},1000);
					
				//icon         
				$('.icon img').attr('src', 'images/ico_slider.png');
				$('.icon li:eq('+ n +')').children('img').attr('src', 'images/ico_slider_on.png');
				
				if(n==5) {
					$('.icon li:eq(0)').children('img').attr('src', 'images/ico_slider_on.png');   
				}
			}, 4000); //setInterval 끝
		
	//	var n=0;
	//
	//	setInterval(function(){
	//		n++;
	//		if(n==5){
	//			$('.imgS').css({left:0});
	//			n=1;
	//		}
	//		$('.imgS').animate({left:-1150*n},1000);
	//		//icon
	//		
	//		$('.icon img').attr('src', 'images/ico_slider.png');
	//		$('.icon img:eq('+ (n+1) +')').attr('src', 'images/ico_slider_on.png');
	//	}, 4000); //setInterval 끝
	//


//		$("figure img").each(function(aa){ //0~4
//			$(this).css("left",1150*aa);
//		});
//		var num=0;
//		setInterval(function(){
//			$("figure img").each(function(aa){
//				var nowLeft = parseInt($(this).css("left")); 
//				var moveLeft = nowLeft - 1150;
//				$(this).animate({left:moveLeft},1000, function(){
//					$(".icon li img").attr("src","images/ico_slider.png");
//					num++;
//console.log(num);
//					$(".icon li img").eq(num%5).attr("src","images/ico_slider_on.png");
//					if(moveLeft<=-1150){
//						$(this).css("left",4600);	
//					}
//				});
//			});
//		}, 3000); //setInterval 끝
		
	


		
		
	
});	//펑션문 끝