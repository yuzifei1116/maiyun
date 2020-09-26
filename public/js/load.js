$(document).ready(function(){
		$("body").append("<div id='backtop'></div>")
		$("#backtop").on("click",function(){$("html,body").animate({scrollTop:0},1000);})
		window.onscroll=function(){
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				var pH=document.documentElement.clientHeight;
				var mb=$("#backtop")
				if(scrollTop>=pH){
					mb.show()
				}else{
					mb.hide()
				}
			
			};	
	 $("#backtop").bind("click",function(){
		$("html,body").animate({scrollTop:0},500)
	return false; 
	 })


		$(".Tab").Tab_()
			if ($("#playbanner").length>0)
	{
			$("#playbanner").ZHYslider({
					fullscreen	:false,
					arrow		:false,		
					speed: 500, 
					space: 2000,
					auto: true, //自动滚动
					affect:'scrollx',
					ctag: '.Slide_'
			})
		
		
	}

		$('#news .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})
		$('#docColumn .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})
		$('#photoshow .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})
	$("#PhotoShowGundong1").jcarousellite_gundong({btn:1,list:".PictureList1 li","visible":1,"auto":2500,"speed":300,"afterEnd":function(){}})
	$("#PhotoShowGundong2").jcarousellite_gundong({btn:1,list:".PictureList2 li","visible":1,"auto":2500,"speed":300,"afterEnd":function(){}})
	$("#PhotoShowGundong3").jcarousellite_gundong({btn:1,list:".PictureList3 li","visible":1,"auto":2500,"speed":300,"afterEnd":function(){}})
	$("#PhotoShowGundong4").jcarousellite_gundong({btn:1,list:".PictureList4 li","visible":2,"auto":2500,"speed":300,"afterEnd":function(){}})
	$("#PhotoShowGundong5").jcarousellite_gundong({btn:1,list:".PictureList5 li","visible":1,"auto":2500,"speed":300,"afterEnd":function(){}})
	$("#PhotoShowGundong6").jcarousellite_gundong({btn:1,list:".PictureList6 li","visible":1,"auto":2500,"speed":300,"afterEnd":function(){}})

		if ($("#banner").length>0)
		{
				$("#banner").ZHYslider({
						fullscreen	:false,
						arrow		:true,		
						speed: 1200, 
						space: 6000,
						auto: true, //自动滚动
						affect:'fade',
						ctag: '.Slide_'
				})
		}
	
	$('.photoshow').roundabout({
		btnNext: '#ZhiYe .move_rights',
	btnNextCallback:function(){
		var indexs	=	$(this).find(".roundabout-in-focus").index()
		$(".photoshow_select").find("a:eq("+indexs+")").addClass("change").siblings().removeClass("change")
	},
	autoplay: true,
	autoplayDuration: 4000,
	autoplayPauseOnHover: true,
	autoplayCallback: function() {
		var indexs	=	$(this).find(".roundabout-in-focus").index()
		$(".photoshow_select").find("a:eq("+indexs+")").addClass("change").siblings().removeClass("change")
	},
	btnPrev: '#ZhiYe .move_lefts',
	btnPrevCallback:function(){
		var indexs	=	$(this).find(".roundabout-in-focus").index()
		$(".photoshow_select").find("a:eq("+indexs+")").addClass("change").siblings().removeClass("change")
		
	},
	duration:300});

	$('.photoshow2').roundabout({
		btnNext: '#ZhiYe2 .move_rights',
	btnNextCallback:function(){
		var indexs	=	$(this).find(".roundabout-in-focus").index()
		$(".photoshow_select2").find("a:eq("+indexs+")").addClass("change").siblings().removeClass("change")
	},
	autoplay: true,
	autoplayDuration: 4000,
	autoplayPauseOnHover: true,
	autoplayCallback: function() {
		var indexs	=	$(this).find(".roundabout-in-focus").index()
		$(".photoshow_select2").find("a:eq("+indexs+")").addClass("change").siblings().removeClass("change")
	},
	btnPrev: '#ZhiYe2 .move_lefts',
	btnPrevCallback:function(){
		var indexs	=	$(this).find(".roundabout-in-focus").index()
		$(".photoshow_select2").find("a:eq("+indexs+")").addClass("change").siblings().removeClass("change")
		
	},
	duration:300});
	
	
	$.fn.hovers();
	$.fn.wowanimate_list();
	$.fn.openintr();

})





//滚动
		$.fn.jcarousellite_gundong=function(options ){
			var self=$(this);
			if (self.length==0) return false;
			var items=options.list,config;
			if (self.find(items).length<=options.visible) 
			{
				var width=self.find(options.list).parent().outerWidth()
				self.css({"margin":"0 auto","width":width})
			return false;	
			}
			else
			{
				var liobj=self.find(options.list)
				var width=liobj.outerWidth()
				var margin=parseInt(liobj.css("margin-left"))+parseInt(liobj.css("margin-right"));
				width+=margin
				self.css({"margin":"0 auto","width":width*options.visible})
			}
			self.css("overflow","visible");
			
			if (self.find(items).is("div"))
			{
				self.find(items).wrap("<li></li>");
				self.find(items).parent().wrapAll("<ul class='templist'></ul>");		
				items=".templist li"
			}
			self.find(items).parent().wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
			
			
			if (options.btn!=0)
			{
				self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left disabled" ><span></span></a>')
			}
			
			self.find(".gundong").each(function(index){
				
				config={
							btnPrev: $(this).find(".move_left:eq("+index+")"),
							btnNext: $(this).find(".move_right:eq("+index+")"),
							visible:1,
							auto: 2500 ,
							speed: 300
						}	
				if (options.btn==0)		
				{
					$.extend(config, {btnPrev:null,btnNext:null});							
				}
				$.extend(config, options);
				$(this).find(".jCarouselLite:eq("+index+")").jCarouselLite(config);	
			})
		}
		
	
		
$.fn.wowanimate_list=function(){
	
	if (typeof(WOW)=='undefined') {return;}
	if ((/msie [6|7|8|9]/i.test(navigator.userAgent))){return;}




	var news	=	$("#news");
	if (news.length>0)
	{
		news.css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}

	
	var PhotoShowa	=	$("#PhotoShowa");
	if (PhotoShowa.length>0)
	{
		PhotoShowa.find("li").each(function(index, element) {
				$(this).css("visibility","hidden").addClass("wow lightSpeedIn").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.2+"s","data-wow-delay":100*(index+1)+"ms"})
        });
	}
	var news	=	$("#news");
	if (news.length>0)
	{
		news.find("li").each(function(index, element) {
		news.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
        });
	}

	var download	=	$("#download");
	if (download.length>0)
	{
		download.find("a").each(function(index, element) {
				$(this).css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.2+"s","data-wow-delay":100*(index+1)+"ms"})
        });
	}

	
	var ZhiYe	=	$("#ZhiYe");
	if (ZhiYe.length>0)
	{
		ZhiYe.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}
	
	var PhotoShow1	=	$("#PhotoShow1");
	if (PhotoShow1.length>0)
	{
		PhotoShow1.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}
	var PhotoShow2	=	$("#PhotoShow2");
	if (PhotoShow2.length>0)
	{
		PhotoShow2.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}
	var PhotoShow3	=	$("#PhotoShow3");
	if (PhotoShow3.length>0)
	{
		PhotoShow3.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}
	
	var gonggao	=	$("#gonggao");
	if (gonggao.length>0)
	{
		gonggao.css("visibility","hidden").addClass("wow fadeInDown").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}



	var qqlist	=	$("#qqlist");
	if (qqlist.length>0)
	{
		qqlist.find("li").each(function(index, element) {
				$(this).css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.8+"s","data-wow-delay":50*(index+1)+"ms"})
        });
	}
	
	var qunlist	=	$("#qunlist");
	if (qunlist.length>0)
	{
		qunlist.find("li").each(function(index, element) {
				$(this).css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.1+"s","data-wow-delay":50*(index+1)+"ms"})
        });
	}

	var playbanner	=	$("#playbanner");
	if (playbanner.length>0)
	{
		playbanner.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.8+"s","data-wow-delay":200+"ms"})
	}

	
	var ZhuangBei	=	$("#ZhuangBei");
	if (ZhuangBei.length>0)
	{
		ZhuangBei.find(".PicList li").each(function(index, element) {

				$(this).css("visibility","hidden").addClass("wow flipInY").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.2+"s","data-wow-delay":50*(index+1)+"ms"})
      });
	}

	
	var ZhuangBei	=	$("#ZhuangBei");
	if (ZhuangBei.length>0)
	{
		ZhuangBei.find(".PicList2 li").each(function(index, element) {$(this).css("visibility","hidden").addClass("wow flipInX").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.2+"s","data-wow-delay":50*(index+1)+"ms"})
      });
	}

	
	var ZhuangBei	=	$("#ZhuangBei");
	if (ZhuangBei.length>0)
	{
		ZhuangBei.find(".PicList3 li").each(function(index, element) {

				$(this).css("visibility","hidden").addClass("wow flipInY").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.2+"s","data-wow-delay":50*(index+1)+"ms"})
      });
	}

	
	var Game_show	=	$("#Game_show");
	if (Game_show.length>0)
	{
		Game_show.find("h3").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.5+"s","data-wow-delay":400+"ms"})
		Game_show.find(".PicList2").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.5+"s","data-wow-delay":500+"ms"})
		Game_show.find(".PicList3").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.5+"s","data-wow-delay":500+"ms"})
	}



		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
			if (typeof(WOW)!='undefined')
			{new WOW().init();}
		};	
	
}				
//悬停效果
$.fn.hovers=function(){
		$("#menu ul li a").append('<i class="a_bg"></i>')
		$("#menu ul li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".a_bg",					//应用对象
						  "",//初始CSS
						  "height:100%;",		//mouseenter动画CSS
						  "height:0;",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
	
		/*友情链接悬停*/
		$("#links").bind("mouseenter",function(){
			$(this).find("dd").stop().slideDown(150)
			
			}).bind("mouseleave",function(){
				
			$(this).find("dd").slideUp(150)		
		})
		/*播放视频*/		 
		$("#btn_play").one("click",function(){
			var videourl=$(this).attr("data-file")	
			var autoplay=$(this).attr("data-autoplay")	
			var playobj=$(this).attr("data-playobj")
			if ($(playobj).length==0) return false;
			
			if (videourl)
			{
				
			var w=$(playobj).outerWidth()
			var h=$(playobj).outerHeight()
				
			var writehtml='<object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+'" height="'+h+'">'
				writehtml+='<param name="movie" value="flash/Flvplayer.swf">'
				writehtml+='<param name="quality" value="high">'
				writehtml+='<param value="transparent" name="wmode">'
				writehtml+='<param name="allowFullScreen" value="true">'
				writehtml+='<param name="FlashVars" value="vcastr_file='+videourl+'&BufferTime=3&IsAutoPlay='+autoplay+'">'
				writehtml+='<embed src="flash/Flvplayer.swf" wmode="Opaque" allowfullscreen="true" flashvars="vcastr_file='+videourl+'&IsAutoPlay='+autoplay+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>'
				writehtml+='</object>'
				
				$(this).stop(true,false).animate({opacity: 0}, 500,function(){$(playobj).html(writehtml)})
			}
			
			
		})	
		$(".btn_down,.btn_payment").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".line",					//应用对象
						  "left:-350px;top:-100px;",//初始CSS
						  "left:150px;",		//mouseenter动画CSS
						  "",			//mouseleave动画css
						  "1000",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
			
			
			
		
	
			
	$(".PhotoList li .photo").append('<i class="icon_jiaos icon_jiaos1x1"></i><i class="icon_jiaos icon_jiaos1x2"></i><i class="icon_jiaos icon_jiaos2x1"></i><i class="icon_jiaos icon_jiaos2x2"></i>')
		$(".PhotoList li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "figcaption",					//应用对象
						  "",//初始CSS
						  "bottom:0;",		//mouseenter动画CSS
						  "bottom:-30px;",			//mouseleave动画css
						  "500",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],[
						  ".icon_jiaos",					//应用对象
						  "display:block;opacity:0;",//初始CSS
						  "margin:0;opacity:1;",		//mouseenter动画CSS
						  "margin:8px;opacity:0;",			//mouseleave动画css
						  "700",					//mouseenter 时间
						  "600"						//mouseleave 时间
					  ],
					  [
						  ".photo img",					//应用对象
						  "",//初始CSS
						  "opacity:0.7;width:120%;height:120%;margin-left:-10%;margin-top:-5%;",		//mouseenter动画CSS
						  "opacity:1;width:100%;height:100%;margin-left:0;margin-top:0;",			//mouseleave动画css
						  "500",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ],
				  set_class:"hover"
				}
				
			)
			
	
		$(".PictureList li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "figcaption",					//应用对象
						  "",//初始CSS
						  "bottom:0;",		//mouseenter动画CSS
						  "bottom:0px;",			//mouseleave动画css
						  "500",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".photo img",					//应用对象
						  "",//初始CSS
						  "width:100%;height:100%;",		//mouseenter动画CSS
						  "width:100%;height:100%;",			//mouseleave动画css
						  "500",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ],
				  set_class:"hover"
				}
				
			)
			
	
	
	
		$("#video").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "img",					//应用对象
						  "",//初始CSS
						  "opacity:0.7;",		//mouseenter动画CSS
						  "opacity:1;",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
			
}

	
//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this);
			var select_=0;
			var classname=config.labselect.replace(".","")
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			
			
			self.each(function(index, element) {
							
				self=$(this);
						
						if (self.find(config.labselect).length==0) 
						{self.find(config.lilab+":eq(0)").addClass(classname);}
						self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{
								self.siblings(config.Tabname+":eq("+index+")").hide();
							}
						});
						
						self.find(config.lilab).bind(config.labaction+".action",function(){
							
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated")){ 
							return false;
							
							}

							
							if ($(this).is(config.labselect)) return false;
							var index2=$(this).siblings(config.labselect).index()
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
						})
						
						config.animate=function(index,index2,active){
							
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{
										dr="100%";
										dr2="-100%"
									}
									else
									{
										dr="-100%";
										dr2="100%"
									}
									var top=selfs.position().top
									
									
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
														
												})
									},config.animateTime)		
								
									}
									
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
									
									
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								
								
								case "none":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").show();
								break;	
								
							}
							
							
						}


            });

		}
