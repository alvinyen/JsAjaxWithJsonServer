var _ = require("lodash") ;
var faker = require("faker") ;
const root = 20 ;
var articles = 0 ;
module.exports = function(){
    var authorsArray = generateAuthors(faker.random.number(root)) ;

    var articleList = [] ;
    authorsArray.forEach(function(author){
        author.articles.forEach(function(article){
            articleList.push( {
                articleId : article.articleId ,
                title : article.title
            } ) ;
        });
    }) ;

    var articles = [] ;
    authorsArray.forEach(function(author){
        author.articles.forEach(function(article){
            articles.push( {
                authorId : author.authorId ,
                articleId : article.articleId ,
                title : article.title ,
                content : article.content ,
                timestamp : article.timestamp
            } ) ;
        });
    }) ;

    var authors = [] ;
    authorsArray.forEach(function(author){
        authors.push( {
            authorId : author.authorId ,
            numberOfArticles : author.articles.length ,
            authorName : author.authorName ,
            authorEmail : author.email
        } ) ;
    });

    return {
        articleList : articleList ,
        articles : articles ,
        authors : authors
        // author : _.times(8, function(index){
        //     return {
        //         id: index,
        //         name: faker.name.findName() ,
        //         address : faker.internet.email()
        //     } ;
        // })
    }
}

function generateArticles(times){
    return _.times(times , function (index) {
        return  {
            articleId : articles++ ,
            title : faker.lorem.sentence() ,
            content : faker.lorem.paragraphs() ,
            timestamp : faker.date.past()
        }  ;
    });
}

function generateAuthors(times){
    return _.times(times , function (index) {
        return {
            authorId : index ,
            authorName : faker.name.findName() ,
            timestamp : faker.internet.email() ,
            articles : generateArticles(faker.random.number(root))
        }
    });
}