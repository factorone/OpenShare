(function() {

    // babel runtime polyfill
    // required for some ES6 features
    // require('babel/polyfill');

    var OpenShare = require('./modules/open-share'),
        DataAttr = require('./modules/data-attr');

    new DataAttr(OpenShare);
})();
