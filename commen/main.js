let member;
let comment_message;
let comment_boxes = document.getElementById("comment-boxes");
var wrapper = document.createElement('div');


function store_btn_click(){
if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        }else{
            localStorage.clickcount = 1;
        }
    }
}


function signup_member_count(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.signupcount) {
            localStorage.signupcount = Number(localStorage.signupcount)+1;
        }else{
            localStorage.signupcount = 1;
        }
    }
}
    


function last_login_member(member){
    localStorage.setItem('last_login_member', member);
}


//********************************* showing side navbar and side closing navbar *****************************//    

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


function show_div(){    
 
//*********************************   showing save comments *****************************//    
    if(localStorage != null){
        for(var i=1, len=localStorage.length; i<=len; i++) {
            for(var j=1, len=localStorage.length; j<=len; j++) {
                var key = localStorage.key(j-1);
                var value = localStorage[key];
                if(key == `div ${i}`){
                    var d1 = document.getElementById('comment-boxes');
                    d1.insertAdjacentHTML('beforeend', value);
                }
            }
        }
    }
        if(localStorage != null){
            for(var i=1, len=localStorage.length; i<=len; i++) {
                for(var j=1, len=localStorage.length; j<=len; j++) {
                    var key = localStorage.key(j-1);
                    var value = localStorage[key];
                    if(key.substring(0,2) == `${i}r`){
                        var r1 = document.getElementsByClassName('comment-box-class')[`${i}`];
                        r1.insertAdjacentHTML('afterend', value);    
                    }
                }
            }
    
       
//*********************************   showing login member name on top-right corner *****************************//    
    if(localStorage['last_login_member'] != null)
        document.getElementById('fetch-username-after-login').innerHTML = localStorage['last_login_member'];
    }

//*********************************   showing likes and dislikes after reload*****************************//    
    for( let m = 1; m<=localStorage.clickcount; m++){
            document.getElementById(m).innerHTML = localStorage[`like ${m}`];
            if(localStorage[`like ${m}`] != 0){
                document.getElementById(m).style.color = 'black';
            }
            document.getElementById(`d${m}`).innerHTML = localStorage[`dislike ${m}`];
            if(localStorage[`dislike ${m}`] != 0){
                document.getElementById(`d${m}`).style.color = 'black';
            }
        }

   if(localStorage != null){
        for(let z = 1; z<=localStorage.clickcount;z++ ){
            let y = Number(localStorage[`year ${z}`]);
            let m = Number(localStorage[`month ${z}`]);
            let d = Number(localStorage[`day ${z}`]);
            let h = Number(localStorage[`hour ${z}`]);
            let min = Number(localStorage[`min ${z}`]);
            let s = Number(localStorage[`sec ${z}`]);
            let mil = Number(localStorage[`mili ${z}`]);
            let current= new Date();
            document.getElementsByClassName('time_ago')[z].innerHTML = timeDifference(current,new Date(y,m,d,h,min,s,mil));    
            document.getElementsByClassName('posted_ago')[z].innerHTML = `${d}/${m+1}/${y}`;        
        }    
   }

/*****************************  showing navbar ---->  signup login signout *******************/

if(document.getElementById('fetch-username-after-login').innerHTML == 'Guest'){
    document.getElementById('a_signup').style.display='block';
    document.getElementById('a_login').style.display='block';        
}else{
    document.getElementById('a_signout').style.display='block';
}

   
}

function like(like_id){
    if(localStorage['last_login_member'] != 'Guest'){
        for(let k =1; k<= localStorage.clickcount; k++){
            if(like_id == k ){
                let found;
                let searching_name = `like${like_id} ${localStorage['last_login_member']}`;
                for(let v=0; v<localStorage.length; v++){
                    if(localStorage.key(v) == searching_name){
                        found = 1; 
                    }else{
                        continue;
                    }
                }
                if(found == 1){
                    alert('you liked it already');
                }else{
                    localStorage.setItem(searching_name,searching_name);
                    document.getElementById(k).style.color = 'black';
                    if(localStorage[`dislike ${k}`] != 0 ){
                        for(let y = 0; y<localStorage.length; y++){
                            if(localStorage.key(y) == `dislike${k} ${localStorage['last_login_member']}`){
                                localStorage.removeItem(`dislike${k} ${localStorage['last_login_member']}`);
                            }
                        }
                    }
                   
                    let like_count = 0;
                    for(let f = 0; f<localStorage.length; f++){
                        if(localStorage.key(f).substring(0,5) == `like${k}`){
                            like_count += 1;
                        }
                    }
                    localStorage[`like ${k}`] = like_count;
                    document.getElementById(like_id).innerHTML = localStorage[`like ${k}`];
                   
                    let dislike_count = 0;
                    for(let f = 0; f<localStorage.length; f++){
                        if(localStorage.key(f).substring(0,8) == `dislike${k}`){
                            dislike_count += 1;
                        }
                    }
                    localStorage[`dislike ${k}`] = dislike_count;
                    document.getElementById(`d${k}`).innerHTML = localStorage[`dislike ${k}`];
                }
            } 
        }
    }else{
        alert('please login to like');
    }
}


