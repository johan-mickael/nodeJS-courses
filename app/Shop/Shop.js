import { ShopRepository } from './ShopRepositoryModel.js'

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
        const data = Promise.resolve(this.shopRepository.getAll());
        console.log(Promise.resolve(data))
        return data;
    }

    getArticle(id) {
        //méthode 1
        return this.articles.find(val => {
            val.id = id
        })
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
