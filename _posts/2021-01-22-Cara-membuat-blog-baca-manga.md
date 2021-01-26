---
layout: post
title:  "Tutorial Membuat Blog Baca Manga"
author: mas cemplon
categories: [ Blog ]
tags: [ Blog ]
image: https://1.bp.blogspot.com/-DnLsS_FS7qo/X-BD7oLPuII/AAAAAAAAN5w/56C7De6-j8QG1Y5SXpiMf9B2ivT7gNOcACLcBGAsYHQ/s897/template.png
beforetoc: "Tutorial Membuat Blog Baca Manga kalian suka baca komik ? sudah pastinya banyak dong. Adapun dari beberapa pembaca ingin membuat dokumentasinya.."
toc: true
--- 

Siapa Daintara kalian suka baca komik ? sudah pastinya banyak dong. Adapun dari beberapa pembaca ingin membuat dokumentasinya yang sudah di baca ingin di simpan di dalam blog atau berkeinginan membuat blog / web tentang komik.Sebelum membahas lebih jauh adakalanya harus mengerti tentang beberapa istilah terlebih dahulu tentang Manga,Manhua dan Manhwa

Istilah Komik

Komik Biasa nya sebutan bagi orang Indonesia diamana tempat mengespresikan ide yang di kombinasikan dengan gambar serta di balut dengan teks. Biasanya orang indonesia menyebut nya komik. Dimana Kalau ada kisah, Cerita yang di balut gambar dan teks ini Tiap nengara berbeda dalam penyebutannya

Komik = sebutan orang indonesia
Manga = sebutan orang jepang
Manhua = sebutan orang cina
Manhwa = sebutan orang koran
Meski berbeda dalam penyebutannya tapi tetap satu arti

Oke langsung saja kita mulai membahas cara membuat blog baca manga

Daftar Isi

<script> var numposts = 1000; var standardstyling = true;
function startpost(json){ for (var i = 0; i < numposts; i++){ var entry = json.feed.entry[i]; var posttitle = entry.title.$t; var posturl;

if (i == json.feed.entry.length) break;

for (var k = 0; k < entry.link.length; k++){
  if (entry.link[k].rel == 'alternate'){
    posturl = entry.link[k].href;break;
  }
}
    
posttitle = posttitle.link(posturl);
if (standardstyling) document.write('<li>');

document.write(posttitle);
}

if (standardstyling) document.write(''); }

</script>
<script src="https://www.postblogger.my.id/feeds/posts/default/-/membuat%20blog%20baca%20manga?orderby=published&alt=json-in-script&callback=startpost&max-results=999"></script>
