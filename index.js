let arr = [];
let undoRedo = [];
let str = "";
let wordPages = document.querySelector('.word_pages');
let mainText = document.querySelector('#main_text');

//============================================================local storage shows old data================================================================================
window.addEventListener('load', function () {// load is event which take place whenever web page reloads itself6yjm
mainText.innerHTML = "";
    str = (localStorage.getItem('alldata'))??"";//get item from local storage and store in the array
     mainText.innerHTML += `${str}`
});






function formatDoc(cmd, value = null) {
  console.log(value);
  if (value) {
      document.execCommand(cmd, false, value);
  } else {
      document.execCommand(cmd)
  }
}




document.addEventListener("keydown", function(event) {
  // if (event.ctrlKey && event.keyCode === 90) {
  //   // Trigger your function here
  //   // yourFunction();
  //   //undo
  //   arr.pop()
  //   let ff = arr[length-1]
  //   console.log(ff);
  //   localStorage.setItem('alldata', str);

  // }else if(event.ctrlKey && event.keyCode === 89){
  //   //redo-y
  //   // let ff = arr.pop();
  //   // console.log(ff);
  //   // localStorage.setItem('alldata', str);
  // }
  if (event.ctrlKey && event.keyCode === 13) {
  
    const section = document.createElement("section");
section.setAttribute("class","allbody userContent");
section.setAttribute("id","main_text");
section.setAttribute("contenteditable","true");
  wordPages.appendChild(section);
  // console.log(wordPages.innerHTML);

  }
});




mainText.addEventListener('keyup', ftft)

function ftft(){
    // arr.shift();
    str = mainText.innerText;
    arr.push(str);
    localStorage.setItem('alldata', str);
    // console.log(str);
    console.log(arr);
}


//========================================================================= font style property added=====================================================================

// const allPre_tag = document.getElementsByClassName('userContent');
// const selectTab = document.querySelector('.font_family')
// console.log(allPre_tag);
// // console.log(Array.from(allPre_tag));
// selectTab.addEventListener('onchange', languageSelector);

// function languageSelector(){
//   if(selectTab.value == 'timesRoman'){
//       console.log(selectTab.value);
//       Array.from(allPre_tag).forEach((element) => {
//       // console.log(element)
       
//       element.classList.remove('class');
//       element.setAttribute('class', 'userContent5');
//   });


//   }else if(selectTab.value == 'courier_New'){
//       console.log('4848');
//       console.log(selectTab.value);
//       Array.from(allPre_tag).forEach((element) => {
//         console.log('111');
//         element.classList.remove('class');
//         element.setAttribute('class', 'userContent2');
//     });
  
//   }
//   else if(selectTab.value == 'monospace'){
//       console.log(selectTab.value);
//       console.log(Array.from(allPre_tag));
//       Array.from(allPre_tag).forEach(function(element) {
//       console.log('11');
//       console.log(element);
//   });


//       console.log('55');
//       Array.from(allPre_tag).forEach((element)=> {
//       element.classList.remove('class');
//       element.setAttribute('class', 'userContent3');
//       console.log('55')
// });
// }
// }

function changeFont() {
  const Font = document.getElementById('input-font').value;
  document.execCommand('fontName', false, Font);
}

function changeSize() {
  const size = document.getElementById('fontSize').value;
  document.execCommand('fontSize', false, size);
}

// ==========================================================================text allignment operation==================================================================
const shiftLeftBtn = document.getElementById('shiftLeft')
const shiftRightBtn = document.getElementById('shiftRight')
const shiftCenterBtn = document.getElementById('shiftCenter')
const shiftJustifyBtn = document.getElementById('shiftJustify')


shiftLeftBtn.addEventListener('click', alignLeft);
shiftRightBtn.addEventListener('click', alignRight);
shiftCenterBtn.addEventListener('click', alignCenter);
shiftJustifyBtn.addEventListener('click', alignJustify);


function alignLeft(){
  mainText.style.textAlign = 'left';
}

function alignRight(){
  mainText.style.textAlign = 'right';
}

function alignCenter(){
  mainText.style.textAlign = 'center';
}

function alignJustify(){
  mainText.style.textAlign = 'justify';
}



//======================================================================editing and viewing part==========================================================================
let editingPart = document.querySelector('.editing_part');


function docEditable(event){
console.log(event);
if (event.target.classList.contains('fa-pencil'))
mainText.setAttribute("contenteditable", "true");
if (event.target.classList.contains('fa-eye'))
mainText.setAttribute("contenteditable", "false");

}
editingPart.addEventListener('click', docEditable);


//=======================================================================spliting pages======================================================================================
function addSec(event) {
  // console.log(event);
 if (event.ctrlKey && event.keyCode === 13) {
  
      const section = document.createElement("section");
  section.setAttribute("class","allbody userContent");
  section.setAttribute("id","main_text");
  section.setAttribute("contenteditable","true");
    wordPages.appendChild(section);
    // console.log(wordPages.innerHTML);
  
    }
  }

document.addEventListener('keydown', addSec);
