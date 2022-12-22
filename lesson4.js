const obj = {
    name:'Mike',
    id: 1

}
console.log(obj)
const data = JSON.stringify(obj)
console.log(data)
console.log(JSON.parse(data))

const arr = [1,2,3,4]
console.log(JSON.stringify(arr))

const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    const request = new XMLHttpRequest() //создание запроса
    request.open("GET", "data.json") //Обявление метода
    request.setRequestHeader("content-type","application/json")
    request.send()
    request.addEventListener("Load",()=> {
        // console.log(request.response)
        const data = JSON.parse(request.response)
        console.log(data)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
    })
})