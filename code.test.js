const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

A = {
    'a' : {'b' : 1, 'c' : 4},
    'b' : {'d' : 1},
    'c' : {'d' : 5},
    'd' : {},
};

B = {
    
};

C = {
    'a' : {'b' : 1, 'c' : 4},
    'b' : {'d' : 3, 'c' : 1},
    'c' : {'d' : 1},
    'd' : {},
};

D = {
    'a' : {'b' : 3, 'c' : 2},
    'b' : {'d' : 4},
    'c' : {'d' : 2},
    'd' : {'e' : 6},
    'e' : {},
};


assert(JSON.stringify(dijkstra(A,'a')) === JSON.stringify({a: 0, b: 1, c: 4, d: 2}));

assert(JSON.stringify(dijkstra(B,' ')) == JSON.stringify({' ': 0}));

assert(JSON.stringify(dijkstra(C, 'a')) == JSON.stringify({a: 0, b: 1, c: 2, d: 3}));

assert(JSON.stringify(dijkstra(D, 'a')) == JSON.stringify({a: 0, b: 3, c: 2, d: 4, e: 10}));