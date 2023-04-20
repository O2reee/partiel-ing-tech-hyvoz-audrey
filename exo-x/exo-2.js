class AVION { 
	constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
		this.marque = marque;
		this.modele = modele ;
		this.nbPlace = nbPlace;
		this.reservoir = reservoir;
		this.vitesse = vitesse;
	}

	const monAvion = new Avion("Airbus", "A250", 40, 200, 20000, 900);

	getmarque() {
		return this._marque;
	}

	getmodele() {
		return this._modele;
	}

	getlongueur() {
		return this._longueur;
	}


	getnbPlace() {
		return this._nbPlace;
	}


	getreservoir() {
		return this._reservoir;
	}

	getvitesse() {
		return this._vitesse;
	}

	setlongueur(value) {
		this._longueur = value;
	}
	
	setmarque(value) {
		this._marque = value;
	}

	setmodele(value) {
		this._modele = value;
	}

	setnbPlace(value) {
		this._nbPlace = value;
	}

	setreservoir(value) {
		this._reservoir = value;
	}
	setvitesse(value) {
		this._vitesse = value;
	}

}
