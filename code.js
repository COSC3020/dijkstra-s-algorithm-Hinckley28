
function dijkstra(graph, sourceNode) {

  if (graph.length == 0) {
      return null;
  }
  let unvisited = [];
  let dist = {};
  for (const vertices in graph) {
      unvisited.push(vertices);
      //console.log(unvisited);
      dist[vertices] = Infinity;
  }
  dist[sourceNode] = 0;
      
  //console.log(dist);
  
  while (unvisited.length > 0) {
      //console.log(unvisited);
      let vertex = findMin(unvisited, dist);
    
      for (const nextVertex in graph[vertex]) {
          //console.log('next ' +nextVertex);
          //console.log('vertex ' +Object.keys(graph[vertex]));
          if (dist[nextVertex] > dist[vertex] + graph[vertex][nextVertex]) {
              dist[nextVertex] = dist[vertex] + graph[vertex][nextVertex];
          }
              //console.log(dist);
          }

      unvisited.shift(vertex);
  }

return dist;
}

function findMin(unvisited, dist) {
var vertex = unvisited[0];
for (let i = 0; i < unvisited.length; i++) {
  //console.log(dist[unvisited[i]]);
  //console.log(dist[vertex]);
  if (dist[vertex] > dist[unvisited[i]]) {
      vertex = unvisited[i];
  }
}
return vertex;
}