	$(function(){
		var on=true;
		$(".control-ul li:gt(0)").click(function(){
			$(this).addClass('active').siblings().removeClass("active");
			$(".tap1").addClass('tap1-move').removeClass("tap1");
			$(".tap2").addClass('tap2-move').removeClass("tap2");
			$(".tap3").addClass('tap3-move').removeClass("tap3");
			$(".tap4").addClass('tap4-move').removeClass("tap4");
			$(".tap p").addClass('move').removeClass("normal");
			$(".icon-box").hide();
			$(".tv-name").addClass("tv-name-move").removeClass("tv-name");
			$(".tv-photo").addClass("tv-photo-move").removeClass("tv-photo");
			if (on) {
				$(".ps").hide();
			}else{
				$(".ps").show();
			}
		});
		$(".control-ul li:eq(0)").click(function(){
			$(this).addClass('active').siblings().removeClass("active");
			$(".tap1-move").addClass("tap1").removeClass('tap1-move');
			$(".tap2-move").addClass("tap2").removeClass('tap2-move');
			$(".tap3-move").addClass("tap3").removeClass('tap3-move');
			$(".tap4-move").addClass("tap4").removeClass('tap4-move');
			$(".tap p").addClass('normal').removeClass("move");
			$(".icon-box").show(1000);
			$(".tv-name-move").addClass("tv-name").removeClass("tv-name-move");
			$(".tv-photo-move").addClass("tv-photo").removeClass("tv-photo-move");
			$(".skill").hide();
			$(".experience").hide();
			$(".hobby").hide();
			if (on) {
				$(".ps").hide();
			}else{
				$(".ps").show();
			}
		});
		$(".control-ul li:eq(1)").click(function(){
			$(".skill").fadeIn(2000);
			$(".experience").hide();
			$(".hobby").hide();
		});
		$(".control-ul li:eq(2)").click(function(){
			$(".skill").hide();
			$(".hobby").hide();
			$(".experience").slideDown(1000);
		});
		$(".control-ul li:eq(3)").click(function(){
			$(".skill").hide();
			$(".experience").hide();
			$(".hobby").slideDown(1000);
		});
		
		$(".tv-btn").click(function(){
			if (on) {
				$(".tv-blank-up").animate({"height":"50%"},500,function(){
					$(".tv-blank-up").css("border-left","0.05rem solid #fff");
				});
				$(".tv-blank-down").animate({"height":"50%"},500,function(){
					$(".tv-blank-down").css("border-left","0.05rem solid #fff");
				});
				on=false;
			}else{
				$(".tv-blank-up").css({
					"height":0,
					"border-left":"none"
				});
				$(".tv-blank-down").css({
					"height":0,
					"border-left":"none"
				});
				$(".ps").hide();
				on=true;
			}
		});
		$(".control-btn").click(function(){
			if (on) {
				$(".tv-blank-up").animate({"height":"50%"},500,function(){
					$(".tv-blank-up").css("border-left","0.05rem solid #fff");
				});
				$(".tv-blank-down").animate({"height":"50%"},500,function(){
					$(".tv-blank-down").css("border-left","0.05rem solid #fff");
				});
				on=false;
			}else{
				$(".tv-blank-up").css({
					"height":0,
					"border-left":"none"
				});
				$(".tv-blank-down").css({
					"height":0,
					"border-left":"none"
				});
				$(".ps").hide();
				on=true;
			}
		});
		// 点击问题显示回答
		$(".question-item").click(function(){
			var index=$(this).index();
			$(".answer p").hide();
			$(".answer-list").find(".answer-item:eq("+index+")").fadeIn(3000).siblings().hide();
		});
		// 关闭面试页
		$(".view-btn").click(function(){
			$(".view").hide();
			$(".container").show();
			$(".answer-item").hide();
			$(".answer-list p").css("opacity", 0);
		});
		// 面试
		$(".interview").click(function(){
			$(".container").hide();
			$(".view").show();
		});
	});