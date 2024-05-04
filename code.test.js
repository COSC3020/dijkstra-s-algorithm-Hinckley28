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
    'a' : {'b' : 1, 'c' : 1},
    'b' : {'d' : 4},
    'c' : {'d' : 2},
    'd' : {'e' : 6},
    'e' : {},
};


assert(JSON.stringify(dijkstra(A,'a')) == JSON.stringify({distance: 2, element: 'd'}));

assert(JSON.stringify(dijkstra(B,' ')) == JSON.stringify({distance: 0, element: ' '}));

assert(JSON.stringify(dijkstra(C, 'a')) == JSON.stringify({distance: 3, element: 'd'}));

assert(JSON.stringify(dijkstra(D, 'a')) == JSON.stringify({distance: 9, element: 'e'}));