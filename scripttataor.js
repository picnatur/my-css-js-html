$(document)['ready'](function() {
    setInterval(function() {
        if (!$('#mycontent:visible')['length']) {
            window['location']['href'] = 'https://picnaturr.blogspot.com'
        }
    }, 3000)
});
window['onload'] = function() {
    var _0x204cx1 = document['getElementById']('mycontent');
    _0x204cx1['setAttribute']('href', 'https://picnaturr.blogspot.com');
    _0x204cx1['setAttribute']('rel', 'nofollow');
    _0x204cx1['setAttribute']('title', 'Free Blogger Templates');
    _0x204cx1['setAttribute']('style', 'display: inline-block!important; font-size: inherit!important; color: #0be6af!important; visibility: visible!important;z-index:99!important; opacity: 1!important;');
    _0x204cx1['innerHTML'] = 'Picnatur'
};

function removeHtmlTag(_0x204cx3, _0x204cx4) {
    if (_0x204cx3['indexOf']('<') != -1) {
        var _0x204cx5 = _0x204cx3['split']('<');
        for (var _0x204cx6 = 0; _0x204cx6 < _0x204cx5['length']; _0x204cx6++) {
            if (_0x204cx5[_0x204cx6]['indexOf']('>') != -1) {
                _0x204cx5[_0x204cx6] = _0x204cx5[_0x204cx6]['substring'](_0x204cx5[_0x204cx6]['indexOf']('>') + 1, _0x204cx5[_0x204cx6]['length'])
            }
        };
        _0x204cx3 = _0x204cx5['join']('')
    };
    _0x204cx4 = (_0x204cx4 < _0x204cx3['length'] - 1) ? _0x204cx4 : _0x204cx3['length'] - 2;
    while (_0x204cx3['charAt'](_0x204cx4 - 1) != ' ' && _0x204cx3['indexOf'](' ', _0x204cx4) != -1) {
        _0x204cx4++
    };
    _0x204cx3 = _0x204cx3['substring'](0, _0x204cx4 - 1);
    return _0x204cx3 + '...'
}

function createSnippet(_0x204cx8) {
    var _0x204cx9 = document['getElementById'](_0x204cx8);
    var _0x204cxa = snippet_count;
    var _0x204cxb = '<div class="snippets">' + removeHtmlTag(_0x204cx9['innerHTML'], _0x204cxa) + '</div>';
    _0x204cx9['innerHTML'] = _0x204cxb
}
