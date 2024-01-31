/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setToZeros = function (row, col, matrix){

    for(let i=0; i<matrix.length; i++){
        matrix[i][col]=0
    }

    for(let i=0; i<matrix[0].length; i++){
        matrix[row][i]=0
    }
}

var setZeroes = function(matrix) {
    let zeros=[];

    for(let r=0; r<matrix.length; r++){
        for(let c=0; c<matrix[0].length; c++){
            if(matrix[r][c]=== 0){
                zeros.push([r,c])
            }
        }
    }

    for(let zero of zeros ){
        let row = zero[0];
        let col = zero[1];

        setToZeros(row, col, matrix)
    }

};