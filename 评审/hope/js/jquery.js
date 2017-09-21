$(function(){
	//固定导航
	$('.fixed').click(function(){
		$('.fixed-cang').css({display:'block'});
	})
	$('.fixed-cuo span').click(function(){
		$('.fixed-cang').css({display:'none'});
	})

	//banner
	let bannerT = setInterval(bfn, 4000);
	let now = 0;
	let next = 0;
	function bfn(){
		next++;
		if(next==4){
			next=0
		}
		$('.ban li').eq(next).css({top:740});
		$('.ban li').eq(now).animate({top:-740},2000)
		$('.ban li').eq(next).animate({top:0},2000)
		now = next;
	}

	console.log(window.innerHeight)
	console.log(document.scrollTop)
	// $('.dianji').click(function(){

	// })
})