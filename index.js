let countEl= document.getElementById("count-el")
let count = 0
function increment() {
   count += 1
   countEl.textContent = count
   }
function save(){

   
let saveEl= document.getElementById("save-el")
let countStr= count + " - "
saveEl.textContent += countStr
countEl.textContent= 0
console.log(count)
}