//选项卡滑动
	$.fn.Tab_=function(){
		var obj=$(this),times=300,delaytime=null
		if (obj.length==0) return false;
		obj.each(function(index, element) {
			var tab_obj=$(this)
			var li=tab_obj.find("li.change");
			if (li.length>0)
			{
				tab_obj.find("li:last-child").after("<span class='lines'></span>")
				obj.css("position","relative");
				var width	=	li.outerWidth();
				var lileft	=	li.position().left+parseInt(li.css("margin-left"))
				var lineobj	=	tab_obj.find(".lines")
				lineobj.css({"width":width,"left":lileft});
				
				tab_obj.find("li").bind("mouseenter",function(){
						clearTimeout(delaytime)
						var width	=	$(this).outerWidth();
						var left=$(this).position().left+parseInt($(this).css("margin-left"))
						lineobj.stop(true,false).animate({"width":width,"left":left},times)
				}).bind("mouseleave",function(){
					var self=$(this)
					delaytime=setTimeout(function(){
						if (!self.is(".change"))
						{
						var changeobj=self.siblings(".change")
						var left=changeobj.css("position","static").position().left+parseInt(changeobj.css("margin-left"));
						var width=changeobj.outerWidth()
						 lineobj.stop(true,false).animate({"width":width,"left":left},times)
						}
						
						
					},200)
				})
			}
		});	
	}

