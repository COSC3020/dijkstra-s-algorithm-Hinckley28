function dijkstra(graph, sourceNode) {

  if (graph.length == 0) {
      return null;
  }
  unvisited = [];
  dist = {};
  for (const vertices in graph) {
      unvisited.push(vertices);
      //console.log(unvisited);
      dist[vertices] = Infinity;
  }
  dist[sourceNode] = 0;
  //console.log(dist);
  while (unvisited.length > 0) {
      //console.log(unvisited);
      //console.log(dist);
      const vertex = unvisited[0];
          for (const nextVertex in graph[vertex]) {
              if (dist[nextVertex] > dist[vertex] + graph[vertex][nextVertex]) {
                  dist[nextVertex] = dist[vertex] + graph[vertex][nextVertex];
              }
                  //console.log(dist);
          }
      
      unvisited.shift();
  }

return dist;
}

//const fs = require('fs');
const assert = require('assert');
//eval(fs.readFileSync('code.js')+'');

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


assert(JSON.stringify(dijkstra(A,'a')) === JSON.stringify({a: 0, b: 1, c: 4, d: 2}));

assert(JSON.stringify(dijkstra(B,' ')) == JSON.stringify({' ': 0}));

assert(JSON.stringify(dijkstra(C, 'a')) == JSON.stringify({a: 0, b: 1, c: 2, d: 3}));

assert(JSON.stringify(dijkstra(D, 'a')) == JSON.stringify({a: 0, b: 1, c: 1, d: 3, e: 9}));
