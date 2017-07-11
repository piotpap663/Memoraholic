// window.onload=function(){
// if(window.innerWidth<600 || document.getElementsByTagName("body")[0].offsetWidth<600 || window.screen.width<600){

// document.getElementById('stylesheet').href='small.css';	
		// }
// }
var howmanypictures = 5;
var akt=0;
var previous = "left";
var change = 0;
// 
var howmanypicturesincase=149;
// do zegara
var c = 0;
var t;
var timer_is_on = 0;
var flag=0;


window.addEventListener("keyup", function(){

	if(event.keyCode===38 && document.getElementsByClassName("start")[0] && howmanypictures>1&& howmanypictures<=30)
	{
		howmanypictures +=1;
		document.getElementById("how-many-pic").value=howmanypictures;
		}	
	else if(event.keyCode===40 && document.getElementsByClassName("start")[0] && howmanypictures>2&& howmanypictures<=30)
	{
		howmanypictures -=1;
		document.getElementById("how-many-pic").value=howmanypictures;
		}
	else if(event.keyCode===32
	&& !document.getElementById("restart")
	&& !document.getElementsByClassName("start")[0])
		{
			clickedFinish();
		}
	else if(event.keyCode===13){
				if(document.getElementsByClassName("start")[0]){
					showPicsOnSecondWindow();
				}
			
			else if(document.getElementById("restart")){
				restartGame();
				}			
	}

}, false);
  // 111111   
 //1:::::::1   
//1::::::::1   
//111:::::1   
   // 1::::1   
   // 1::::1   
   // 1::::1   
   // 1::::l   
   // 1::::l   
   // 1::::l   
   // 1::::l   
   // 1::::l   
// 111::::::111
// 1::::::::::1
// 1::::::::::1
// 111111111111
function changeNumberOfPics(){
	if( parseInt(document.getElementById('how-many-pic').value)>1&&  parseInt(document.getElementById('how-many-pic').value)<=30 )
	{	howmanypictures = parseInt(document.getElementById('how-many-pic').value);}

}

//--------------------------------------------------------------------------stopwatch start -------------=----------
var StopWatch = function (performance) {
    this.startTime = 0;
    this.stopTime = 0;
    this.running = false;
    this.performance = performance === false ? false : !!window.performance;
};

StopWatch.prototype.currentTime = function () {
    return this.performance ? window.performance.now() : new Date().getTime();
};

StopWatch.prototype.start = function () {
    this.startTime = this.currentTime();
    this.running = true;
};

StopWatch.prototype.stop = function () {
    this.stopTime = this.currentTime();
    this.running = false;
};

StopWatch.prototype.getElapsedMilliseconds = function () {
    if (this.running) {
        this.stopTime = this.currentTime();
    }

    return this.stopTime - this.startTime;
};

StopWatch.prototype.getElapsedSeconds = function () {
    return this.getElapsedMilliseconds() / 1000;
};

StopWatch.prototype.printElapsed = function (name) {
   
var valuetoshow=this.getElapsedSeconds();
	
	valuetoshow = (Math.round(valuetoshow * 1000) / 1000)+'s';
		
  return valuetoshow;

};
   

	var stopwatch = new StopWatch();


//--------------------------------------------------------------------------stopwatch end ---------------
		
		
		
// Tu tworza sie Ÿrod³a obrazków
var myModule = function(){
	var givemethat = null;

	var table=[];
	for(var i=0;i<howmanypicturesincase;i++){
	table[i]=i; //TUTAJ MOGE DOPISAC DO ZRODLA ZDJECIA NP ŒCIE¯KE DO ZDJÊCIA
}
table = fisherYates(table,howmanypicturesincase);

	//givemethat = table;
	function getPersonFromApi(){
		return {
			firstName:"John"
		}
	}
	
	return {
		getTable: function() { return table;},
		reset: function() { return table = fisherYates(table,howmanypicturesincase)}
	}
}()
// mieszanie numerkow do zdjec zeby nie byly permutacja
function fisherYates(myArray,nb_picks)
{
    for (i = nb_picks-1; i > 1  ; i--)
    {
        var r = Math.floor(Math.random()*i);
        var t = myArray[i];
        myArray[i] = myArray[r];
        myArray[r] = t;
    }

    return myArray.slice(0,nb_picks);
}

 // 2222222222222222    
// 2::::::::::::::::::22  
// 2::::::222222:::::2 
// 2222222     2:::::2 
                // 2:: ::2 
                // 2:::::2 
            // 2222::::2  
      // 22222::::::22   
    // 22::::::::222     
 // 2:::::22222        
