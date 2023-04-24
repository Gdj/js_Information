{

  const obj1 = {ke:'key1'}
  const obj2 = {ke:'key2'}
  const obj3 = {ke:'key4'}
  
  const arr1 = ['key1', 'key12']
  const arr2 = ['key2', 'key13']
  const arr3 = ['key4', 'key14']
  

  const objCopy = {...obj1, ...obj2, ...obj3}
  const arrayCopy = [...arr1, ...arr2, ...arr3]
  console.log( ">>>" , arrayCopy);
}