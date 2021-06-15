const m = [1, 7, 5, 13, 8]
let max;
let buuble = function(m) {
    for(let i =0;i<m.length;i++) {
        for (let j=0; j<m.length - 1;j++) {
            if (m[j] > m[j+1]) {
                max = m[j]
                m[j] = m[j+1]
                m[j+1] = max
            }
        }
    }
    return m
}
console.log(buuble(m))
