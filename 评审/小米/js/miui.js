/*
* @Author: VAIO
* @Date:   2017-08-14 10:16:26
* @Last Modified by:   VAIO
* @Last Modified time: 2017-09-21 22:56:20
*/

'use strict';

window.onload = function(){
	let gouwuches = $('.gouwuche');
	let goucang = $('#gou-cang');
	let daqu = $('.daqu')[0];
	let lis = $('.lis',daqu);
	let navform = $('.nav-form')[0];
	let liss = $('.liss',navform);
	let searchlan = $('.searchlan')[0];
	let submit = $('.search')[0];
	let xiaomimix = $('.xiaomimix')[0];
	let rgznds = $('.rgznds')[0];
	let searchcang = $('.search-cang')[0];

	//header
	gouwuches[0].onmouseenter = function(){
		goucang.style.height = '100px';
		gouwuches[0].style.background = '#fff';
	}
	gouwuches[0].onmouseleave = function(){
		goucang.style.height = '0px';
		gouwuches[0].style.background = '#424242';
	}
	// goucang.onmouseover = function(){
	// 	goucang.style.height = '100px';
	// 	gouwuches[0].style.background = '#fff';
	// 	gouwuches[0].style.color = '#ff6700';
	// }
	// goucang.onmouseout = function(){
	// 	goucang.style.height = '0px';
	// 	gouwuches[0].style.background = '#424242';
	// 	gouwuches[0].style.color = '#b0b0b0';
	// }
	
	//nav
	let navcang = document.querySelectorAll('.nav-cang');
	for(let i = 0; i < liss.length; i++){
		liss[i].onmouseover = function(){	
			navcang[i].classList.add('xiabufen');
		}
		liss[i].onmouseout = function(){			
			navcang[i].classList.remove('xiabufen');
		}
	}

	//搜索栏
	searchlan.onfocus = function(){
		searchlan.classList.add('searchyiru')
		submit.classList.add('searchyiru')
		xiaomimix.classList.add('none')
		rgznds.classList.add('none')
		searchcang.classList.add('block')
	}
	searchlan.onblur = function(){
		searchlan.classList.remove('searchyiru')
		submit.classList.remove('searchyiru')
		xiaomimix.classList.remove('none')
		rgznds.classList.remove('none')
		searchcang.classList.remove('block')
	}

	//banner aside
	for(let i = 0; i < lis.length; i++){
		lis[i].onmouseover = function(){
			let cetanchu = this.getElementsByClassName('cetanchu')[0];
			cetanchu.style.display = 'block';
			this.style.background = '#ff6700';
		}
		lis[i].onmouseout = function(){
			let cetanchu = this.getElementsByClassName('cetanchu')[0];
			cetanchu.style.display = 'none';
			this.style.background = 'rgba(000,000,000,0)';
		}
	}

	//banner
	let banner = $('#banner');
	let imgBox = $('.anner')[0];
	let imgs = $('li',imgBox);
	let lunbo = $('.lunbo')[0];
	let lunbodian = $('li',lunbo);
	let back = $('.back',banner)[0];
	let forward = $('.forward',banner)[0];
	let flag = true;
	let num = 0;
	let t;
	let now=0;
	let next=0;

	for(let i=0;i<lunbodian.length;i++){
		lunbodian[i].onclick = function(){
			animate(imgs[next],{display:'none'},0)
			animate(imgs[i],{display:'block'},0)
			css(lunbodian[now],{'background':''})
			css(lunbodian[i],{'background':'rgba(255,255,255,0.7)'})
			now = next = i;
		}
	}

	t = setInterval(auto,4000);

	banner.onmouseover = function(){
		clearInterval(t)
	}
	banner.onmouseout = function(){
		t = setInterval(auto,4000);
	}

	function auto(){
		next++;
		if(next == imgs.length){
			next = 0;
		}
		animate(imgs[now],{display:'none'},0)
		animate(imgs[next],{display:'block'},0,function(){flag = true})
		css(lunbodian[now],{'background':''})
		css(lunbodian[next],{'background':'rgba(255,255,255,0.7)'})
		now = next;
	}
	function toau(){
		next--;
		if(next == -1){
			next = imgs.length-1;
		}
		animate(imgs[now],{display:'none'},0)
		animate(imgs[next],{display:'block'},0,function(){flag = true})
		css(lunbodian[now],{'background':''})
		css(lunbodian[next],{'background':'rgba(255,255,255,0.7)'})
		now = next;
	}

	//前进后退
	forward.onclick = function(){
		if(flag){
			flag = false;
			auto();
		}
	}
	back.onclick = function(){
		if(flag){
			flag = false;
			toau();
		}
	}

	//为你推荐
	let danpinqu = $('.danpinqu')[0];
	let Tback = document.querySelectorAll('.dian-left')[0];
	let Tforward = document.querySelectorAll('.dian-right')[0];
	let danpinqu1 = $('.danpinqu')[1];
	let Tback1 = document.querySelectorAll('.dian-left')[1];
	let Tforward1 = document.querySelectorAll('.dian-right')[1];
	weini(danpinqu,Tback,Tforward);
	weini(danpinqu1,Tback1,Tforward1);
	function weini(danpinqu,back,forward){
		let Dli = danpinqu.childElementCount;
		let DliW = danpinqu.firstElementChild.offsetWidth + parseInt(getComputedStyle(danpinqu.firstElementChild,null).marginRight)
		let num = Dli/5;
		let index = 0;
		let flag = true;
		danpinqu.style.width = `${DliW*Dli}px`
		let Width = danpinqu.style.width
		let lefts = danpinqu.offsetLeft;

		back.onclick = function(){
			if(index == 0){
				back.classList.remove('pointer');
				return;
			}
			index--;
			danpinqu.style.left = `${-1240*index}px`;
			forward.classList.add('pointer');
			back.classList.add('pointer');
		}
		forward.onclick = function(){
			if(index == num-1){
				forward.classList.remove('pointer');
				return;
			}
			index++;
			danpinqu.style.left = `${-1240*index}px`;
			back.classList.add('pointer');
			forward.classList.add('pointer');
		}

		if(index == 0){
			forward.classList.add('pointer');
			back.classList.remove('pointer');
		}

	setInterval(move,4000);
		function move(){
			if(flag){
				if(index == num-1){
					flag = false;
					return;
				}
				index++;
			}else{
				if(index == 0){
					flag = true;
					return;
				}
			index--;
			}
			danpinqu.style.left = `${-1240*index}px`;
		}
	}

	let fBox1 = document.querySelectorAll('.yingjian-top')[1];
	let fUls1 = document.querySelectorAll('.yingjianqu')[1];
	let fBox2 = document.querySelectorAll('.yingjian-top')[2];
	let fUls2 = document.querySelectorAll('.yingjianqu')[2];
	let fBox3 = document.querySelectorAll('.yingjian-top')[3];
	let fUls3 = document.querySelectorAll('.yingjianqu')[3];

	change(fBox1,fUls1)
	change(fBox2,fUls2)
	change(fBox3,fUls3)

	function change(fBox,fUls){
		let fBtns = fBox.querySelectorAll('.yingjian-top>span');
		let Uls = fUls.querySelectorAll('.yingjianqu>ul');
		let num = 0;
		for(let i = 0; i<Uls.length; i++){
			fBtns[i].onmouseover = function(){
				Uls[num].style.display = 'none';
				Uls[i].style.display = 'block';
				num = i;
			}
		}
	}

	let Books1 = $('.Books')[0]
	let Books2 = $('.Books')[1]
	let Books3 = $('.Books')[2]
	let Books4 = $('.Books')[3]

	HP(Books1);
	HP(Books2);
	HP(Books3);
	HP(Books4);
	function HP(Book){
		let bUl = $('ul',Book)[0]
		let bLi = $('li',bUl)
		let bLis = bUl.childElementCount;
		let bliW = bUl.firstElementChild.offsetWidth + parseInt(getComputedStyle(bUl.firstElementChild,null).marginRight)
		// consloe.log(bliW)
		let bGo = $('.bGo',Book)[0]
		let bBack = $('.bBack',Book)[0]
		let bBtns = $('.bBtns',Book)[0]
		let bBtn = $('a',bBtns);
		let flag = true;
		let num = 0;
		let index = 0;

		bGo.onclick = function(){
			if(num == bLis-1){
				return;
			}
			num++;
			bUl.style.left = `${-bliW*num}px`;
			bBtn[num].style.cssText = `width:8px; height:8px; background:#fff; border:2px solid #ff6700`;
			bBtn[index].style.cssText = '';
			index = num;
		}
		bBack.onclick = function(){
			if(num == 0){
				return;
			}
			num--;
			bUl.style.left = `${-bliW*num}px`;
			bBtn[num].style.cssText = `width:8px; height:8px; background:#fff; border:2px solid #ff6700`;
			bBtn[index].style.cssText = '';
			index = num;
		}

		for(let i = 0; i<bBtn.length; i++){
			bBtn[i].onclick = function(){
				bUl.style.left = `${-bliW*i}px`;
				bBtn[num].style.cssText = ``;
				bBtn[i].style.cssText = `width:8px; height:8px; background:#fff; border:2px solid #ff6700`;
				num = index = i;
			}
		}
 	}
}

