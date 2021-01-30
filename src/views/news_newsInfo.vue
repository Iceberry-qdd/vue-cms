<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="info">
            <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
            <span>浏览：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <comment :newsid="id"></comment>
    </div>
</template>

<script>
    import comment from '../views/news_comment'

    export default {
        data(){
            return {
                newsinfo:{}
            }
        },
        methods:{
            async getNewsInfo(){
                const {data}=await this.$http.get('/api/getnew/'+this.id)
                if(data.status===0){
                    return (this.newsinfo=data.message[0])
                }
            }
        },
        created(){
            this.getNewsInfo()
        },
        props:["id"],
        components:{
            //创建子组件
            comment
        }
    }
</script>

<style scoped>
.newsinfo-container{
    padding: 10px;
}

.title{
    font-size: 15px;
    color: red;
    text-align: center;
    margin: 15px 0;
}

.info{
    font-size: 10px;
    color: #1989fa;
    display: flex;
    justify-content: space-between;
}
</style>