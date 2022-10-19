export class Bill {
    id
    moyenDePaiement
    numeroBonDeCommande
    date
    panierDeCommande

    Bill
        (id, moyenDePaiement, numeroBonDeCommande, date, panierDeCommande) {
        this.id = id
    }

    constructor(id, moyenDePaiement, numeroBonDeCommande, date, panierDeCommande) {

    }
}