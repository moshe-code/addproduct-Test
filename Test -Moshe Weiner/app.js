


addItem = (() => {
    let ul = document.getElementById("dynamic-list")
    let candidate = document.getElementById("candidate")
    let li = document.createElement("li")
    li.setAttribute('id', candidate.value)
    li.appendChild(document.createTextNode(candidate.value))
    ul.appendChild(li)
    // document.getElementById().value = ''


})

addPrice = (() => {
    let ul = document.getElementById("price-list")
    let price = document.getElementById("price")
    let li = document.createElement("li")
    li.setAttribute('id', price.value)
    li.appendChild(document.createTextNode(price.value))
    ul.appendChild(ul)


})


removeItem = (() => {
    let ul = document.getElementById("dynamic-list")
    let candidate = document.getElementById("candidate")
    let item = document.getElementById(candidate.value)
    ul.removeChild(item)

})