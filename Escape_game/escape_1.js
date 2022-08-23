let check_ans = [false, false, false] // locks (5-nums_lock, 4-nums_lock, 4-letters_lock)
let check_item = [false, false, false, false] // keys (drawer4_key, diamond_key, half_key_security, half_key_wardrobe)

var cookieObj = parseCookie()
for (var i = 0; i < check_ans.length; i++) {
    var ans = cookieObj['check_ans' + String(i + 1)]
    if (ans === 'true') check_ans[i] = true
    else if (ans === 'false') check_ans[i] = false
}
for (var i = 0; i < check_item.length; i++) {
    var item = cookieObj['check_item' + String(i + 1)]
    if (item === 'true') check_item[i] = true
    else if (item === 'false') check_item[i] = false

}

console.log('now')
console.log(check_ans)
console.log(check_item)

// window.onbeforeunload = function() {
//     document.cookie = ''
// }

// update now state
function update_state() {

    if (check_ans[0]) {
        // var num_lock = document.getElementById("num_lock")
        // num_lock.style.visibility = "hidden";
        var popUp = document.getElementById("book_paper");
        popUp.setAttribute('src', 'images/book.png');
        popUp.setAttribute('class', 'click')
        popUp.setAttribute('onclick', "takeout('book_paper')")
    }
    if (check_ans[1]) {
        // var num_lock = document.getElementById("num_lock2")
        // num_lock.style.visibility = "hidden";

        var popUp = document.getElementById("close_wardrobe");
        popUp.setAttribute('src', './images/open_wardrobe.png')
        popUp.style.width = '40 vw'
        popUp.setAttribute('onclick', 'details("wardrobe_key")')
    }
    if (check_ans[2]) {
        // var letter_lock = document.getElementById("letter_lock")
        // letter_lock.style.visibility = "hidden";
    }
    if (check_item[0]) {
        var popUp = document.getElementById("box_key");
        popUp.setAttribute('src', 'images/empty_vase.png');
    }
    if (check_item[1]) {
        var popUp = document.getElementById("diamond");
        popUp.setAttribute('src', 'images/empty_drawer.png');

        var popUp = document.getElementById("table_lock")
        popUp.setAttribute('src', './images/dressing_paper.png')

        var popUp = document.getElementById("dressing_table");
        popUp.setAttribute('src', './images/dressing_unlock.png')


    }
    console.log('update state')
}

// update_state()

function start() {
    window.location.href = "./first_wall.html";
    SetCookie(0)
    check_ans, check_item = ReadCookie()
}

function nextwall(wall) {
    if (wall == 1) window.location.href = "./first_wall.html";
    if (wall == 2) window.location.href = "./second_wall.html";
    if (wall == 3) window.location.href = "./third_wall.html";
    if (wall == 4) window.location.href = "./forth_wall.html";
    check_ans, check_item = ReadCookie()
        // update_state()
}

function prewall(wall) {
    if (wall == 1) window.location.href = "./first_wall.html";
    if (wall == 2) window.location.href = "./second_wall.html";
    if (wall == 3) window.location.href = "./third_wall.html";
    if (wall == 4) window.location.href = "./forth_wall.html";
    check_ans, check_item = ReadCookie()
        // update_state()
}

