//等待HTML css 图片等资源完后触发
$(function(){
	
	var num = 0;
	//$(document)代表获取全局
	//mousewheel()鼠标的滚轮事件
	$(document).mousewheel(function(e,d){
		//形参e，d是鼠标滚轮事件自带的两个形参(可以用可以不用)
		
		//e是鼠标滚轮事件可以调用的方法
		//d是一个下标(代表你现在在第几个页面)
		
		
		console.log('e ==>,e')
		console.log('d ==>,d')
		
		
		
		//setTimeout 是一个一次性的定时器
		var timer = setTimeout(function(){
			//d原本是一个负值，-=把它变成正数
			num -= d //(num = num-d)
			console.log('num ==>',num)
			
			//判断最大滚动值
			if(num>6){
				num = 6
			}
			//判断最小滚动值
			if(num<0){
				num = 0
			}
			//siblings()找同胞元素
			//stop()停止动画
			//animate是一个写在js jQ的动画
			
			//这句话的意思是 在li中用eq(num)找到当前是在哪个页面,找到之后给它添加一个current的class类名,然后用siblings找到他的同胞元素，看看谁有current这个类名,有的话就用removeClass把其他人的current类名删除掉
			$('.list>ul>li').eq(num).addClass('current').siblings().removeClass('current')
			$('.container').stop().animate({top:-num * 100 +'%'},500)//500是动画效果结束时长，代表0.5秒
			$('.container>div').eq(num).addClass('no').siblings().removeClass('no')
		})
	})
	$('.list>ul>li').click(function(){
		//$(this)就是代表$('.list>ul>li')
		num = $(this).index()
		$(this).eq(num).addClass('current').siblings().removeClass('current')
		$('.container').stop().animate({top:-100 +'%'},500)
		$('.container>div').eq(num).addClass('no').siblings().removeClass('no')
	})
})