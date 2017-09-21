window.onload=function(){
    let dl=document.querySelector('dl')
	let aside=document.querySelector('.aside')
    let contact=[
        {'name':'安倍','phone':'110','pinyin':'aa'},
        {'name':'安安','phone':'120','pinyin':'aa'},
        {'name':'东东','phone':'130','pinyin':'dd'},
        {'name':'等等','phone':'140','pinyin':'dd'},
        {'name':'呼呼','phone':'150','pinyin':'hh'},
        {'name':'凤女','phone':'160','pinyin':'ff'},
        {'name':'红红','phone':'170','pinyin':'hh'},
        {'name':'葫芦娃','phone':'180','pinyin':'hh'},
        {'name':'艾克','phone':'190','pinyin':'ii'},
        {'name':'杰杰','phone':'200','pinyin':'jj'},
        {'name':'蜘蛛','phone':'210','pinyin':'zz'},
        {'name':'露露','phone':'220','pinyin':'ll'},
        {'name':'冷冷','phone':'230','pinyin':'ll'},
        {'name':'啦啦','phone':'240','pinyin':'ll'},
        {'name':'鹿鹿','phone':'240','pinyin':'ll'},
        {'name':'丽丽','phone':'240','pinyin':'ll'},
    ];

    function getData(){
        let data=localStorage.getItem('contact')?JSON.parse(localStorage.contact):false;
        if(!data){
            localStorage.setItem('contact',JSON.stringify(contact));
            data=JSON.parse(localStorage.contact)
        }
        return data;
    }
    getData();
    function render(data){
        let dataobj={}; 
        data.forEach(element=>{
            let first=element.pinyin.charAt(0).toUpperCase();
            if(!dataobj[first]){
                dataobj[first]=[]
            }
            dataobj[first].push(element)
        })
        let keys=Object.keys(dataobj).sort()

        keys.forEach(element=>{
            aside.innerHTML+=`
            <li>${element}</li>
            `
            dl.innerHTML+=`
            <dt>${element}</dt>
          `
            dataobj[element].forEach(value=>{
                dl.innerHTML+=`
                <dd><a href="tel:${value.phone}"">${value.name}</a></dd>
                `
            })
        })

        let dtl=document.querySelectorAll('dt')
        let head=document.querySelector('header')
        let height=head.offsetHeight
        let hei=aside.offsetHeight;
        aside.style.marginTop=`-${hei/2}px`

        //提示文字
        let arr=[];
        dtl.forEach(element=>{
           arr.push(element.offsetTop)
        })

        let tip=document.querySelector('.tip');
        let th=tip.offsetHeight;
        tip.innerHTML=keys[0]
        window.onscroll=function(){
            let st=document.body.scrollTop;
            arr.forEach((value,index)=>{
                if(th+height+st>=value+th){
                    tip.innerHTML=`${keys[index]}`
                }
            })
        }
    }
    render(getData());

    //搜索
    let input=document.querySelector('input');
    input.onkeyup=function(){
        let ele=this.value.trim();
        let filter=getData().filter(element=>element.name.includes(ele) || element.phone.includes(ele));
        dl.innerHTML=''
        aside.innerHTML=''
        render(filter);
    } 
}