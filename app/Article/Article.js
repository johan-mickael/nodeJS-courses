export class Article {
    id
    designation
    prix
    quantite
    categorie

    Article(id, designation, nom, prix, quantite, categorie) {
        this.id = id
    }

    constructor(id, designation, nom, prix, quantite, categorie) {

    }
    getFavorite(id) {
        return this.designation.find(val => {
            val.id = id
        })
    }

    getBill(id) {
        return this.designation.find(val => {
            val.id = id
        })
    }

    removeBill(article) {
        this.designation = this.article.filter((value) => {
            value.id != id
        })
    }
}