// constant variable
var ur = ['a', 'b', 'c', 'd']
var ssr = ['e', 'f', 'g', 'h', 'i']
var sr = ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q']
var r = ['r', 's', 't', 'u', 'v', 'w']
var n = ['x', 'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae']
var card_pool = {
    'ur': ur,
    'ssr': ssr,
    'sr': sr,
    'r': r,
    'n': n
}
var card_level = [
    ['ur', 3],
    ['ssr', 10],
    ['sr', 25],
    ['r', 30],
    ['n', 32]
];

var card_pics = {
        'a': './picture/ur1.jfif',
        'b': './picture/ur2.jfif',
        'c': './picture/ur3.jfif',
        'd': './picture/ur4.jfif',
        'e': './picture/ssr1.jpg',
        'f': './picture/ssr2.jfif',
        'g': './picture/ssr3.png',
        'h': './picture/ssr4.jfif',
        'i': './picture/ssr5.jfif',
        'j': './picture/sr1.jfif',
        'k': './picture/sr2.jfif',
        'l': './picture/sr3.jfif',
        'm': './picture/sr4.png',
        'n': './picture/sr5.jfif',
        'o': './picture/sr6.jfif',
        'p': './picture/sr7.jfif',
        'q': './picture/sr8.jfif',
        'r': './picture/r1.jfif',
        's': './picture/r2.jfif',
        't': './picture/r3.png',
        'u': './picture/r4.jpg',
        'v': './picture/r5.jfif',
        'w': './picture/r6.jfif',
        'x': './picture/n1.jfif',
        'y': './picture/n2.jfif',
        'z': './picture/n3.jfif',
        'aa': './picture/n4.jpg',
        'ab': './picture/n5.jpg',
        'ac': './picture/n6.jfif',
        'ad': './picture/n7.png',
        'ae': './picture/n8.jfif',
    }
    // get chosen level
function choose_level(card_levels) {
    var probability = card_levels.map((v, i) => Array(v[1]).fill(i)).reduce((c, v) => c.concat(v), []);
    var rand = probability[Math.floor((Math.random() * probability.length))];
    var rValue = card_levels[rand][0];
    return rValue;
}

function choose_card(chosen_level) {
    chosen_cards = card_pool[chosen_level]
    var rand = Math.random() * chosen_cards.length | 0;
    var rValue = chosen_cards[rand];
    // console.log(chosen_level + ' ' + rand + ' ' + rValue)
    return rValue;
}

function draw_card(num) {
    var cards = []
    for (var i = 0; i < num; i++) {
        var card_description = choose_level(card_level)
        var card = choose_card(card_description)
        cards.push([card, card_description, card_pics[card]])
    }
    // console.log(cards)
    for (var i = 0; i < cards.length; i++) {
        document.getElementById("result").innerHTML += "<div class ='image'><h3 class='level'>" + cards[i][1] + "</h3><img src='" + cards[i][2] + "' height='200'></img></div>"
            // document.getElementById("result").innerHTML += cards[i][1] + "<img src='" + cards[i][2] + "' height='400'></img>"

    }
    // msg = cards.join(' ')
    // document.getElementById("result").innerHTML = msg;

}

function reset() {
    document.getElementById("result").innerHTML = ''
}