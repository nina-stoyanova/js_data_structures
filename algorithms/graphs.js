var pesho = {
    name: "pesho",
    sister: null
}

var nina = {
    name: "nina",
    brother: null
}

pesho.sister = nina
nina.brother = pesho

var dora = {
    name: "dora"
}

pesho.mother = dora
nina.mother = dora

console.log(pesho.sister)
console.log(pesho.mother)

dora.son = pesho
dora.daughter = nina

delete pesho.sister

console.log(nina)
console.log(pesho.sister)