// 2:::::2             
// 2:::::2             
// 2:::::2       222222
// 2::::::2222222:::2
// 2:::::::::::::::: ::2
// 2222222222222222
//----------------------------------------DRUGIE OKNO Z PRZERZUCANIEM ZDJEC NA LEWO I PRAWO STRZA£KAMI
//malowanie drugiego okna ze zdjeciami do nauczenia/zapamietania
var showPicsOnSecondWindow = function() {
		document.getElementById("howmanypic").outerHTML="";
		document.getElementById("pojemnik").innerHTML=
		'<div id="nav">'+
				'<div id="btn-nav"><button class="btn-nav-onclick" onclick="clickedFinish()">Skip</button></div>'+
				'<div class="cont-clock"><span>min  sec</span><div id="clock"></div></div>'+
        '</div>'+
			'<div id="left">'+
					'<div class="small_left"></div>'+
			'</div>'+
			'<div id="middle">'+
				'<div class="img_middle"></div>'+
				'<div class="buttons"></div>'+
			'</div>'+
			'<div id="right">'+
		    '</div>'+
        '<div style="clear:both;"></div>';
		var source_array = myModule.getTable();

        var tresc_diva = "",
            tresc_diva2 = "";
	
			document.body.onkeydown= function(event) {
    switch (event.keyCode) {
        case 37: // Left
            to_left();
            break;

        case 39: // Right	
            to_right()
            break;
					}
				};
			
			
			
       // timedCount(7, 0,"start from");
		startCount(50);

        for (i = 0; i < howmanypictures; i++) {
            var element = "img" + source_array[i];
            if (i == 0) {
                tresc_diva = tresc_diva + '<div class="small_right" style="visibility:hidden" id="' + 'r' + element + '"><img src="img/' + source_array[i]+ '.jpg"</img></div>';
                tresc_diva2 = tresc_diva2 + '<div class="small_left" style="visibility:hidden" id="' + 'l' + element + '"><img src="img/' + source_array[i] + '.jpg"</img></div>';
            } else {
                tresc_diva = tresc_diva + '<div class="small_right" id="' + 'r' + element + '"><img src="img/' + source_array[i] + '.jpg"</img></div>';
                tresc_diva2 = tresc_diva2 + '<div class="small_left" style="visibility:hidden" id="' + 'l' + element + '"><img src="img/' +source_array[i]+ '.jpg"</img></div>';
            }
        }
        tresc_diva += '<div style=clear:both;></div>';
        tresc_diva2 += '<div style=clear:both;></div>';
        document.getElementById("right").innerHTML = tresc_diva;
        document.getElementById("left").innerHTML = tresc_diva2;
        middle_pic(akt);
        akt++;

    }

    //wyswietla srodkowy duzy obrazek w drugim oknie
function middle_pic(lvl) {
	var source_array = myModule.getTable();
    //document.getElementById("middle").innerHTML="";
    tresc_diva = "";
    //  document.getElementById("img_middle").innerHTML="";
    if (lvl == 0) {
        tresc_diva = tresc_diva + '<div class="img_middle"><img src="img/' + source_array[lvl] + '.jpg"></img></div><div class="buttons"><button onclick="toFirstPic()" class="btn"><<</button><button class="btn" onclick="to_left()"><</button><button class="btn" onclick="to_right()">></button></div>';
    } else {
        tresc_diva = tresc_diva + '<div class="img_middle"><img src="img/' + source_array[lvl] + '.jpg"></img></div><div class="buttons"><button onclick="toFirstPic()" class="btn"><<</button><button class="btn" onclick="to_left()"><</button><button class="btn" onclick="to_right()">></button></div>';
    }
    
    document.getElementById("middle").innerHTML = tresc_diva;
}
//przeniesc obrazek na lewo i podmien srodkowy
//oraz ukryj obrazek z prawej

