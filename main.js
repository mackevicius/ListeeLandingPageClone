let shop=document.getElementsByClassName("nav-links")[0].childNodes[1];
shop.addEventListener('mouseover',drop);

let show=document.querySelector(".dropdown");
show.addEventListener('mouseleave',function dropback(){
    
        show.setAttribute("style", "opacity:0");
        show.style.transition="opacity 0.5s";
    }
);

function drop(){{
    show.setAttribute("style", "opacity:1");
    show.style.transition="opacity ease-in 0.5s";
    }
};

let paveikslai=document.querySelectorAll('.container>a');
paveikslai.forEach(pav =>pav.addEventListener('mouseover',pakeisk));

function pakeisk (e){
    if(e.target.src.indexOf("cipsai")>-1){
        e.target.src='img/skittles.png';
    }
    if(e.target.src.indexOf("kojines")>-1){
        e.target.src='img/kojines2.png';
    }
    if(e.target.src.indexOf("duzmones")>-1){
        e.target.src='img/duzmones2.png';
    }
    if(e.target.src.indexOf("sakura1")>-1){
        e.target.src='img/sakura2.jpg';
    }
    if(e.target.src.indexOf("agne1")>-1){
        e.target.src='img/agne2.png';
    }
    
}
paveikslai.forEach(pav =>pav.addEventListener('mouseout',atkeisk));
function atkeisk(e){
    if(e.target.src.indexOf("skittles")>-1){
        e.target.src='img/bahurascipsai.png';
    }
    if(e.target.src.indexOf("kojines")>-1){
        e.target.src='img/kojines1.png';
    }
    if(e.target.src.indexOf("duzmones2")>-1){
        e.target.src='img/duzmones.png';
    }
    if(e.target.src.indexOf("sakura2")>-1){
        e.target.src='img/sakura1.jpg';
    }
    if(e.target.src.indexOf("agne2")>-1){
        e.target.src='img/agne1.png';
    }
}

 let instagramas=document.querySelectorAll('.instagram-item');
 
 
let inputas=document.querySelector('input');
inputas.addEventListener('click',function(e){
    e.target.style.backgroundColor="#e2e2e291"
})

function pakeist(e){
    e.setAttribute("style","background-color:#e2e2e291;outline: 3px solid #616161b4;outline-offset: -3px;");
}


  let down=document.querySelector('i.fa-angle-up');
  down.addEventListener('click',function(){
      dropdown2.classList.toggle('show');
      down.classList.toggle('upsidedown');
 
        
  })
  let dropdown2=document.querySelector('.dropdown2');

  let times=document.querySelector('i.fa-times');
  times.addEventListener('click',function(){
      document.querySelector('.mobilemenu').style.display="none";
      document.body.style.overflow="visible";
  })

  let hamburger=document.querySelector('.fa-bars');
  hamburger.addEventListener('click',
  function(){
    document.querySelector('.mobilemenu').style.display="block";
    document.body.style.overflow="hidden";

  });

  let title=document.querySelector('.background>h4');
  let prisistatymas=document.querySelector('.prisistatymas');
  let before=document.querySelector('.prisistatymas>p')
  let background=document.querySelector('.background');
  let backgroundbtn=document.querySelector('.background>a');
  let shopnow=document.querySelector('.background>.btn');
  let before2=document.querySelector('.prisistatymas>div');
  let title2=title;
  let instagramai=document.querySelectorAll('.instagram-item');


  function myFunction(x) {
    if (x.matches) { // If media query matches
    title.className="title2"
      prisistatymas.insertBefore(title,before);
      prisistatymas.style.marginTop="10px";
      prisistatymas.insertBefore(shopnow,before2);
      prisistatymas.children[4].style.marginBottom="20px";
      for(let i=4;i<instagramai.length;i++){
          instagramai[i].style.display="none";
      }
      let butonas=document.querySelector('.btn-down');
   
      butonas.addEventListener('click',function(){
          if(butonas.innerText=="Show More"){
          instagramai.forEach(item=>item.style.display="block");
          butonas.innerText="Show Less";}
          else{
              butonas.innerText="Show More";
            for(let i=4;i<instagramai.length;i++){
                instagramai[i].style.display="none";
            }
          }
          
      })
    
    } else {
    title.className="title1";
    background.appendChild(shopnow);
     background.insertBefore(title,backgroundbtn);
     prisistatymas.style.marginTop="35px";
     prisistatymas.children[3].style.marginBottom="35px";
     instagramai.forEach(item=>item.style.display="block");


    }
  }
  
  let x = window.matchMedia("(max-width: 790px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  