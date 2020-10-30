

function nearestValue(values: number[], search: number) {
  let resposta = 0
  values.forEach(item => {
    let responseIndex = 0
    let distancia = Math.abs(search - item)
    let indice = values.indexOf(item) + 1
    let item2 = values[indice]
    let distancia2 = Math.abs(search - item2)
    
    if (distancia == 0) {
      console.log('é esse aqui:', item)
    }
    if (distancia > distancia2) {
      responseIndex = indice
      resposta = values[responseIndex]
    }
    
  })
  
    return resposta;
}




console.log(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
console.log(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
console.log(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
console.log(nearestValue([-1, 2, 3], 0), -1);
