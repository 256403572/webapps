import {require} from '../network/index.js'
export function gitttop(iid){
  return require({
    url:"/detail",
    params:{
      iid
    }
  })
}