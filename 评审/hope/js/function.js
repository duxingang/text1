/*
* @Author: VAIO
* @Date:   2017-08-14 10:16:26
* @Last Modified by:   VAIO
* @Last Modified time: 2017-08-14 16:20:36
*/

'use strict';
//封装函数   获取元素时便捷	$(select[,ranger]) 	添加window.unload
//参数：select(字符串) -> 选择器 #box .box  div
//			  (函数) -> 
//		ranger(范围)	dom元素
//1.首字符  # -> document.getElementById 
//			. -> document.getElementsByClassName
//			符合标签  
//2.return 
function $(select,ranger){
	if(typeof select == 'string'){
		if(ranger == undefined){
			ranger = document;
		}
		ranger = ranger || document;
		ranger = ranger?ranger:document;
		ranger = ranger == undefined?document:ranger;

		let selector = select.trim();
		let firstChar = selector.charAt(0);
		if(firstChar == '#'){
			return document.getElementById(selector.substring(1));
		}else if(firstChar == '.'){
			return ranger.getElementsByClassName(selector.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-9]{0,9}$/.test(selector)){
			return ranger.getElementsByTagName(selector);
		}
	}else if(typeof select == 'function'){
		window.onload = function(){
			select();
		}
	}
}
//html()  获取或者设置元素内容
//element dom元素
function html(element,content){
	if(arguments.length==2){
		element.innerHTML = content;
	}else if(arguments==1){
		return element.innerHTML;
	}
}
//text()
function text(element,content){
	if(arguments.length==2){
		element.innerText = content;
	}else if(arguments==1){
		return element.innerText;
	}
}
//设置样式
//css(element,attrOpj)
//css(box,{width:'300px',height:'300px',bacgroundColor:'red'})
function css(element,attrObj){
	for(let i in attrObj){
		element.style[i] = attrObj[i];
	}
}
//on(collection,type,fn)
function on(collection,type,fn){
	for(let i=0;i<collection.length;i++){
		collection[i][type] = fn;
		//collection[i][type] = null;//移除事件
	}
}
//动画
function animate(element,attrObj,speed,fn){
	let t = setInterval(function(){
		for(let i in attrObj){
			let start = parseInt(getComputedStyle(element,null)[i]);
			if(start>=attrObj[i]){
				clearInterval(t);
				if(fn){
					// fn();
					fn.call(element);
				}
			}
			element.style[i]=`${start+speed}px`;
		}
	}, 40)
}
//冒充继承  
//   zhangsan.say.call(lisi)
//   zhangsan.say.apply(lisi)