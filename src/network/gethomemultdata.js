import {require} from '../network/index.js'
export function gethomemultdata(){
  return require({
    url:'/home/multidata'
  })
}
export function gethuble(){
  return require({
    url:'/home/data'
  })
}