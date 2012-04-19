
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
      title: 'Spidercake',
      links: [ 
        { name: 'Gmail',
          url: 'http://gmail.com/',
          icon: 'icon-envelope' },
        { name: 'Calendar',
          url: 'http://calendar.google.com/', 
          icon: 'icon-calendar' },
        { name: 'Docs',
          url: 'http://docs.google.com/', 
          icon: 'icon-file' },
        { name: 'Reddit',
          url: 'http://reddit.com/', 
          icon: 'icon-heart' },
        { name: 'Netflix',
          url: 'http://netflix.com/', 
          icon: 'icon-film' }
      ]
  });
};