function dislike(dislike_id){
    if(localStorage['last_login_member'] != 'Guest'){
        for(let z =1; z<= localStorage.clickcount; z++){
            if(dislike_id == `d${z}` ){
                let found;
                let searching_name = `dislike${z} ${localStorage['last_login_member']}`;
                for(let v=0; v<localStorage.length; v++){
                    if(localStorage.key(v) == searching_name){
                        found = 1; 
                    }else{
                        continue;
                    }
                }
                if(found == 1){
                    alert('you disliked it already');
                }else{
                    localStorage.setItem(searching_name,searching_name); 
                    document.getElementById(`d${z}`).style.color = 'black';
                    if(localStorage[`like ${z}`] != 0 ){
                        for(let y = 0; y<localStorage.length; y++){
                            if(localStorage.key(y) == `like${z} ${localStorage['last_login_member']}`){
                                localStorage.removeItem(`like${z} ${localStorage['last_login_member']}`);
                            }
                        }
                    }
                   
                    let dislike_count = 0;
                    for(let f = 0; f<localStorage.length; f++){
                        if(localStorage.key(f).substring(0,8) == `dislike${z}`){
                            console.log(`dislike-dislike mila`);
                            dislike_count += 1;
                        }
                    }
                    localStorage[`dislike ${z}`] = dislike_count;
                    document.getElementById(dislike_id).innerHTML = localStorage[`dislike ${z}`];
                   
                    let like_count = 0;
                    for(let f = 0; f<localStorage.length; f++){
                        if(localStorage.key(f).substring(0,5) == `like${z}`){
                            like_count += 1;
                        }
                    }
                    localStorage[`like ${z}`] = like_count;
                    document.getElementById(z).innerHTML = localStorage[`like ${z}`];
                }
                   
            }
        }
    }else{
        alert('please login to dislike');
    }
    
}



function writeAcomment(){
    if(localStorage['loggedin'] == 1){
        document.getElementById('fetch-username-after-login').innerHTML = localStorage['last_login_member'];
        document.getElementById('message-box-popup').style.display='block';
    }else{
        alert('you are not logged in login first');
        document.getElementById('modal-wrapper').style.display='block'; 
    }
}

function signout(){
    localStorage.setItem('loggedin', 0);
    localStorage.setItem('last_login_member', 'Guest');
    document.getElementById('fetch-username-after-login').innerHTML = localStorage['last_login_member'];
    location.reload();
}



function isuserloggedin(){
    if(localStorage['loggedin'] == 1){
        document.getElementById('fetch-username-after-login').innerHTML = localStorage['last_login_member'];
        document.getElementById('message-box-popup').style.display='block';
        document.getElementById('a_signup').style.display='none';
        document.getElementById('a_login').style.display='none';
        document.getElementById('a_signout').style.display='block';
    }
}

function canuserreply(){
    if(localStorage['last_login_member'] == 'Guest'){
        alert('please login');
    }else{
        document.getElementById('message-box-popup').style.display='block';
    }
}


function login(){
let usr_found = 0;
//if login's username and password matches then login
let login_usr = document.getElementById('log-usr').value;
let login_psw = document.getElementById('log-psw').value;
    for(let p = 1; p<=localStorage.length; p++){
        // if(signup_username.indexOf(log_usr) > -1 && signup_password.indexOf(log_psw) > -1 ){ //that was blunder!  ---> arrayname.indexOf('string to be searched in array') ---> it checks if string exists or not if yes then retuen 0 else -1 
        console.log(localStorage[`signup usr ${p-1}`]); 
        if(login_usr == localStorage[`signup usr ${p-1}`] && login_psw == localStorage[`signup psw ${p-1}`]){
            localStorage['last_login_member'] = localStorage[`signup usr ${p-1}`];
            document.getElementById('modal-wrapper').style.display='none';
            document.getElementById('fetch-username-after-login').innerHTML = localStorage['last_login_member'];
            // enter message in message box //
            usr_found = 1;
            localStorage.setItem('loggedin', 1);
            isuserloggedin();
        }else{
            continue;
        }
    }
    if(usr_found != 1){
        alert('user not found please signup first');
        document.getElementById('modal-wrapper').style.display='none';
        document.getElementById('modal-wrapper-2').style.display='block'; 
    }
}

