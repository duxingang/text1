window.onload=function(){
	let canvas=document.querySelector('canvas');
	let mask=document.querySelector('.mask');
	let pale=new Palette(canvas,mask);
	let tool=document.querySelectorAll('.tools');
	tool.forEach(element=>{
		element.onclick=function(){
			let act=document.querySelector('label[active=true]')
			act.setAttribute('active',false)
			element.setAttribute('active',true)
			if(element.id=='pen'){
				pale.pen();
			}else if(element.id=='more'||element.id=='njiao'){					
				let num=prompt('请输入多边形边数')
				pale.draw(element.id,num);
			}else{
				pale.draw(element.id)
			}
		}
	}) 

	//工具
	let style=document.querySelectorAll('.style');
	style.forEach(element=>{
		element.onclick=function(){
			for(let i=0;i<style.length;i++){
				style[i].setAttribute('active',false)
			}
			element.setAttribute('active',true)
			pale.style=element.id;
		}
	})



	//色板
	let input=document.querySelectorAll('input')
	input.forEach((element,index)=>{
		element.onchange=function(){
			if(index==0){
				pale.strokeStyle=element.value
			}else{
				pale.fillStyle=element.value
			}
		}
	})



	//橡皮擦
	let xiang=document.querySelector('.xiang');
	let era=document.querySelector('.eraser');
	xiang.onclick=function(){
		pale.eraser(era,20,20)
	}

	//反向
	let reverse=document.querySelector('.reverse')
	reverse.onclick=function(){
		pale.reverses();
	}

	//文字
	let wenzi = document.querySelector('.wenzi');
	wenzi.onclick = function(){
		pale.font();
	}

	let save = document.querySelector('.baocun');
	save.onclick = function(){
		save.href = canvas.toDataURL('image/png');
		save.download = 'a.png';
	}

	//裁切
	let clip = document.querySelector('.clip');
	let clips = document.querySelector('.clips');
	clips.onclick = function(){
		pale.clip(clip);
	}
}