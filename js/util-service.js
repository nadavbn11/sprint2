var gIndex=0;

function makeId() {
   gIndex++;
   return gIndex;
}

function saveToStorage(name, password) {
   var strValue = JSON.stringify(password);
   localStorage.setItem(name, strValue);
}
function loadFromStorage(name) {
   return JSON.parse(localStorage.getItem(name))
}