import { ShopRepository } from './ShopRepository.js'

export class Shop {
    id
    articles
    name
    address
    ownerName
    shopRepository

    Shop
        (id, articles, nom, adresse) {
        this.id = id
    }

    constructor() {
        this.shopRepository = new ShopRepository();
    }

    getAll() {
        return this.shopRepository.getAll();
    }

    getArticle(id) {
        return this.articles.find(val => {
            val.id = id
        })
    }


    removeArticle(article) {
        this.articles.find((value, index) => {
            if (article == value) {
                this.articles.splice(index, 1)
            }
        })
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
