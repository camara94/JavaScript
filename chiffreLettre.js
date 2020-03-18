function nbreEnLettre(nombre){
	if(isNaN(nombre) || nombre < 0 || nombre > 999){
		return "Veuillez donnez un nombre compris entre 0 et 999";
	 }
	var unite,dizaine,centaine;
	var uniteL,dizaineL,centaineL;
	centaine = parseInt(nombre/100);
	dizaine = parseInt((nombre%100)/10);
	unite = parseInt(nombre%10);
		
	//console.log("centaine = " + centaine + "\n" + "dizaine = " + dizaine + "\nunité = " + unite);
	
	if(nombre == 0){

		return 'zéro';
	}
	else{
		//les tableaux aides
		var unitaire = ['','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quartoze','quinze','seize','dix-sept','dix-huit','dix-neuf'];
		var diziene = ['','dix','vingt','trente','quarante','cinquante','soixante','soixante','quatre-vingt','quatre-vingt'];
		
		//Ici si le nombre saisi par l'utilisateur est inférieur à 10, on le récupère en toute lettre à travers le unitaire
		uniteL = (unite!= 0 && dizaine ==0 )? unitaire[unite]:"";
		//console.log(uniteL);

		if(dizaine == 1 && unite > 0){
			//Ici si le nombre saisi par l'utilisateur est supérieur à 10, on le récupère en toute lettre à travers le unitaire
			dizaineL = unitaire[10+unite];
			uniteL = '';
			//console.log(dizaineL);
		}
		else if(dizaine == 7 || dizaine == 9){
			//Ici si le nombre saisi par l'utilisateur est entre 70 à 79 ou entre 90 à 99, on le récupère en toute lettre à travers le tableau diziene
			dizaineL = diziene[dizaine] + (unite == 1 ? '-et-':'-') + unitaire[10 + unite] ;
		        uniteL = '';
			//console.log(dizaineL);
                 
		}
                else if(dizaine >0 && unite >0){
			//Ici si le nombre saisi par l'utilisateur est tout  dizaine + 1 ou plus (21....29;31.....39;.....) , on le récupère en toute lettre à travers le diziene
			dizaineL = diziene[dizaine] + (unite == 1 ? '-et-':'-') + unitaire[unite];
			//console.log(dizaineL);
		}
		else{
			//Ici si le nombre saisi par l'utilisateur est tout dizaine(10,20,30,.....), on le récupère en toute lettre à travers le tableaux diziene ci-dessus
			dizaineL = diziene[dizaine];
		}
		
		centaineL = (centaine > 0 ? 'cent':'') + (centaine > 1 ? 's':'');
		//console.log(centaineL);

		var resultat = centaineL + (centaine && dizaine ? '-':'') + dizaineL + (centaine && unite || centaineL && unite ? '-':'') + uniteL;
		//console.log(resultat);
		return resultat;
	}

}
var nbre ;
while(nbre = prompt("Donnez le nombre à écrire en lettre compris(entre 0 et 999)")){
	console.log(nbre + ":" + nbreEnLettre(Number(nbre)));
	nbre='';
}