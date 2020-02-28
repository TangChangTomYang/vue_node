

const app = new  Vue({
  el:'#app',
  data:{
    items:[
      {
        name:'算法导论1',
        pubdate:'2016-9',
        price:100,
        saleCount:0
      },
      {
        name:'算法导论2',
        pubdate:'2016-9',
        price:100,
        saleCount:0
      },
      {
        name:'算法导论3',
        pubdate:'2016-9',
        price:100,
        saleCount:0
      },
      {
        name:'算法导论4',
        pubdate:'2016-9',
        price:100,
        saleCount:0
      }
    ]
  },
  methods:{
    getFormatPrice(price){
      // toFixed(2) 是保留2位小数的意思
      return '$' + price.toFixed(2);
    },
    saleCountMinus(item){
      if(item.saleCount > 0){
        item.saleCount--;
      }
    },
    saleCountPlus(item){
      item.saleCount++;
    },
    deleteClick(item){
      let index = this.items.indexOf(item)
      console.log(index);
      this.items.splice(index, 1)
    }

  },
  filters:{  // vue中的过滤器, 也是方法的一种
    formatPrice(price){
      // toFixed(2) 是保留2位小数的意思
      return '$' + price.toFixed(2);

    }

  }
})