function to_left() {
    var increase = "false";

    if (previous == "right" && akt >= 0) {
        akt++;
    }
    if (akt == 1) {
        var show_left = document.querySelectorAll(".small_left");
        show_left[akt - 1].style.visibility = "visible";
        var hide_right = document.querySelectorAll(".small_right  ");
        hide_right[akt].style.visibility = "hidden";
        middle_pic(akt);
        increase = "true";
    } else if (akt > 1 && akt < howmanypictures) {
        var show_left = document.querySelectorAll(".small_left");
        show_left[akt - 1].style.visibility = "visible";
        var hide_right = document.querySelectorAll(".small_right  ");
        hide_right[akt].style.visibility = "hidden";
        middle_pic(akt);
        increase = "true";
    }

    //mozna oprostu displayem sterowac i sywietlac te co trzeba wystarczy zlapac odpowiedni element
    if (akt < howmanypictures && increase && akt >= 0) {
        akt++;
    }
    previous = "left";

}
// wroc do pokazania obrazkow od poczatku
function toFirstPic(){
	var show_left = document.querySelectorAll(".small_left");
	 var hide_right = document.querySelectorAll(".small_right  ");
	for(i=0;i<show_left.length;i++)
	{
		 show_left[i].style.visibility = "hidden";
		 hide_right[i].style.visibility = "visible";
		if(i==0)
		{
			hide_right[i].style.visibility = "hidden";
		}

	}
	       akt=1;
		    middle_pic(0);
}
//przeniesc obrazek na prawo i podmien srodkowy
function to_right() {
    var decrease = "false";
    if (previous == "left" && akt > 1) {
        akt--;
    }

    if (akt == 1) {
        var show_left = document.querySelectorAll(".small_left");
        show_left[akt - 1].style.visibility = "hidden";
        var hide_right = document.querySelectorAll(".small_right  ");
        hide_right[akt].style.visibility = "visible";
        middle_pic(akt - 1);

        decrease = "true";
    } else if (akt > 1 && akt < howmanypictures) {
        var show_left = document.querySelectorAll(".small_left");
        show_left[akt - 1].style.visibility = "hidden";
        var hide_right = document.querySelectorAll(".small_right  ");
        hide_right[akt].style.visibility = "visible";
        middle_pic(akt - 1);
        decrease = "true";
    }

    //mozna oprostu displayem sterowac i sywietlac te co trzeba wystarczy zlapac odpowiedni element
    //Musze miec funkcje która bedzie zwracac ten element który jest ostatni
    //napewno jest cos na zwracanie ostatniego elementu tablicy
    //  a elementy dostane przez query selector bo zwraca tablice clas
    if (akt >= 1 && decrease) {
        akt--;
    }
    previous = "right";
}

//Wyczyszczenie ekranu po memorization


 // 333333333333333   
// 3:::::::::::::::33 
// 3::::::33333::::::3
// 3333333     3:::::3
            // 3:::::3
            // 3:::::3
    // 33333333:::::3 
    // 3:::::::::::3  
    // 33333333:::::3 
            // 3:::::3
            // 3:::::3
            // 3:::::3
// 3333333     3:::::3
// 3::::::33333::::::3
// 3:::::::::::::::33 
 // 333333333333333 
// klikanie w obrazki zeby jes ustawic w zapamietanym ciagu

//KLIKNIETY ZOSTAL JEDEN Z GORNYCH OBRAZKOW
function reversePicture(clickedObject){

var tableoflowerimages = document.getElementsByClassName('small_img');
	for(var i=0;i<tableoflowerimages.length;i++){
		//PRZESZUKUJE WSZYSTKIE ELLEMENTY W POSZUKIWANIU ELEMENTU NA KTORYM ON BYL WCZESNIEJ NA DOLE
		if(tableoflowerimages[i].src===clickedObject.src)
		{
			tableoflowerimages[i].style.visibility="visible";
			clickedObject.src="img/xx.jpg";
			clickedObject.id="empty";
		}
	}
	//JESLI USER WYPELNIL WSZYSTKIE POLA I TERAZ CHCE COFNAC, WTEDY NIE MA ZADNYCH ACT_IMG WIEC DODAJE DO TEGO KLIKNIETEGO
	if(!document.getElementById('act_img'))
	{clickedObject.id="act_img";}
//ZMIANA ACT_IMG NA INNY ELEMENT
	else (clickedObject.id=="empty") 
	{
		document.getElementById('act_img').id="empty";	
		clickedObject.id="act_img";
		
	}

}



