window.React = require('react');
var NewsAPI = require('./utils/newsAPI');
var NewsApp = require('./components/NewsApp.react');

NewsAPI.getNewsData();
NewsAPI.getTwittsData();

React.render(
    <NewsApp />,
    document.getElementById('f2enews')
);
