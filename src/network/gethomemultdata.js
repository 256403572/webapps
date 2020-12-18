import {require} from '../network/index.js'
export function gethomemultdata(){
  return require({
    url:'/home/multidata'
  })
}
export function gethuble(type,page){
  return require({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
// export function gitttop(iid){
//   return require({
//     url:"/detail",
//     params:{
//       iid
//     }
//   })
// }
export function recommend(){
  return require({
    url:'recommend'
  })
}