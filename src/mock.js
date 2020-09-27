const Mock = require('mockjs');
const Random = Mock.Random;

const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
			id: i,
            title: Random.csentence(5, 30),
            thumbnail_pic_s: Random.dataImage('300x250', 'mock picture'),
            author_name: Random.cname(),
            date: Random.date() + ' ' + Random.time()
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
 
Mock.mock('/news/index', 'post', produceNewsData);