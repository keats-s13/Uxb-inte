function GetIndex(arr, numberToSearch){
  var index = arr.indexOf(numberToSearch);
  if(index < 0) 
    return `No se encontro el numero solicitado ${numberToSearch}`
  return `El numero ${numberToSearch} se encuentra en la posicion ${index}` ;
}

var arr = [1, 4, 8, 19, 2, 7, 10, 21, 32];
var numberToSearch = 21;
console.log(GetIndex(arr, numberToSearch));