function signup(){ 
    signup_member_count();

    let signup_username = document.getElementById('sign-usr').value;
    let signup_pass = document.getElementById('sign-psw').value;

    localStorage.setItem(`signup usr ${localStorage.signupcount}`, signup_username);
    localStorage.setItem(`signup psw ${localStorage.signupcount}`, signup_pass);
    document.getElementById('modal-wrapper-2').style.display='none';
    
    localStorage.setItem('loggedin', 1);

    localStorage.setItem('last_login_member', signup_username);

    isuserloggedin();
}

function Add_comment(comment_number){

    /////********************************** Storing add btn clicks ****************************////////
    store_btn_click();
    /////////********************************************************************/////////////////
    comment_message = document.getElementById("message-box-comments").value;
 
    document.getElementById('message-box-popup').style.display='none';
    console.log(comment_message);

    /////********************************** clone sample div  ****************************////////
    
    let clone =  document.getElementsByClassName("comment-box-class")[0];
    clone = clone.outerHTML;

    // comment_boxes.appendChild(clone);
    var c1 = document.getElementById('comment-boxes');
    c1.insertAdjacentHTML('beforeend', `${clone}`);

    /////********************************** changing comment-username-after-login  ****************************////////
    let comment_name_class = document.getElementsByClassName("comment-name-class")[localStorage.clickcount]
    comment_name_class.innerHTML = localStorage['last_login_member'];


    /////********************************** changing comment-message-after-login  ****************************////////
    let comment_message_class = document.getElementsByClassName("row2")[localStorage.clickcount]
    comment_message_class.innerHTML = comment_message;


    /////********************************** changing reply ---> id  ****************************////////
    let comment_reply_id = document.getElementsByClassName("r")[localStorage.clickcount]
    comment_reply_id.id = localStorage.clickcount + 'r';

    /////********************************** create variables for like an    1d dislike  ****************************////////
    document.getElementsByClassName('fetch-like-count')[localStorage.clickcount].id = localStorage.clickcount;
    document.getElementsByClassName('fetch-dislike-count')[localStorage.clickcount].id = 'd' + localStorage.clickcount;


    /////********************************** saving member name in localStorage  ****************************////////
    // last_login_member(member);


    /////********************************** create storage for time  ****************************////////
    var today = new Date();
    localStorage.setItem(`year ${localStorage.clickcount}`,Number(today.getFullYear()));
    localStorage.setItem(`month ${localStorage.clickcount}`,Number(today.getMonth()));
    localStorage.setItem(`day ${localStorage.clickcount}`,Number(today.getDate()));
    localStorage.setItem(`hour ${localStorage.clickcount}`,Number(today.getHours()));
    localStorage.setItem(`min ${localStorage.clickcount}`,Number(today.getMinutes()));
    localStorage.setItem(`sec ${localStorage.clickcount}`,Number(today.getSeconds()));
    localStorage.setItem(`mili ${localStorage.clickcount}`,Number(today.getMilliseconds()));

    /////********************************** saving the shit differently  ****************************////////
    d = document.getElementsByClassName("comment-box-class")[localStorage.clickcount];
    
    if(localStorage[`Reply_clicked`] == 1){
        d.style="margin-left: 6em;position: relative;";
        localStorage.setItem(`${localStorage[`which_reply_clicked`].substring(0,1)}r div ${localStorage.clickcount}`,`${d.outerHTML}`);
        localStorage.setItem(`Reply_clicked`,0);
    }else{
        localStorage.setItem(`div ${localStorage.clickcount}`,`${d.outerHTML}`);
    }


    /////********************************** like and dislike ****************************////////
    localStorage.setItem(`like ${localStorage.clickcount}`, 0);
    localStorage.setItem(`dislike ${localStorage.clickcount}`, 0);


    /////********************************** reload page  ****************************////////    
    location.reload();
}

function reply_clicked(comment_box_id){
    localStorage.setItem(`Reply_clicked`,1);
    localStorage.setItem(`which_reply_clicked`,comment_box_id);
}

/////********************************** timestamps like ---->  2 min ago, 1 month ago   ****************************////////    

function timeDifference(current, previous) {
    
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    
    var elapsed = current - previous;
    
    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }
    
    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }
    
    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
         return Math.round(elapsed/msPerDay) + ' days ago';   
    }
    
    else if (elapsed < msPerYear) {
         return Math.round(elapsed/msPerMonth) + ' months ago';   
    }
    
    else {
         return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}