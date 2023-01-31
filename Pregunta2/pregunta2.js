function GetSum(numberToSplit){
    var total = 0;
    
    var minNumber = 0;
    if(numberToSplit <= minNumber) 
      return `El numero ${numberToSplit} no es positivo`
    
    var splitNumber = numberToSplit.toString().split('');
    splitNumber.forEach((number) => total += parseInt(number));
    return `La suma del numero ${numberToSplit} es ${total}` ;
  }
  
  var numberToSplit = 54;
  console.log(GetSum(numberToSplit));