function details(string) {
    check_ans,
    check_item = ReadCookie()
    console.log(string)
    if (string == 'vase') {
        var popUp = document.getElementById("vase_key");
        popUp.style.visibility = "visible";
        if (check_item[0]) {
            var popUp = document.getElementById('box_key');
            popUp.setAttribute('src', 'images/empty_vase.png');
        }
    } else if (string == 'bed') {
        var popUp = document.getElementById("bed_paper");
        popUp.style.visibility = "visible";
    } else if (string == 'bed_paper') {
        var popUp = document.getElementById("clock_paper");
        popUp.setAttribute('src', './images/clock_paper.png')
    } else if (string == 'clock') {
        var popUp = document.getElementById("clock");
        var now_src = popUp.getAttribute('src')
        var curr_num = Number(now_src.split('_')[1].split('.png')[0])
        if (curr_num + 1 > 4) {
            var new_src = now_src.replace(String(curr_num), "1")
        } else {
            var new_src = now_src.replace(String(curr_num), String(curr_num + 1))
        }
        console.log(new_src)
        popUp.setAttribute('src', new_src);

    } else if (string == 'drawer1') {
        var popUp = document.getElementById("drawer1");
        popUp.style.visibility = "visible";
    } else if (string == 'drawer2') {
        var popUp = document.getElementById("drawer2");
        popUp.style.visibility = "visible";
        if (check_item[1]) {
            var popUp = document.getElementById('diamond');
            popUp.setAttribute('src', 'images/empty_drawer.png');
        }
    } else if (string == 'drawer3') {
        var popUp = document.getElementById("drawer3");
        popUp.style.visibility = "visible";
        if (check_ans[0] == true) {
            var num_lock = document.getElementById("num_lock")
            num_lock.style.visibility = "hidden";
        } else {
            var num_lock = document.getElementById("num_lock")
            num_lock.style.visibility = "visible";
        }
    } else if (string == 'drawer4') {
        var popUp = document.getElementById("drawer4");
        popUp.style.visibility = "visible";
        if (check_item[0] == true) {
            console.log('open!')
            var popUp = document.getElementById("box_gift");
            // popUp.style.visibility = "visible";
            popUp.setAttribute('src', 'images/security.png');
            popUp.setAttribute('onclick', 'details("security")');
            popUp.setAttribute('class', 'click');
        }

    } else if (string == 'security') {
        var popUp = document.getElementById("box_gift");
        popUp.setAttribute('src', 'images/security_lock.png');
        if (check_ans[2] == true) {
            var letter_lock = document.getElementById("letter_lock")
            letter_lock.style.visibility = "hidden";
            if (check_item[2] == true) {
                var popUp = document.getElementById("box_gift");
                popUp.setAttribute('src', 'images/security_empty.png');
            } else {
                var popUp = document.getElementById("box_gift");
                popUp.setAttribute('src', 'images/security_key.png');
            }


        } else {
            var letter_lock = document.getElementById("letter_lock")
            letter_lock.style.visibility = "visible";
        }

    } else if (string == 'wardrobe') {
        var popUp = document.getElementById("wardrobe");
        popUp.style.visibility = "visible";
        if (check_ans[1] == true) {
            var num_lock = document.getElementById("num_lock2")
            num_lock.style.visibility = "hidden";
        } else {
            var num_lock = document.getElementById("num_lock2")
            num_lock.style.visibility = "visible";
        }
    } else if (string == 'wardrobe_key') {
        var popUp = document.getElementById("open_wardrobe");
        popUp.style.visibility = "visible";
    } else if (string == 'dressing') {
        check_open('diamond')
        var popUp = document.getElementById("dressing_lock");
        popUp.style.visibility = "visible";
        // if (check_item[1] != true) {
        //     var popUp = document.getElementById("dressing_lock");
        //     popUp.style.visibility = "visible";
        // }
    } else if (string == 'outside') {

        if (check_item[2] == true && check_item[3] == true) {
            window.location.href = "./end_game.html";
        } else {
            var popUp = document.getElementById("outside");
            popUp.style.visibility = "visible";
        }
    }

    SetCookie(1)
}

function hidePopup() {
    var popUp = document.getElementsByClassName("popupcontent");
    // console.log(popUp)
    for (let i = 0; i < popUp.length; i++) {
        // console.log(popUp[i]);
        popUp[i].style.visibility = "hidden";
    }
    var popUp = document.getElementsByClassName("num_lock");
    for (let i = 0; i < popUp.length; i++) {
        // console.log(popUp[i]);
        popUp[i].style.visibility = "hidden";
    }

}

function takeout(string) {
    check_ans,
    check_item = ReadCookie()
    // console.log(check_ans, check_item)
    if (string == 'diamond') {
        var popUp = document.getElementById("diamond");
        popUp.setAttribute('src', 'images/empty_drawer.png');
        check_item[1] = true
    } else if (string == 'box_key') {
        var popUp = document.getElementById("box_key");
        popUp.setAttribute('src', 'images/empty_vase.png');
        check_item[0] = true
    } else if (string == 'book_paper') {
        var popUp = document.getElementById("book_paper");
        popUp.setAttribute('src', 'images/book_paper.png');
    } else if (string == 'wardrobe_key') {
        var popUp = document.getElementById("wardrobe_key");
        popUp.setAttribute('src', 'images/wardrobe_empty.png');
        check_item[3] = true
    } else if (string == 'security_key') {
        var popUp = document.getElementById("box_gift");
        popUp.setAttribute('src', 'images/security_empty.png');
        check_item[2] = true
    }

    SetCookie(1)
    console.log(check_item)
    console.log(document.cookie)
}

