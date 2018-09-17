/* Interação de controller 
	TODO: aqui deve tratar as requisiçoes de url

*/


function Initialize(){
	 this.DescriptionFunction = 'Initialize object description for process initialize service javascript';  
	 this.loadConfig = "";
	 this.oninit = function(){
	 	//alert('Obs:Initialize  ' + this.DescriptionFunction);

	 	console.log(this.DescriptionFunction);
	 
	 	var coffees = ["French Roast", "Colombian", "Kona"];
	 	for (var i = coffees.length - 1; i >= 0; i--) {
	 		console.log(coffees[i]);

	 	}

	 	var p = AppViewModel(coffees);
	 		alert(coffees);

		var Requeset_ = new Requeset();
		Requeset_.whatAmI();
		
	 };
 }; 










function json(){
var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj);
//
return myJSON;

}

//TODO: Construir 

function Requeset(){

 this.iAm = 'an object';  
	 this.whatAmI = function(){
	 	//alert('I am ' + this.iAm);
	 	//window.location = "index.html";

	 };
 }; 



function myObject(){  
 this.iAm = 'an object';  
 this.whatAmI = function(){
 	alert('I am ' + this.iAm);
 };
 }; 


function IController(){
	//alert("teste");


const Http = new XMLHttpRequest();
const url='http://localhost/API_JAVASCRIPT/index.html';
Http.open("GET", url);
Http.send();
	Http.onreadystatechange=(e)=>{
	console.log(Http.responseText)
	}
}

//######################################
// Autentica dados do cliente
function IlAuthentication_app(){

//var pessoa = new Pessoa("Usuário","Fulano");
//	console.log(pessoa);

var myObj = { "name":"John", "age":31, "city":"New York" };
var app = new AppViewModel(myObj);

console.log(app);

}

function IActionController(){

	
}






