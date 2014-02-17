let data = require( 'sdk/self' ).data;
let pageMod = require( 'sdk/page-mod' );

exports.main = function () {
  pageMod.PageMod({
    include: '*.p2.wprssaggregator.com',
    contentStyleFile: data.url( 'style.css' )
  });
};