function nextnum(lock, column) {
    if (lock == 1) var col_id = "num" + String(column)
    else if (lock == 2) var col_id = "num2" + String(column)
    var col = document.getElementById(col_id);
    var now_src = col.getAttribute('src')
    var curr_num = Number(now_src.split('_')[1].split('.png')[0])
    if (curr_num + 1 > 9) {
        var new_src = now_src.replace(String(curr_num), "0")
    } else {
        var new_src = now_src.replace(String(curr_num), String(curr_num + 1))
    }
    col.setAttribute('src', new_src);
    if (lock == 1) check_open("num_lock")
    else if (lock == 2) check_open("num_lock2")
}

function prevnum(lock, column) {
    if (lock == 1) var col_id = "num" + String(column)
    else if (lock == 2) var col_id = "num2" + String(column)
    var col = document.getElementById(col_id);
    var now_src = col.getAttribute('src')
    var curr_num = Number(now_src.split('_')[1].split('.png')[0])
    if (curr_num - 1 <= 0) {
        var new_src = now_src.replace(String(curr_num), "9")
    } else {
        var new_src = now_src.replace(String(curr_num), String(curr_num - 1))
    }
    col.setAttribute('src', new_src);
    if (lock == 1) check_open("num_lock")
    else if (lock == 2) check_open("num_lock2")
}

function nextletter(column) {
    var col_id = "letter" + String(column)
    var col = document.getElementById(col_id);
    var now_src = col.getAttribute('src')
    var curr_num = Number(now_src.split('_')[1].split('.png')[0])
    if (curr_num + 1 > 6) {
        var new_src = now_src.replace(String(curr_num), "1")
    } else {
        var new_src = now_src.replace(String(curr_num), String(curr_num + 1))
    }
    col.setAttribute('src', new_src);
    check_open("letter_lock")
}

function prevletter(column) {
    var col_id = "letter" + String(column)
    var col = document.getElementById(col_id);
    var now_src = col.getAttribute('src')
    var curr_num = Number(now_src.split('_')[1].split('.png')[0])
    if (curr_num - 1 <= 0) {
        var new_src = now_src.replace(String(curr_num), "6")
    } else {
        var new_src = now_src.replace(String(curr_num), String(curr_num - 1))
    }
    col.setAttribute('src', new_src);
    check_open("letter_lock")
}

function check_open(string) {
    console.log('check open ' + string)
    if (string == "num_lock") {
        var ans_lock = ['./images/num_7.png', './images/num_1.png',
            './images/num_9.png', './images/num_6.png', './images/num_0.png'
        ]
        var locked = [false, false, false, false, false]
        for (var i = 0; i < ans_lock.length; i++) {
            var lock_id = 'num' + String(i + 1)
            var lock = document.getElementById(lock_id)
            var num_src = lock.getAttribute('src')

            if (num_src == ans_lock[i]) locked[i] = true
        }
        var check = false // check if ans coorect
        for (var i = 0; i < locked.length; i++) {
            if (locked[i] == false) {
                check = false;
                break;
            } else check = true
        }
        if (check) {
            check_ans[0] = check
            SetCookie(1)
            var num_lock = document.getElementById("num_lock")
            num_lock.style.visibility = "hidden";
            var popUp = document.getElementById("book_paper");
            popUp.setAttribute('src', 'images/book.png');
            popUp.setAttribute('class', 'click')
            popUp.setAttribute('onclick', "takeout('book_paper')")
                // popUp.style.visibility = "visible";

        }
    } else if (string == "num_lock2") {
        var ans_lock = ['./images/num_2.png',
            './images/num_8.png', './images/num_6.png', './images/num_4.png'
        ]
        var locked = [false, false, false, false]
        for (var i = 0; i < ans_lock.length; i++) {
            var lock_id = 'num2' + String(i + 1)
            var lock = document.getElementById(lock_id)
            var num_src = lock.getAttribute('src')

            if (num_src == ans_lock[i]) locked[i] = true
        }
        var check = false // check if ans coorect
        for (var i = 0; i < locked.length; i++) {
            if (locked[i] == false) {
                check = false;
                break;
            } else check = true
        }
        if (check) {
            check_ans[1] = check
            SetCookie(1)
            var num_lock = document.getElementById("num_lock2")
            num_lock.style.visibility = "hidden";
            hidePopup()
                // var popUp = document.getElementById("open_wardrobe");
                // popUp.style.visibility = "visible";
            var popUp = document.getElementById("close_wardrobe");
            popUp.setAttribute('src', './images/open_wardrobe.png')
            popUp.style.width = '40 vw'
            popUp.setAttribute('onclick', 'details("wardrobe_key")')

        }
    } else if (string == 'diamond') {
        // var read_ans, read_item
        // read_ans,
        // read_item = ReadCookie()
        // console.log('read diamond', read_item)
        // console.log(read_ans)
        if (check_item[1] == true) {
            var popUp = document.getElementById("table_lock")
            popUp.setAttribute('src', './images/dressing_paper.png')

            var popUp = document.getElementById("dressing_table");
            popUp.setAttribute('src', './images/dressing_unlock.png')
        }
    } else if (string == 'letter_lock') {
        var ans_lock = ['./images/letter_4.png',
            './images/letter_2.png', './images/letter_1.png', './images/letter_6.png'
        ]
        var locked = [false, false, false, false]
        for (var i = 0; i < ans_lock.length; i++) {
            var lock_id = 'letter' + String(i + 1)
            var lock = document.getElementById(lock_id)
            var num_src = lock.getAttribute('src')

            if (num_src == ans_lock[i]) locked[i] = true
        }
        var check = false // check if ans coorect
        for (var i = 0; i < locked.length; i++) {
            if (locked[i] == false) {
                check = false;
                break;
            } else check = true
        }
        if (check) {
            check_ans[2] = check
            SetCookie(1)
            var num_lock = document.getElementById("letter_lock")
            num_lock.style.visibility = "hidden";
            // hidePopup()
            // var popUp = document.getElementById("open_wardrobe");
            // popUp.style.visibility = "visible";
            var popUp = document.getElementById("box_gift");
            popUp.setAttribute('src', './images/security_key.png')
                // popUp.style.width = '40 vw'
            popUp.setAttribute('onclick', 'takeout("security_key")')

        }
    }
}

