// alert('yo');
// alert($);

//『關鍵在於js可以把function當作value傳入』
//1.1. 用jquery ajax 取得資料
// var articles = $.ajax( "http://localhost:3000/articleList" ).done(function(result){
//     console.log(result[0]) ;
// });

//1.2. 用 named function傳入callback (closure function)另外包裹傳回的資料：適用情境為 需要的資料具『階層/多層』的表現
//1.2.1.
// function getArticleList(){
//     $.ajax("http://localhost:3000/articleList").done(function(result){
//         //do some thing with result..
//     });
// }
//
//1.2.2. 傳入callback、用callback吃result做相關處理：分開的版本
// function getArticleList(callback){
//     $.ajax("http://localhost:3000/articleList").done(function(result){
//         callback(result) ;
//     });
// }
//
// getArticleList(function(articles){
//     articles.forEach(function(article){
//        console.log(article.title) ;
//     });
// });
//
//1.2.3. 傳入callback、用callback吃result做相關處理：寫再一起的版本
// function getArticleList(){
//     $.ajax("http://localhost:3000/articleList").done(function(result){
//         result.forEach(function(article){
//             console.log(article.title) ;
//         });
//     });
// }
//
// getArticleList();
//『關鍵在於js可以把function當作value傳入』
//
//
//2.用callback包裹以取得更深層的資料
//2.1.通通寫再一起的版本、義大利麵版、callback hell版本
// function getArticleListPlusGetTheAriticle(){
//     $.ajax( "http://localhost:3000/articleList" ).done(function(articleList){
//         console.log(articleList[2].id);
//         $.ajax( "http://localhost:3000/articles/" + articleList[2].id  ).done(function(resultOrYouCanCallTheArticle){
//                 console.log(resultOrYouCanCallTheArticle);
//         }) ;
//     }) ;
// }
// getArticleListPlusGetTheAriticle();
//
// 2.2.分開寫、傳callback, closure function進去吃ajax傳回來的資料
// function getArticleList(callback){
//     $.ajax( "http://localhost:3000/articleList" ).done(function(articleList){
//         callback(articleList) ;
//     });
// }
//
// function getArticle(id, callback){
//     $.ajax("http://localhost:3000/articles/" + id ).done(function(article){
//         callback(article) ;
//     });
// }
//
// getArticleList(function(articleList){
//     getArticle(articleList[2].id, function(article){
//         console.log(article) ;
//     });
// });
//整理步驟in最外層：最外層function定義、撰寫其中的ajax處理、在ajax處理中用callback來吃ajax回傳的資料以提供彈性在未來呼叫此函式的地方用callback做相對應的處理、最外層的function參數定義中補上callback
//『關鍵在於js可以把function當作value傳入』
//整理步驟in需要用到外層回傳資料的裏層：裏層function定義、撰寫裏層的ajax處理、ajax需要用到外層回傳資料articleList中資料articleId、在裏層function的參數定義補上function要執行所需的資料articleId的定義、完成ajax處理的撰寫、針對回傳資料做相對應的處理、為了提供一定的彈性因此用『callback』來吃回傳資料，解耦，把回傳資料的處理留給未來、補上裏層function的callback參數的定義
//『為了提供一定的彈性因此用『callback』來吃回傳資料，解耦，把回傳資料的處理留給未來、補上裏層function的callback參數的定義』