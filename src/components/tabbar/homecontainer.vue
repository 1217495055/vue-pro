<template>
  <div>
		<!-- 轮播图区域 -->
		<mt-swipe :auto='4000'>
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img_url" alt="">
      </mt-swipe-item>
			<!-- <mt-swipe-item><img src="../../img/轮播图1.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
			<mt-swipe-item>4</mt-swipe-item> -->
		</mt-swipe>
		<h3>hfgalhgl</h3>
		<!-- 九宫格 ----》 六宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
				<img src="../../img/menu1.png" alt="">
				<div class="mui-media-body">新闻资讯</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../img/menu2.png" alt="">
				<div class="mui-media-body">图片分享</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../img/menu3.png" alt="">
				<div class="mui-media-body">商品购买</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../img/menu4.png" alt="">
				<div class="mui-media-body">留言反馈</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../img/menu5.png" alt="">
				<div class="mui-media-body">视频专区</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../img/menu6.png" alt="">
				<div class="mui-media-body">联系我们</div></a></li>
		</ul>
  </div>
</template>


<script>
export default {
    data(){
        return{
            lunbotuList:[]  //保存轮播图的数组
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            // 获取轮播图数据
            this.axios.get('http://127.0.0.1:3000/user/lunbotu').then(result=>{
                console.log(result.data.message[0].img_url)
                if(result.data.status==0){
                    this.lunbotuList = result.data.message;
                }else{
                    // 失败
                    this.$toast({message :'加载轮播图失败'});
                }
            })
        }
    }
}
</script>


<style scoped>
.mint-swipe{
    height:200px;
}
.mint-swipe-item img{
    width:100%;
    height:100%;
}
.mint-swipe-item:nth-child(1){
    background-color: red;
}
.mint-swipe-item:nth-child(2){
    background-color: blue;
}
.mint-swipe-item:nth-child(3){
    background-color: yellow;
}
.mint-swipe-item:nth-child(4){
    background-color: #0f0;
}
.mui-grid-view.mui-grid-9{
	background-color: #fff;
	border:none;
}
.mui-grid-view.mui-grid-9 img{
	width:60px;height:60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: 0;
}
.mui-media-body{
	font-size: 12px;
}
</style>

