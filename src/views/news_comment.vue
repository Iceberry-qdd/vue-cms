<template>
    <div>
        <h4>发表评论</h4>
        <hr />
        <textarea placeholder="请输入评论，最多120字" maxlength="120" v-model="msg"></textarea>
        <van-button type="info" size="large" @click="postMsg()">发表评论</van-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, index) in cmtlist" :key="index">
                <div class="cmt-item-title">
                    第{{ index + 1 }}楼&nbsp;用户：{{ item.user_name }}&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-item-body">{{ item.content }}</div>
            </div>
        </div>
        <van-button plain type="danger" size="large" @click="loadMore()">加载更多</van-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                page: 1,
                cmtlist: [],
                msg: "",
            };
        },
        methods: {
            async getCommentByPage() {
                //console.log(this.newsid)
                const {data} = await this.$http.get(
                    "/api/getcomments/" + this.newsid + "?pageindex=" + this.page
                );
                //console.log(data)
                if (data.status === 0) {
                    if(data.message.length===0) return this.$toast("没有更多了")
                    return (this.cmtlist = this.cmtlist.concat(data.message));
                }
            },
            loadMore() {
                this.page++;
                this.getCommentByPage();
            },
            async postMsg() {
                if (this.msg.trim().length <= 0) {
                    return this.$toast("内容不能为空");
                }
                const {data} = await this.$http.post("/api/postComment/" + this.newsid, {content: this.msg.trim(),});
                if (data.status === 0) {
                    this.$toast(data.message)
                    // this.cmtlist = []
                    // this.getCommentByPage()
                    this.cmtlist.unshift({
                        user_name: "匿名用户",
                        add_time: new Date(),
                        content: this.msg.trim(),
                    });
                    this.msg=""
                }
            },
        },
        created() {
            this.getCommentByPage();
        },
        props: ["newsid"],
    };
</script>

<style scoped>
    .cmt-item {
        line-height: 30px;
    }

    .cmt-item-title {
        font-size: 13px;
        background-color: #ddd;
    }

    .cmt-item-body {
        font-size: 13px;
        text-indent: 2em;
    }

    textarea {
        font-size: 13px;
        width: -webkit-fill-available;
        padding: 4px;
    }

    .van-button--large {
        height: 40px;
        margin: 4px 0 4px 0;
    }

    .van-button__text {
        font-size: 14px;
    }
</style>