$.fn.hover_animate=function(obj){
	var time_delay=null,runlist=[],runlist_end	=[],create_var=[],set_var=[],self=$(this)
		if (self.length==0) return false;
		if (obj.aniobj.length==0) return false;
		if (obj.set_class=="" || typeof (obj.set_class)=="undefined") {$.extend(obj,{set_class:"hover"});	}
		if (typeof(obj.delaytime)!="number" || typeof(obj.delaytime)=="undefined"){$.extend(obj,{delaytime:100});	}
		var fn={
			csschange:function(val){
				if (val==""){return '';}
				if (val.indexOf("{")<0 || val.indexOf("}")<0 )
				{
					val=$.trim(val)
					var last_fh=val.lastIndexOf(';')
					if (last_fh+1==val.length)
					{
						val=val.substring(0,last_fh);
						val='{\''+val.replace(/\:/g,"':'").replace(/\;/g,"','")+'\'}';
					}
					else
					{   val='{\''+val.replace(/\:/g,"':'").replace(/\;/g,"','")+'\'}';	}
				}
				return $.trim(val);
			}	
		}
		$.each(obj.aniobj,function(index,val){
			if (val.length<6) return false;
			var setobj			=	val[0],
				setobj_			=	setobj.replace(/\.|\ |\>/g,""),
				animate_css		=	fn.csschange(val[1]),
				animate_start	=	fn.csschange(val[2]),
				animate_end		=	fn.csschange(val[3]),
				animate_easing	=	val[4],
				animate_easing2	=	val[5],
				run				=	'',
				run_end			=	''
				
				if (setobj=="") return false;
				create_var.push('var _'+setobj_+'')
				setobj=="self" ? set_var.push('_'+setobj_+'=[self]'): set_var.push('_'+setobj_+'=[self].find("'+setobj+'")')
				if (animate_css=="" && animate_start=="") return false;
				if (animate_css!="" && animate_start!="")
				{run='_'+setobj_+'.css('+animate_css+').stop(true,false).animate('+animate_start+','+animate_easing+')'}		
				else if (animate_css=="" && animate_start!="")
				{run='_'+setobj_+'.stop(true,false).animate('+animate_start+','+animate_easing+')'}
				else if (animate_css!="" && animate_start=="")
				{run='_'+setobj_+'.css('+animate_css+')'}
				
				runlist.push(run)
				if (animate_end!="")
				{	
					run_end='_'+setobj_+'.animate('+animate_end+','+animate_easing2+')'
					runlist_end.push(run_end)
				}
				
		})
		var selfobj=null;
		self.unbind(".s")
		$.each(create_var,function(index,val){eval(val);})
		self.bind("mouseenter.s",function(){
			selfobj=$(this)
			$.each(set_var,function(index,val){eval(val.replace("[self]","selfobj"));})
			clearTimeout(time_delay)	
			time_delay=setTimeout(function(){
					if(!selfobj.is(":animated"))
					{
						selfobj.addClass(obj.set_class);
						$.each(runlist,function(index,val){eval(val)})	;
					}
			},obj.delaytime)
		})
		.bind("mouseleave.s",function(){
			clearTimeout(time_delay)	
			if (selfobj.is("."+obj.set_class))
			{		
				$.each(runlist_end,function(index,val){eval(val);})	
				selfobj.removeClass(obj.set_class);
			}
		})
}	


jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});