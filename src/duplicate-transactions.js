function findDuplicatenewtransaction(transactions) {


  const newTransaction = transactions.map(value => value).sort((a, b) => new Date(a.time) - new Date(b.time));

  var group = []
  var index_arr = []
  var first,
      second;

  while(newTransaction.length > 1){
    first = 0
    second = 1
    index_arr = [first]
    while ((new Date(newTransaction[second].time) - new Date(newTransaction[first].time)) <= 60000 && first < newTransaction.length -1){
      if(sameOccurance(newTransaction[first], newTransaction[second])){
        index_arr.push(second)
        first = second
      }
      second += 1
      if (second === newTransaction.length){
        break
      }
    }


    if (index_arr.length > 1){
      var temp = []
      while(index_arr.length){
        var item = newTransaction.splice(index_arr.pop(), 1)
        temp.unshift(item[0])
      }
      group.push(temp)
      index_arr = []
    } else{
      newTransaction.shift()
    }

    if (newTransaction.length == 1){
      break;
    }

  }
  return group
}


function sameOccurance(t1,t2){
  if (t1.sourceAccount === t2.sourceAccount && t1.targetAccount === t2.targetAccount && t1.amount === t2.amount && t1.category === t2.category){
    return true;
  }else{
    return false;
  }


}

export default findDuplicatenewtransaction;






const arr = [1,2,3,4,5]
console.log(arr).length