//FUNKCJA KLIKNIECIA W JEDEN Z DOLNYCH OBRAZKOW W 3 OKNIE
function clickedLowerPic(clickedObject){
		var redimage = document.getElementById('act_img');
	if(redimage){
		
		var tableofupperimages = document.getElementsByClassName('upper_img');
		for(var i=0;i<=tableofupperimages.length;i++){

		if(i==tableofupperimages.length)
			{
				//nie znalaz³em do konca wiec trzeba od poczatku
				var searchagain=i; //POZWALAM ZEBY JESZCZE RAZ PRZESZUKAC
				//nie znalaz³em do konca wiec trzeba od poczatku");
			}
			else if(tableofupperimages[i].id==="act_img"){
					//oo znalaz³em gdzie byl czerwony stad zaczynam szukac do konca
					//to i gdzie jest czerwony");
					var searcheditem = i;
					tableofupperimages[searcheditem].src=clickedObject.src;
					tableofupperimages[searcheditem].id="no";
					break; //albo continue
				}
			
		}

		
		//ZNALAZLEM ELEMENT DO KTOREGO MOGE DODAC ZDJECIE Z DOLU NA GORZE
		//dodaje czerwona ramke do innego zdjecia
			if(searcheditem || searcheditem==0){

				for(var j=searcheditem+1;j<=tableofupperimages.length;j++)
					{
						//sprawdzam czy to pusty obrazek
						 if(j==tableofupperimages.length)
						{
							var searchagain="doit";
							//PRZEKAZUJE SEARCH AGAIN ZEBY MOZNA BYLO JESZCZE RAZ PRZESZUKAC
						}
						 else if((tableofupperimages[j].id!=="act_img" || tableofupperimages[j].id=="") && tableofupperimages[j].id!="no")
						{
							tableofupperimages[j].id="act_img";
								delete searchagain;
							break;
						}
						
					}	
			}
			//NIE ZNALAZLEM ELEMENTU W KOLEJNYCH ELEMENATCH WIEC PRZESZUKAM OD POCZATKU
			if(searchagain || searchagain=="doit"){

				for(var k=0;k<tableofupperimages.length;k++)
				{
					
					if((tableofupperimages[k].id!="act_img" || tableofupperimages[k].id=="") && tableofupperimages[k].id!="no")
						{
							tableofupperimages[k].id="act_img";
							tableofupperimages[searcheditem].src=clickedObject.src;
							break;
						}
				}
			}
			
			redimage.id="no"; //usuwam mu id, zeby nie byl czerowny
	clickedObject.style.visibility="hidden"; //ukrywam dolny obrazek
		}
	
}

//-------------------------------------- funkcja rysyj¹ca 3 okno- ---------------------
//funkcja rysjacca ostatnie okno sortowania elementow
var drawLastWindow = function() {
	//window.removeEventListener("keydown", function(event));
	document.getElementsByClassName("btn-nav-onclick")[0].innerHTML="Finish";
	var newArray = myModule.getTable().slice();
	var source_array = fisherYates(newArray,howmanypictures);
	
	startCount(50);
    var tresc_diva = "",
        tresc_diva2 = "";
		
  
    document.getElementById("left").outerHTML = tresc_diva;
    document.getElementById("middle").outerHTML = tresc_diva;
    document.getElementById("right").outerHTML = tresc_diva;
    tresc_diva = tresc_diva + '<div id="el_put">'; //otwarcie el_put
    for (i = 0; i < howmanypictures; i++) {
        var element = "img" + i;
    
      if(i==0)
      {
        tresc_diva = tresc_diva + '<img src="img/xx.jpg" id="act_img" class="upper_img" style="visibility:visible;" onclick="reversePicture(this)" onmouseover="bigImage(this)"></img>';
      }
      else {

        tresc_diva = tresc_diva + '<img src="img/xx.jpg" id="empty" class="upper_img" style="visibility:visible;" onclick="reversePicture(this)" onmouseover="bigImage(this)"></img>';
      }
    }
    tresc_diva += '<div style=clear:both;></div></div>'; //zamkniecie el_put

    tresc_diva += '<div class="one_img" ><img id="show_img" src="img/' + source_array[0] + '.jpg"</img></div>';
    tresc_diva += '<div style=clear:both;></div>';
    tresc_diva = tresc_diva + '<div id="el_take">';
    for (i = 0; i < howmanypictures; i++) {
        var element = "img" + i;
	if( source_array[i] =='undefined'){ console.log(source_array[i],"Error with image, please contact me."); }

        tresc_diva = tresc_diva + '<img class="small_img" src="img/' + source_array[i] + '.jpg" onmouseover="bigImage(this)" onclick="clickedLowerPic(this)" id="' + 'd' + element + '"></img>';
     
    }
	
    document.getElementById("pojemnik").innerHTML += tresc_diva;
   
    // if (document.getElementById("clock").value <= 0) {
        // document.getElementById("pojemnik").innerHTML = "Sprawdzenie czy dobrze";
      // }
	  
	 //return timing.startTime();

	return stopwatch.start();


}

function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

