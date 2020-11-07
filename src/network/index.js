import axios from 'axios'
export function require(config){
  const routers=axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6'
  })
  return routers(config)
}