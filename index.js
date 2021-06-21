const chooseBestDistance = (t, k, ls) => {
    const combine = function(a, k) {
      const fn = function(n, src, got, all) {
          if (n === 0) {
              if (got.length > 0) {
                  all[all.length] = got;
              }
          }
          for (let j = 0; j < src.length; j++) {
              fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
          }
      }
      let all = [];
          fn(k, a, [], all);
      return all;
  }
    if(k===0 || k>ls.length){
      return null
    }
    const subLs = combine(ls, k)
    const sums = subLs.map(item => {
      let sum = 0
      for(let i=0; i<item.length; i++){
        sum+=item[i]
      }
      return sum
    }).filter(item => {
      return item <=t
    })
   const bestSum = Math.max(...sums)
    return(bestSum)
  }


  
  const  ls = [51, 56, 58, 59, 61]
  const k = 3
  console.log(chooseBestDistance(174, k, ls))
  console.log(chooseBestDistance(184, k, ls))
  console.log(chooseBestDistance(163, 3, [50]))