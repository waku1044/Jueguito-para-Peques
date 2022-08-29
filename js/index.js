const nube1 = document.querySelector('#nube1');

function nubes(element){
  let div = document.createElement('div');
  div.style.background = 'forestgreen';
  div.style.width = '140px';
  div.style.height = '80px';
  div.style.borderRadius = '30px'
  
  element.appendChild(div);
};
nubes(nube1);

const nube2 = document.querySelector('#nube2');
nubes(nube2);

const pasto = document.querySelector('#pasto');
function pastos(element){
  let div = document.createElement('div');
  div.style.background = 'forestgreen';
  div.style.width = '150px';
  div.style.height = '120px';
  div.style.borderRadius = '30px';
  div.style.boxShadow = '5px -5px 9px #909B74';
  
  element.appendChild(div);
};
pastos(pasto);


let result = 0;
const h3 = document.querySelector('h3');
function sumar (){
  if(result >= 10){
    let msj = 'GANASTE!!!';
    h3.style.color = 'green';
    return h3.innerText = msj
  }else{
   result++;
   return h3.innerHTML = `Score: ${result}`
  }
};

const cone1 = document.querySelector('#cone1');
cone1.addEventListener('click', sumar);

const cone2 = document.querySelector('#cone2');
cone2.addEventListener('click', sumar)

const cone3 = document.querySelector('#cone3');
cone3.addEventListener('click', sumar)
const cone4 = document.querySelector('#cone4');
cone4.addEventListener('click', sumar)
