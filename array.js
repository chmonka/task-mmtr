group([
    { country: 'Belarus', city: 'Brest' },
    { country: 'Russia', city: 'Omsk' },
    { country: 'Russia', city: 'Samara' },
    { country: 'Belarus', city: 'Grodno' },
    { country: 'Belarus', city: 'Minsk' },
    { country: 'Poland', city: 'Lodz' }
   ],)

function group(array) {
  let map=new Map()
  array.forEach((item)=>{
      if(map.has(item.country)){
          map.get(item.country).push(item.city)
      }
      else{
          map.set(item.country, [item.city]) 
      }
  }) 
  return map
}