function convertir() {

	var n = parseInt(document.getElementById('second').value);
	if(n<0)
	{
		document.getElementById('second').focus();
		n=parseInt(document.getElementById('second').value);
		document.getElementById('erreur').textContent = "la saisi doit être supérieur à zéro(0)";
	} else {
		var h = parseInt(n/3600);
		var min = parseInt((n%3600)/60);
		var s = (n%3600)%60;
		var p =document.getElementById('heure').value = h + ":"+ min + ":"+s;
		var  c = document.getElementById('erreur');

		document.getElementById('erreur').textContent="";
	}	
};

			