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
const avion = [
new Avion("Airbus", "A250", 40, 200, 20000, 900),
new Avion("Airbus", "A350", 50, 210, 20100, 1000),
new Avion("Airbus", "A450", 60, 220, 20200, 1100),
new Avion("Airbus", "A550", 70, 230, 20300, 1200),
new Avion("Airbus", "A650", 80, 240, 20400, 1300),
];