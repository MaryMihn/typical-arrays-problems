
exports.min = function min (array) {
  if(array===undefined){
    return 0
  }
  else if(array.length===0){
    return 0
  }
  else{
    let b = array.sort((a , b)=>{
      return(a-b)
    })
    return b[0];
  }
}

exports.max = function max (array) {
  if(array===undefined){
    return 0
  }
  else if(array.length===0){
    return 0
  }
  else{
    let b = array.sort((a , b)=>(a-b));
    return b[b.length-1];
  }
}

exports.avg = function avg (array) {
  if(array===undefined){
    return 0
  }
  else if(array.length===0){
    return 0
  }
  else{
    let b = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    let c = b/(array.length);
    c.toFixed(2)
    return c;
  }
}
