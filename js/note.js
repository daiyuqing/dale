$(function(){
			$("html").niceScroll({cursorcolor: "#ccc",scrollspeed: 20,cursorwidth: "5px",smoothscroll: true});
			$(".wrap-nav-item a").click(function(){
				$(".wrap-nav-item a").removeClass("active");
				$(this).addClass("active");
				var id=$(this).attr("href");
				var oTop=$(id).offset().top;
				$("body").animate({scrollTop:oTop-50+"px"},500);
				return false;
			});
			$(window).scroll(function(){
				var a=$(document).scrollTop();
				var index=$(".wrap-content-item").filter(function(){
					return $(this).offset().top>=a;
				}).index();
				$(".nav").find("a").removeClass("active");
				$(".nav").find("a:eq("+index+")").addClass("active");
			});
			var flag=1;
			$(".icon-menu").click(function(){
				if ($(window).width()>800) {return false;}
				if (flag==1) {
				$(".line1").css({"transform":"rotate(45deg)"});
				$(".line2").css("opacity", 0);
				$(".line3").css({"transform":"rotate(-45deg)"});
				$(".wrap-nav-item").show();
				$(".nav").css({"height":"100%","opacity":0.9});
				flag=0;
				}else{
					$(".line1").css({"transform":"rotate(0)"});
				$(".line2").css("opacity", 1);
				$(".line3").css({"transform":"rotate(0)"});
				$(".wrap-nav-item").hide();
				$(".nav").css({"height":"50px","opacity":1});
				flag=1;
				}
			});
			$(".nav-item a").click(function(){
				if ($(window).width()>800) {return false;}
				$(".icon-menu").trigger("click");
				flag=1;
				return false;
			});
			$(window).resize(function(){
				if ($(this).width()>800) {
					$(".nav").css({"height":"100%","opacity":0.9});
					$(".wrap-nav-item").show();
				}else{
					$(".wrap-nav-item").hide();
				$(".nav").css({"height":"50px","opacity":1});
				}
			});
		});