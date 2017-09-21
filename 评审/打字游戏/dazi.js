'use strict';

window.onload = function(){
	function Game(){
		this.sheet = [
		['A','img/A.png'],
		['B','img/B.png'],
		['C','img/C.png'],
		['D','img/D.png'],
		['W','img/E.png'],
		['F','img/F.png'],
		['G','img/G.png'],
		['H','img/H.png'],
		['I','img/I.png'],
		['J','img/J.png'],
		['K','img/K.png'],
		['L','img/L.png'],
		['M','img/M.png'],
		['N','img/N.png'],
		['O','img/O.png'],
		['P','img/P.png'],
		['Q','img/Q.png'],
		['R','img/R.png'],
		['S','img/S.png'],
		['T','img/T.png'],
		['U','img/U.png'],
		['V','img/V.png'],
		['W','img/W.png'],
		['X','img/X.png'],
		['Y','img/Y.png'],
		['Z','img/Z.png']
		];
		this.length = 8;
		this.elements = [];
		this.position = [];
		this.speed = 1;
		this.level = 10;
		this.score = 0;
		this.scoreObj = document.querySelector('div.score>span');
		this.health = 10;
		this.healthObj = document.querySelector('div.health>span');
		this.begin = document.querySelector('div.start');
	}
	Game.prototype = {
		start:function(){
			let that = this;
			this.begin.onclick = function(){
				that.begin.style.display = 'none';
				that.getchars();
				that.down();
				that.key();
			}
		},
		getchars:function(){
			for(let i=0;i<this.length;i++){
				this.getchar()
			}
		},
		getchar:function(){
			let num;
			let div = document.createElement('div');
			let lefts;
			let tops = -Math.random()*100;
			do{
				lefts = Math.random()*(window.innerWidth-200)+100;
			}while(this.checkPosition(lefts));
			do{
				num = Math.floor(Math.random()*this.sheet.length)
			}while(this.checkRepeat(num));
			div.classList.add('box');
			div.style.cssText = `left:${lefts}px ; top:${tops}px; background-image
			:url('${this.sheet[num][1]}')`
			div.innerText = this.sheet[num][0];
			document.body.appendChild(div);
			this.elements.push(div);
			this.position.push(lefts);
		}, 
		checkPosition:function(lefts){
			return this.position.some(value => Math.abs(lefts-value)<50);
		},
		checkRepeat:function(num){
			return this.elements.some(value => value.innerText == this.sheet[num][0]);
		},
		down:function(){
			let that = this;
			this.time = setInterval(function(){
				for(let i=0;i<that.elements.length;i++){
					let tops = that.elements[i].offsetTop;
					that.elements[i].style.top = `${tops+that.speed}px`;
					if(tops >= 500){
						document.body.removeChild(that.elements[i]);
						that.elements.splice(i, 1);
						that.position.splice(i, 1);
						that.getchar();
						that.health--;
						that.healthObj.innerText = that.health;
						if(!that.health){
							that.end();
						}
					}
				}
			}, 10);
		},
		key:function(){
			let that = this;
			document.onkeydown = function(e){
				let char = String.fromCharCode(e.keyCode);
				for(let i=0;i<that.elements.length;i++){
					if(char == that.elements[i].innerText){
						document.body.removeChild(that.elements[i]);
						that.elements.splice(i,1);
						that.position.splice(i,1);
						that.getchar();
						that.score++;
						that.scoreObj.innerText = that.score;
						if(that.score == that.level){
							that.next();
						}
					}
				}
			}
		},
		next:function(){
			clearInterval(this.time);
			for(let i=0;i<this.elements.length;i++){
				document.body.removeChild(this.elements[i]);
			}
			this.elements = [];
			this.position = [];
			this.length++;
			this.level+=10;
			this.health+=5;
			this.healthObj.innerText = this.health;
			this.begin.style.display = 'block';
			this.start();
		},
		end:function(){
			clearInterval(this.time);
			if(confirm('还玩不？')){
				this.restart();
			}else{
				window.close();
			}
		},
		restart:function(){
			for(let i = 0; i < this.elements.length; i++){
					document.body.removeChild(this.elements[i]);
				}
				this.elements = [];
				this.position = [];
				this.length = 5;
				this.level = 10;
				this.score = 0;
				this.scoreObj.innerText = this.score;
				this.health = 10;
				this.healthObj.innerText = this.health;
				this.begin.style.display = 'block';
				this.start();
		}
	}
	let Games = new Game();
		Games.start();
}