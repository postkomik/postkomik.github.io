var fiturzo = 0,
    fiturz = 4,
    numchars = new Array,
    titleinarticle = new Array,
    relurls = new Array,
    showpostbody = new Array,
    _featuredimage = 0;

function _featuredpost(r, l) {
    for (var e = r.split("<"), n = 0; n < e.length; n++) - 1 != e[n].indexOf(">") && (e[n] = e[n].substring(e[n].indexOf(">") + 1, e[n].length));
    return e = e.join(""), e = e.substring(0, l - 1)
}

function reading_article(r) {
    for (var l = 0; l < r.feed.entry.length; l++) {
        var e = r.feed.entry[l];
        titleinarticle[fiturzo] = e.title.$t, postcontent = "", "content" in e ? postcontent = e.content.$t : "summary" in e && (postcontent = e.summary.$t), showpostbody[fiturzo] = _featuredpost(postcontent, numchars), "media$thumbnail" in e ? postimg = e.media$thumbnail.url : postimg = "https://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.GIF", _featuredimage[fiturzo] = postimg;
        for (var n = 0; n < e.link.length; n++)
            if ("alternate" == e.link[n].rel) {
                relurls[fiturzo] = e.link[n].href;
                break
            } fiturzo++
    }
}

function contains(r, l) {
    for (var e = 0; e < r.length; e++)
        if (r[e] == l) return !0;
    return !1
}

function showarticle() {
    for (var r = new Array(0), l = new Array(0), e = new Array(0), n = new Array(0), t = 0; t < relurls.length; t++) contains(r, relurls[t]) || (r.length += 1, r[r.length - 1] = relurls[t], l.length += 1, l[l.length - 1] = titleinarticle[t], e.length += 1, e[e.length - 1] = showpostbody[t], n.length += 1, n[n.length - 1] = _featuredimage[t]);
    titleinarticle = l, relurls = r, showpostbody = e, _featuredimage = n;
    for (var t = 0; t < titleinarticle.length; t++) {
        var a = Math.floor((titleinarticle.length - 1) * Math.random()),
            u = titleinarticle[t],
            i = relurls[t],
            o = showpostbody[t],
            s = _featuredimage[t];
        titleinarticle[t] = titleinarticle[a], relurls[t] = relurls[a], showpostbody[t] = showpostbody[a], _featuredimage[t] = _featuredimage[a], titleinarticle[a] = u, relurls[a] = i, showpostbody[a] = o, _featuredimage[a] = s
    }
    for (var g, m = 0, d = Math.floor((titleinarticle.length - 1) * Math.random()), c = d, h = document.URL; fiturz > m && (relurls[d] == h || (g = "<li>", g += "<a href='https://mascemplon-github-io.blogspot.com" + relurls[d] + "' rel='nofollow' title='" + titleinarticle[d] + "'><div class='_img'><img src='" + _featuredimage[d] + "' /></div></a>", g += "<a class='title-article' href='" + relurls[d] + "'>" + titleinarticle[d] + "</a>", g += "<span class='show-itempost'>" + showpostbody[d] + "</span>", g += "</li>", document.write(g), m++, m != fiturz)) && (d < titleinarticle.length - 1 ? d++ : d = 0, d != c););
} 




$(document).ready(function(){$('#_ft-arleth img').attr('src',function(i,src){return src.replace('s72-c','w160-h220-c');});});