// save progress to cookie
function SetCookie(flag) {
    if (flag === 0) {
        var check_ans0 = [false, false, false] // locks (5-nums_lock, 4-nums_lock, 4-letters_lock)
        var check_item0 = [false, false, false, false]
        document.cookie = 'path=/'
        for (var i = 0; i < check_ans0.length; i++) {
            document.cookie = 'check_ans' + String(i + 1) + '=' + encodeURIComponent(check_ans0[i].toString())
        }
        for (var i = 0; i < check_item0.length; i++) {
            document.cookie = 'check_item' + String(i + 1) + '=' + encodeURIComponent(check_item0[i].toString())
        }
    } else {
        // check_ans,
        // check_item = ReadCookie()
        document.cookie = 'path=/'
        for (var i = 0; i < check_ans.length; i++) {
            document.cookie = 'check_ans' + String(i + 1) + '=' + encodeURIComponent(check_ans[i].toString())
        }
        for (var i = 0; i < check_item.length; i++) {
            document.cookie = 'check_item' + String(i + 1) + '=' + encodeURIComponent(check_item[i].toString())
        }
    }

    console.log(check_ans)
    console.log(check_item)
}
// parse cookie data
function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;

    for (var i = 0, l = cookieAry.length; i < l; ++i) {
        // cookie = jQuery.trim(cookieAry[i]);
        cookie = cookieAry[i].split('=');
        // console.log(cookie[0], cookie[1])
        cookieObj[cookie[0].trim()] = decodeURIComponent(cookie[1]).trim();
    }
    return cookieObj;
}
// get cookie by name
function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }
    // console.log(parseCookie())
    return value;
}

// read progress from cookie
function ReadCookie() {
    var read_ans = [false, false, false] // locks (5-nums_lock, 4-nums_lock, 4-letters_lock)
    var read_item = [false, false, false, false]
    var cookieObj = parseCookie()
    console.log(cookieObj)
    try {
        for (var i = 0; i < read_ans.length; i++) {
            var ans = cookieObj['check_ans' + String(i + 1)]
            if (ans === 'true') read_ans[i] = true
            else if (ans === 'false') read_ans[i] = false
        }
        for (var i = 0; i < read_item.length; i++) {
            var item = cookieObj['check_item' + String(i + 1)]
            if (item === 'true') read_item[i] = true
            else if (item === 'false') read_item[i] = false

        }

    } catch {
        console.log('no content')
    }
    return read_ans, read_item
}