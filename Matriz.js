function sumarMatrices (Matriz1, Matriz2){
    let n = Matriz1.lenght
    let resultado = {}
    
    for (let i = 0; i < n; i++) {
        resultado[i]=[]

        for (let j = 0; j < n; j++) {
           resultado[i][j]= matriz1[i][j] + Matriz2[i][j]
        }
        
    }
    return resultado
}
    const matriz1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    const matriz2 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
  
    const matrizResultado = sumarMatrices(matriz1, matriz2);
    console.log(matrizResultado);