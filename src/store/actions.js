export default{
  multion(context,pages){
    return new Promise((resolve,reject)=>{
    //检查购物车数据组是否有该商品
    let page=context.state.list.find(item=>item.iid===pages.iid);
    if (page) {
      page.count+=1;
      resolve('新加商品+1');
    }
    else{
      pages.count=1
      context.state.list.push(pages);
      resolve('新加商品');
    }
  })
  }
}