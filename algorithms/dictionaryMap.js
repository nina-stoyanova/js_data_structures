//using simplest map- object
const fakeMap = {
    "Afganistan": 30,
    "Algire": 45,
    "Bulgaria": {}
}

fakeMap["France"] = 60 //fakeMap.france = 60

const res = fakeMap["Algire"]

console.log(res)

//using full blown Map
let map = new Map()

map.set("Afganistan", 30)
map.set("Algire", 45)
map.set("Bulgaria", {})
map.set("France", 60)

//map.clear()

const res2 = map.get("Algire")

console.log(res2)

//iterate = have a look at each element on at a time - Обхождане на колекция

for (let element of map) {
    //console.log(element)
    console.log(element[0])
    console.log(element[1])
}