window.onload = function(){
	//固定导航
	let fixed = document.querySelector('.fixed');
	let fixedCang = document.querySelector('.fixed-cang');
	let fixedCuo = document.querySelector('.fixed-cuo');
	// window.onmousedown=function(e){
	// 	if(e.target.getAttribute("class")!="fixed"){
	// 		fixedCang.style.display='none';
	// 	}else{
	// 		fixedCang.style.display='block';
	// 	}
	// }
	fixed.onclick=function(){
		fixedCang.style.display='block';
	}
	fixedCuo.onclick=function(){
		fixedCang.style.display='none';
	}
	
	let about=document.querySelector('.about');
	let abouttop=about.offsetTop;
	let ABOUT=document.querySelector('.ABOUT');
	ABOUT.onclick=function(){
		animate(document.body,{scrollTop:abouttop},1000)
	}
	let ser=document.querySelector('.services');
	let sertop=ser.offsetTop;
	let SER=document.querySelector('.SER');
	SER.onclick=function(){
		animate(document.body,{scrollTop:sertop},1000)
	}
	let card=document.querySelector('.card');
	let cardtop=card.offsetTop;
	let FEA=document.querySelector('.FEA');
	FEA.onclick=function(){
		animate(document.body,{scrollTop:cardtop},1000)
	}
	let gall=document.querySelector('.gallery');
	let galltop=gall.offsetTop;
	let GALL=document.querySelector('.GALL');
	GALL.onclick=function(){
		animate(document.body,{scrollTop:galltop},1000)
	}
	let volun=document.querySelector('.volunteers');
	let voluntop=volun.offsetTop;
	let VOLUN=document.querySelector('.VOLUN');
	VOLUN.onclick=function(){
		animate(document.body,{scrollTop:voluntop},1000)
	}
	let MAIL=document.querySelector('.MAIL');
	MAIL.onclick=function(){
		animate(document.body,{scrollTop:mailtop},1000)
	}

	let dianji=document.querySelector('.dianji');
	dianji.onclick=function(){
		animate(document.body,{scrollTop:abouttop},600)
	}


	//banner
	let ban = document.querySelector('.ban');
	let bans = document.querySelectorAll('.ban li');	
	let bannerT = setInterval(bfn, 4000);
	let now = 0;
	let next = 0;
	function bfn(){
		next++;
		if(next == 4){
			next = 0;
		}
		bans[next].style.top = '740px';	
		animate(bans[now], {top:-740},1500,Tween.Linear);
		animate(bans[next], {top:0},1500,Tween.Linear);	
		now = next;
	}

	//ding
	let ding = $('.ding');
	// let ding = document.querySelector('.ding');
	let liuh = window.innerHeight*3;
	window.onscroll = function(){
		let gun = document.body.scrollTop;
		if(gun>liuh){
			ding[0].style.display = 'block';
		}else{
			ding[0].style.display = 'none';
		}
	}

	//nav
	// let line2Box=document.querySelector('.line2-box');
	// let hlis=document.querySelectorAll('.hangli');
	// let navT=setInterval(navFn,1000);
	// let nnow=0;
	// let nnext=0;
	// function navFn(){
	// 	nnext++;
	// 	if(nnext==3){
	// 		nnext=0
	// 	}
	// 	animate(hlis[nnow],{left:285},Tween.Linear);
	// 	animate(hlis[nnext],{left:285},Tween.Linear);
	// 	nnow=nnext;
	// }
	
	
	//footer1
	let f1lis = document.querySelectorAll('.footer1 li');
	let fcang = document.querySelectorAll('.f-cang');

	for(let i=0;i<f1lis.length;i++){
		f1lis[i].onmouseenter = function(){
			fcang[i].style.display = 'block';
			fcang[i].style.marginTop = `-86px`;		
		}
		f1lis[i].onmouseleave = function(){
			fcang[i].style.display = 'none';
			fcang[i].style.marginTop = `0px`;
		}
	}

	//handout
	let hangul=document.querySelector(".line2-box");
	let hangli=document.querySelectorAll(".line2-box .hangli");
	let hanglicang=document.querySelectorAll('.hanglicang');
	for(let i=0;i<hangli.length;i++){
		hangli[i].onmouseenter=function(){
			hanglicang[i].style.opacity=0.6;
		}
		hangli[i].onmouseleave=function(){
			hanglicang[i].style.opacity=0;
		}
	}
	
	//card
	let jia=document.querySelectorAll(".card-k li span");
	let cardli=document.querySelectorAll(".card-k li");
	let cardRight=document.querySelector(".card-right");
	for(let i=0;i<jia.length;i++){
		jia[i].onclick=function(){
			for(let j=0;j<jia.length;j++){
				cardli[j].style.height='40px';
				jia[j].innerHTML='+';
			}
			cardli[i].style.height='140px';
			jia[i].innerHTML='-';
			jia[i].ondblclick=function(){
				cardli[i].style.height='40px';
				jia[i].innerHTML='+';
			}
		}
	}

	//services
	let syuan=document.querySelectorAll(".s-box-yuan");
	let siconfont=document.querySelectorAll(".stu");
	for(let i=0;i<syuan.length;i++){
		syuan[i].onmouseenter=function(){
			syuan[i].style.background='#ff6700';
		}
		syuan[i].onmouseleave=function(){
			syuan[i].style.background='';
		}
	}

	//contact
	let contact=document.querySelector(".contact-left4 span");
	let mail=document.querySelector(".mail");
	let mailtop=mail.offsetTop;
	contact.onclick=function(){
		animate(document.body,{scrollTop:mailtop},1000)
	}

	//gallery
	let gzhao=document.querySelectorAll(".gallzhao");
	let gallli=document.querySelectorAll(".gallery2 li")
	for(let i=0;i<gzhao.length;i++){
		gallli[i].onmouseenter=function(){
			gzhao[i].style.opacity='0.6';
		}
		gallli[i].onmouseleave=function(){
			gzhao[i].style.opacity='0';
		}
	}

	//volunteer
	let vli=document.querySelectorAll(".volunteers2 li");
	let vzhao=document.querySelectorAll(".vzhao");
	for(let i=0;i<vli.length;i++){
		vli[i].onmouseenter=function(){
			vzhao[i].style.opacity='0.6';
		}
		vli[i].onmouseleave=function(){
			vzhao[i].style.opacity='0';
		}
	}
}