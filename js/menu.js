// JavaScript Document
$(document).ready(function() {
    $(window).scroll(function(){
		var st = $(document).scrollTop();          /*获取滚动条偏移*/
		var menu = $("#menu");
		var items = $("#content").find(".Floor");  /*获取所有class="Floor"的元素*/
		
		var currentId = "";                        /*当前所处楼层id字符串*/
		items.each(function() {                    /*对items中所有元素执行以下函数，查找当前所处楼层id*/
            var f = $(this);                       /*获取当前所处楼层元素*/
			var ft = f.offset().top;               /*获取当前元素偏移*/
			if(st>ft-150){                         /*提早变换导航栏焦点，提高用户体验*/
				currentId = "#" + f.attr("id");    
			}else{
			   return false;	
			}
        });
		var currentLink = menu.find(".current");    /*找到menu焦点*/
		if(currentId && currentLink.attr("href")!=currentId){
	    	currentLink.removeClass("current");                     /*删除焦点*/
	        menu.find("[href="+currentId+"]").addClass("current");  /*通过楼层元素的id与menu中<a>元素的href之间的关系找到需要新增焦点的元素*/
		}
		
	})
});