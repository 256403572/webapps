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
export function category(){
  return require({
    url:"/category"
  })
}
export function mait(maitKey){
  return require({
    url:"/subcategory",
    params:{
      maitKey
    }
  })
}
export function subcategory(miniWallkey, type){
  return require({
    url:"/subcategory/detail",
    params:{
      miniWallkey,
      type
    }
  })
}