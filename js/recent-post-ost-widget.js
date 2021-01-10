var showgambarpost = true;
var readmorelink = true;
var showkomentar = false;
var showreleasedate = false;
var showkonten = true;
var summarychars = 150;

function tampilkanrecentpostost(_0xef67x8) {
    document.write('<ul class="request-post">');
    for (var _0xef67x9 = 0; _0xef67x9 < tampilkanpost; _0xef67x9++) {
        var _0xef67xa, _0xef67xb = _0xef67x8.feed.entry[_0xef67x9],
            _0xef67xc = _0xef67xb.title.$t;
        if (_0xef67x9 == _0xef67x8.feed.entry.length) {
            break
        };
        for (var _0xef67xd = 0; _0xef67xd < _0xef67xb.link.length; _0xef67xd++) {
            if ('replies' == _0xef67xb.link[_0xef67xd].rel && 'text/html' == _0xef67xb.link[_0xef67xd].type) {
                var _0xef67xe = _0xef67xb.link[_0xef67xd].title,
                    _0xef67xf = _0xef67xb.link[_0xef67xd].href
            };
            if ('alternate' == _0xef67xb.link[_0xef67xd].rel) {
                _0xef67xa = _0xef67xb.link[_0xef67xd].href;
                break
            }
        };
        var _0xef67x10;
        try {
            _0xef67x10 = _0xef67xb.media$thumbnail.url
        } catch (h) {
            s = _0xef67xb.content.$t, a = s.indexOf('<img'), b = s.indexOf('src="', a), c = s.indexOf('"', b + 130), d = s.substr(b + 130, c - b - 130), _0xef67x10 = -130 != a && -130 != b && -130 != c && '' != d ? d : 'https://1.bp.blogspot.com/-BCrd0J3cSTo/WPVMxaJ9tUI/AAAAAAAABdY/BYuvCHaDspYWANC3LzGhySyBxUl4YHKdgCLcB/s1600/no-images.jpg'
        };
        var _0xef67x11 = _0xef67xb.published.$t,
            _0xef67x12 = _0xef67x11.substring(0, 4),
            _0xef67x13 = _0xef67x11.substring(5, 7),
            _0xef67x14 = _0xef67x11.substring(8, 10),
            _0xef67x15 = new Array;
        if (_0xef67x15[1] = 'Jan', _0xef67x15[2] = 'Feb', _0xef67x15[3] = 'Mar', _0xef67x15[4] = 'Apr', _0xef67x15[5] = 'May', _0xef67x15[6] = 'Jun', _0xef67x15[7] = 'Jul', _0xef67x15[8] = 'Aug', _0xef67x15[9] = 'Sep', _0xef67x15[10] = 'Oct', _0xef67x15[11] = 'Nov', _0xef67x15[12] = 'Dec', document.write('<li class="recent-posts-list"><a href="' + _0xef67xa + '">'), 1 == showgambarpost && document.write('<img class="gambar-postingan" src="' + _0xef67x10 + '"/>'), document.write('</a><h3 class="title-posts"><a href="' + _0xef67xa + '"><span>' + _0xef67xc + '</span></a></h3>'), 'content' in _0xef67xb) {
            var _0xef67x16 = _0xef67xb.content.$t
        } else {
            if ('summary' in _0xef67xb) {
                var _0xef67x16 = _0xef67xb.summary.$t
            } else {
                var _0xef67x16 = ''
            }
        };
        var _0xef67x17 = /<\S[^>]*>/g;
        if (_0xef67x16 = _0xef67x16.replace(_0xef67x17, ''), 1 == showkonten) {
            if (_0xef67x16.length < summarychars) {
                document.write(_0xef67x16)
            } else {
                _0xef67x16 = _0xef67x16.substring(0, summarychars);
                var _0xef67x18 = _0xef67x16.lastIndexOf(' ');
                _0xef67x16 = _0xef67x16.substring(0, _0xef67x18), document.write(_0xef67x16 + '...')
            }
        };
        var _0xef67x19 = '',
            _0xef67x1a = 0;
        document.write('<div class="post-details"><span class="dett">'), 1 == showreleasedate && (_0xef67x19 = _0xef67x19 + _0xef67x15[parseInt(_0xef67x13, 10)] + ' ' + _0xef67x14 + ' ' + _0xef67x12, _0xef67x1a = 1), 1 == readmorelink && (1 == _0xef67x1a && (_0xef67x19 += ' </span>'), _0xef67x19 = _0xef67x19 + '<span class="redmore"><a href="' + _0xef67xa + '" class="urls" target ="_top">Selengkapnya</a></span>', _0xef67x1a = 1), 1 == showkomentar && (1 == _0xef67x1a && (_0xef67x19 += ' <br> '), '1 Comments' == _0xef67xe && (_0xef67xe = '1 Comment'), '0 Comments' == _0xef67xe && (_0xef67xe = 'No Comments'), _0xef67xe = '<a href="' + _0xef67xf + '" target ="_top">' + _0xef67xe + '</a>', _0xef67x19 += _0xef67xe, _0xef67x1a = 1), document.write(_0xef67x19), document.write('</div>'), document.write('</li>')
    };
    document.write('</ul>')
}




var tampilkanpost = 10;
document.write("<script src=https://mascemplon-github-io.blogspot.com\/feeds\/posts\/default/-/artikel?orderby=published&alt=json-in-script&callback=tampilkanrecentpostost><\/script>");


 
