export default{
  multions(state,pages){
    //检查购物车数据组是否有该商品
    let page=state.list.find(item=>item.iid===pages.iid);
    if (page) {
      page.count+=1;
    }
    else{
      pages.count=1
      state.list.push(pages);
    }
  }
}