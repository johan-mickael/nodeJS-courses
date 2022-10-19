export class Basket {
    id
    articles
    client
    prixTotal

    Basket
        (id, articles, client, prixTotal) {
        this.id = id
    }

    constructor(id, articles, client, prixTotal) {

    }

    addArticle(article, quantite) {
        if (this.boutique.getArticle(article.id) != null) {
            article.quantite = quantite
            if (this.boutique.getArticle().quantite > quantite)
                this.boutique.getArticle().quantite -= quantite
            this.articles.push(article)
            this.prixTotal = this.prixTotal + article.prix
            return true
        } else {
        }
        return false
    }
    getArticle(id) {
        //méthode 1
        return this.articles.find(val => {
            val.id = id
        })
        //méthode 2
        return this.articles.filter((value, index) => {
            id == value.id
        })[0]
    }


    removeArticle(article) {
        //méthode 1
        this.articles.find((value, index) => {
            if (article == value) {
                this.articles.splice(index, 1)
            }
        })
        //méthode 2
        this.articles = this.article.filter((value) => {
            article != value
        })
    }

    removeArticle(id) {
        this.articles = this.article.filter((value) => {
            value.id != id
        })
    }

    afficherArticles = () => {
        this.articles.forEach((element, index) => console.log(element));
    }
}