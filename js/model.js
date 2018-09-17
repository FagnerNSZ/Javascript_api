

//Exemplo de calsse people 
function Pessoa(_nome, _sobrenome) {
	this.Nome = _nome;
	this.Sobrenome = _sobrenome;
//alert(this.Nome + this.Sobrenome);
console.log(this.Nome + this.Sobrenome);

}


function AppViewModel( __dado__){

	this.obj =ConvertStringJson(__dado__);

	console.log(this.obj);
}

function ConvertStringJson( __DateObj__){
	var myJSON = JSON.stringify(__DateObj__);
return myJSON;
	
}



