<template>
    <div>
        <van-cell-group>
            <van-cell :title="item.title" v-for="item in newslist" :key="item.id">
                <template #icon>
                    <van-image width="45" height="45" fit="cover" :src="item.image_url"/>
                </template>
                <template #label>
                    <span>发表时间：{{item.add_time | dataFormat('YYYY-MM-DD HH:mm:ss')}}</span>
                    <span>浏览：{{item.click}}次</span>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newslist:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        async getNewsList(){
            const {data}=await this.$http.get("/api/getnewslist")
            if(data.status===0){
                this.newslist=data.message
            }
        }
    }
}
</script>

<style scoped>
.van-cell__title{
    margin-left: 10px;
    margin-right: -5px;
    /* font-weight: bolder; */
}
.van-cell__label{
    color: #1989fa;
    display: flex;
    justify-content: space-between;
    /* align-items: ; */
}
</style>