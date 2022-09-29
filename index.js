


// Notification popup
function openMe() {
	let popup = document.getElementById('popup');
		if(popup.style.display == "none") {
			popup.style.display = "block";
			document.getElementById("count").style.display = 'none';
		}
		else {
			popup.style.display = "none";
			
		};
}


/// Messages
function myFunction() {
	
	const messages = document.querySelector(".messages");
	messages.classList.toggle("boxShadow1");
	document.getElementById("count2").style.display = 'none';
	setTimeout(function() {
		messages.style.boxShadow = "none";
	}, 2000)

}


// Theme/Display customization
function themeOpen() {
	let themeModal = document.getElementById("customize-theme");
if(themeModal.style.display =="none") {
	themeModal.style.display = "grid";
}
else {
	themeModal.style.display = "none";
}
}


function closeTheme() {
	let themeModal = document.getElementById("customize-theme");
	if(themeModal.style.display == "") {
		themeModal.style.display = "none"
	}
	else {
		themeModal.style.display = "none";
	}
}



  
// THEME
let allBody = document.getElementById('html');
let root = document.querySelector(":root");
function font1() {
	allBody.classList.toggle("font-1");
	root.style.setProperty('----sticky-top-left', '5.4rem');
	root.style.setProperty('----sticky-top-right', '5.4rem');
}
function font2() {
	allBody.classList.toggle("font-2");
	root.style.setProperty('----sticky-top-left', '5.4rem');
	root.style.setProperty('----sticky-top-right', '-7rem');
}
function font3() {
	allBody.classList.toggle("font-3");
	root.style.setProperty('----sticky-top-left', '-2rem');
	root.style.setProperty('----sticky-top-right', '-17rem');
}
function font4() {
	allBody.classList.toggle("font-4");
	root.style.setProperty('----sticky-top-left', '-5rem');
	root.style.setProperty('----sticky-top-right', '-25rem');
}
function font5() {
	allBody.classList.toggle("font-5");
	root.style.setProperty('----sticky-top-left', '12rem');
	root.style.setProperty('----sticky-top-right', '-35rem');
}



// let Bg1 = document.getElementById("bg-1");
// let Bg2 = document.getElementById("bg-2");
// let Bg3 = document.getElementById("bg-3");



// // theme bg values
// let lightColorLightness;
// let whiteColorLightness;
// let darkColorLightness;


// // change bg color
// function changeBG() {
// 	root.style.setProperty('--light-color-lightness', lightColorLightness);
// 	root.style.setProperty('--white-color-lightness', whiteColorLightness);
// 	root.style.setProperty('--dark-color-lightness', darkColorLightness);
// }


// // 	let changeBg = document.getElementById("chang-Bg")
// // function changeBg1() {
// // 	changeBg.style.backgroundColor = "green";
// // }



// // function changeBg2() {
// // 	darkColorLightness = '95%';
// // 	whiteColorLightness = '10%';
// // 	lightColorLightness = '15%';
// // 	changeBG();
// // }


// // function changeBg3() {
// // 	darkColorLightness = '95%';
// // 	whiteColorLightness = '100%';
// // 	lightColorLightness = '0%';
// // 	changeBG();
// // }

// // // END


// function goLeft() {
// 				let right = document.getElementById('right');
// 				let parent = document.getElementById('parent');
// 					if (allBody.style.backgroundColor == "") {
// 						allBody.style.backgroundColor = "#1f1e1e";
// 						allBody.style.color = "#fff";
// 						right.style.marginLeft = "15px";
// 						parent.style.borderColor = "#000";
// 						right.style.transition = "0.5s";
// 						right.style.backgroundColor = "#000";
						
	
// 					}else {
// 						allBody.style.backgroundColor = "";
// 						allBody.style.color = "";
// 						right.style.marginLeft = "0px";
// 						parent.style.borderColor = "#000";
// 						right.style.transition = "0.5s";
// 						right.style.backgroundColor = "";
// 					}
// 				}