function replaceClass(ele, oldClass, newClass){
    if(hasClass(ele, oldClass)){
        removeClass(ele, oldClass);
        addClass(ele, newClass);
    }
    return;
}
//Klikniety zosta³ przycisk Finish lub Skip
function clickedFinish(){
	stopCount();
	   if(flag===0){
		stopCount();
		flag=1;
		 return recalling();
	}
	else if(flag===1){ stopCount(); flag =2;return drawLastWindow();}
	else if(c===0 && flag===2 || c<0 && flag ==2){ stopCount(); flag =3;return drawTheEnd();}
}
function timedCount(c) {
	var minutes=Math.floor(c/60);
		var seconds=c%60;
		 if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}
		var timetoshow=minutes+'  : '+seconds;
		
   document.getElementById("clock").innerHTML = timetoshow;
 

    t = setTimeout(function(){ timedCount(c) }, 1000);

    if(c===0&&flag===0){
		stopCount();
		flag=1;
		 return recalling();
	}
	else if(c===0 && flag===1){ stopCount(); flag =2;return drawLastWindow();}
	else if(c===0 && flag===2){ stopCount(); flag =3;return drawTheEnd("50.000s");}
	else if(c===0){stopCount(); return;}
	   c = c - 1;
}
var liczba = 4;
function startCount(s) {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount(s);
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}

function recalling() {
	if(document.body.onkeydown)
	{document.body.onkeydown="";}

    document.getElementById("left").innerHTML = "";
    document.getElementById("middle").innerHTML = "";
    document.getElementById("right").innerHTML = "";
  var d=document.getElementById("clock").innerHTML = "";
  clearTimeout(t);
	//timedCount(5, 0,"recalling"); 
	return startCount(50);
}



/////////////////////////////////////////
//Funkcja POWIÊKSZENIA obrazka - pokazania po prawej i najechania na obrazek dolny
var bigImage = function(obj) {
    var id = obj.id;		
    id = id.toString();

    if(id!="act_img" && id!="" && obj.className=="small_img")
    {
    var gg = document.getElementById(id).getAttribute("src");
    document.getElementById("show_img").src = gg;

  }
}

//44444444444

function restartGame(){
akt=0;
previous = "left";
 change = 0;
// 
 howmanypicturesincase=149;
// do zegara
c = 0;
myModule.reset();
 timer_is_on = 0;
 flag=0;
	    var toPut=
        '<div id="nav">Memoraholic</div>'+
        '<div class="start">'+
			'<form id="howmanypic" style="font-size: 50%;">'+
			  '<span style="font-size:1.5rem;">How many pictures to remember ? </span>'+
			  '<input type="number" id="how-many-pic" onchange="changeNumberOfPics()" name="how-much" min="3" max="30" value='+howmanypictures+'>'+
			'</form>'+
			'<button onclick="showPicsOnSecondWindow()" class="btn-start" id="przycisk">START</button>'+
			'<p class="tip">You can use an enter to start or restart game and a space to skip and finish</p>'+
'</div>';
document.getElementById("pojemnik").innerHTML=toPut;
stopwatch.start();
}
function drawTheEnd(){
	//var show_time=timing.getTime(); //TIME 
	stopwatch.stop();
showtimer = stopwatch.printElapsed();
	
	

	var show_answers_images="";
	var images_in_class = document.getElementsByClassName("upper_img");
var right_pictures='<br><br>';
	show_answers_images+='<div class="answer-images">';
	for(var i=0;i<images_in_class.length;i++){
		var n = images_in_class[i].src; 
		

		var start_source=n.indexOf("img/")+4; //move behind img/
		var res = n.slice(start_source, n.length-4); //remove .jpg

//right_pictures+='<img class="fake" src="'+'img/'+myModule.getTable()[i]+'.jpg'+'"></img>';

show_answers_images += '<img src="'+n+'"></img>';
		if(res!==myModule.getTable()[i].toString()){
			//	show_answers_images += '<img src="'+n+'"></img>';
				right_pictures+='<img class="fake" src="'+'img/'+myModule.getTable()[i]+'.jpg'+'"></img>';
			}
			else{
		//show_answers_images += '<img src="'+n+'"></img>';
		right_pictures+='<img src="'+'img/'+myModule.getTable()[i]+'.jpg'+'"></img>';
			}
	}
	
	show_answers_images+=right_pictures;
	show_answers_images+="</div>";
	//wyczyszczenie i rysowanie okien na nowo

	var putIt ="";
			document.getElementById("pojemnik").innerHTML ="";
	putIt+=   '<div id="nav"><div id="finish-clock"> '+showtimer+'</div></div>';
	putIt+=show_answers_images;
	document.getElementById("pojemnik").innerHTML =putIt+
	'<div style="clear:both;"></div><div id="restart" ><button onclick="restartGame()" class="restart-btn" >Restart ?</button></div>';
	
}
