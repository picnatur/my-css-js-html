$(document)['ready'](function() {
    function _0x4a78x1(_0x4a78x2, _0x4a78x3, _0x4a78x4) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0x4a78x3 + '?alt=json-in-script&max-results=' + _0x4a78x4,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0x4a78x5) {
                for (var _0x4a78x6 = '', _0x4a78x7 = '<div class="related">', _0x4a78x8 = 0; _0x4a78x8 < _0x4a78x5['feed']['entry']['length']; _0x4a78x8++) {
                    for (var _0x4a78x9 = 0; _0x4a78x9 < _0x4a78x5['feed']['entry'][_0x4a78x8]['link']['length']; _0x4a78x9++) {
                        if ('alternate' == _0x4a78x5['feed']['entry'][_0x4a78x8]['link'][_0x4a78x9]['rel']) {
                            _0x4a78x6 = _0x4a78x5['feed']['entry'][_0x4a78x8]['link'][_0x4a78x9]['href'];
                            break
                        }
                    };
                    var _0x4a78xa = _0x4a78x5['feed']['entry'][_0x4a78x8]['title']['$t'];
                    var _0x4a78xb = _0x4a78x5['feed']['entry'][_0x4a78x8]['content']['$t'];
                    var _0x4a78xc = $('<div>')['html'](_0x4a78xb);
                    if (_0x4a78xb['indexOf']('http://www.youtube.com/embed/') > -1 || _0x4a78xb['indexOf']('https://www.youtube.com/embed/') > -1) {
                        var _0x4a78xd = _0x4a78x5['feed']['entry'][_0x4a78x8]['media$thumbnail']['url'],
                            _0x4a78xe = _0x4a78xd['replace']('/default.jpg', '/mqdefault.jpg'),
                            _0x4a78xf = _0x4a78xe
                    } else {
                        if (_0x4a78xb['indexOf']('<img') > -1) {
                            var _0x4a78x10 = _0x4a78xc['find']('img:first')['attr']('src'),
                                _0x4a78x11 = _0x4a78x10['replace']('s72-c', 's600');
                            var _0x4a78xf = _0x4a78x11
                        } else {
                            var _0x4a78xf = 'http://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s1600-r/nth.png'
                        }
                    };
                    _0x4a78x7 += '<li><div class="related-thumb"><a class="related-img" href="' + _0x4a78x6 + '" style="background:url(' + _0x4a78xf + ') no-repeat center center;background-size: cover"/></div><h2 class="related-title"><a href="' + _0x4a78x6 + '">' + _0x4a78xa + '</a></h2></li>'
                };
                _0x4a78x7 += '</div>', _0x4a78x2['html'](_0x4a78x7)
            }
        })
    }
    $('#related-posts')['each'](function() {
        var _0x4a78x2 = $(this),
            _0x4a78x3 = _0x4a78x2['text'](),
            _0x4a78x4 = 3;
        _0x4a78x1(_0x4a78x2, _0x4a78x3, _0x4a78x4)
    })
});
$(document)['ready'](function() {
    setInterval(function() {
        if (!$('#mycontent:visible')['length']) {
            window['location']['href'] = 'http://www.soratemplates.com/'
        }
    }, 3000)
});
window['onload'] = function() {
    var _0x4a78x3 = document['getElementById']('mycontent');
    _0x4a78x3['setAttribute']('href', 'http://www.soratemplates.com/');
    _0x4a78x3['setAttribute']('rel', 'nofollow');
    _0x4a78x3['setAttribute']('title', 'Free Blogger Templates');
    _0x4a78x3['setAttribute']('style', 'display: inline-block!important; font-size: inherit!important; color: #c0af94!important; visibility: visible!important;z-index:99!important; opacity: 1!important;');
    _0x4a78x3['innerHTML'] = 'SoraTemplates'
}
