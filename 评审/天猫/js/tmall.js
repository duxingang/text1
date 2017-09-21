window.onload = function(){
	let lis = $('.lis');
	let headdown = $('.head-down');
	let lunbo = $('.lunbo')[0];
	let lunbodian = $('.lunbodian', lunbo);
	let dingsearch = $('#ding-search');
	let stairway = $('#stairway');
	let stairwaylis = document.querySelectorAll('#stairway>li[active]');
	let backTop = document.querySelectorAll('#stairway>li')[8];
	let floor = document.querySelectorAll('.floor');
	let cebian = $('#cebian');
	let lias = $('.lias', cebian);
	let cetanchu = $('.bannertanchu', cebian);
	let banner = $('.banner')[0];
	let imgBox = $('.bannertu')[0];
	let imgs = $('li', imgBox);	
	let t;
	let now = 0;
	let next = 0;
	let num = 0;
	let flog = true;
	let flag = true;

	//header
	for (let i = 0; i < lis.length; i++) {
		lis[i].onmouseover = function() {
			headdown[i].style.display = 'block'
		}
		lis[i].onmouseout = function() {
			headdown[i].style.display = 'none'
		}
	}

	//banner
	for (let i = 0; i < lias.length; i++) {
		lias[i].onmouseover = function() {
			cetanchu[i].style.display = 'block'
		}
		lias[i].onmouseout = function() {
			cetanchu[i].style.display = 'none'
		}
	}

	for (let i = 0; i < lunbodian.length; i++) {
		lunbodian[i].onmouseover = function() {
			animate(imgs[now], {display: 'none'},0);
			animate(imgs[i], {display: 'block'},0);
			css(lunbodian[now], {background: ''});
			css(lunbodian[i], {background: '#fff'});
			now = next = i;
		};
	}

	t = setInterval(fn, 3000);

	banner.onmouseover = function() {
		clearInterval(t);
	};
	banner.onmouseout = function() {
		t = setInterval(fn, 3000);
	};

	function fn() {
		next++;
		if (next == imgs.length) {
			next = 0;
		}
		animate(imgs[now], {display:'none'},0);
		animate(imgs[next], {display: 'block'},0);
		css(lunbodian[now], {background: ''});
		css(lunbodian[next], {background: '#fff'});
		now = next;
	}

	let fS = [];
	for(let i = 0; i<floor.length; i++){
		let fT = floor[i].offsetTop;
		fS.push(fT);
	}
	let wH = window.innerHeight;

	let colors = ['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#ff0036'];

	window.onscroll = function(){
		let bSt = document.body.scrollTop;
		if(bSt>wH){
			if(flag){
				flag = false;
				dingsearch.style.height = '50px';
				{animate(stairway,{left:'2'},300);}
			}
		}else{
			if(!flag){
				flag = true;
				dingsearch.style.height = '0';
				{animate(stairway,{left:'-50'},300);}
			}
		}
		for(let i = 0;i < fS.length;i++){
			if(bSt+100>fS[i]){
				stairwaylis[num].style.background = '';
				stairwaylis[i].style.background = `${colors[i]}`;
				num = i;
			}else{
				stairwaylis[i].style.background = '';
			}
			stairwaylis[i].onclick = function(){
				animate(document.body,{scrollTop:fS[i]-50});
			}
		}
	}
	backTop.onclick = function(){
		animate(document.body,{scrollTop:0});
	}

	let rD = $('.dingwei');
	let rDli = document.querySelectorAll('.dingwei>li[point]');
	let fD = document.querySelectorAll('.dingwei>li>.fD');
	rDli.forEach((value,index)=>{
		value.onmouseenter = function(){
			fD[index].style.display = 'block';
			animate(fD[index],{right:'35',opacity:1},300)
		}
		value.onmouseleave = function(){
			animate(fD[index],{right:'70',opacity:0,display:'none'},300)
		}
	})
}