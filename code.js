function dijkstra(graph, sourceNode) {

  if (graph.length == 0) {
      return null;
  }
  unvisited = [];
  dist = [];
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
//console.log(dist);
const lastVertex = Object.keys(dist).pop();
return { distance: dist[lastVertex], element: lastVertex };
}
