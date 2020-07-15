<template>
    <div class="course-introduce-container">
        <div class="left"><img :src="detail.coverFileUrl"></div>
        <div class="right">
            <div class="right-text">{{detail.courseTitle}}
                <div class="collect" @click="collect">
                    <span v-if="isCollect">
                        <i class="el-icon-cloudy"></i>收藏
                    </span>
                    <span style="color:#FFB200;" v-else>
                        <i class="el-icon-magic-stick"></i>已收藏
                    </span>
                </div>
            </div>
            <p class="study"><span style="font-size: 12px;margin-right: 10px">累计{{detail.participationsCount}}人学习</span><i
                    class="el-icon-star-on"></i><i
                    class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i
                    class="el-icon-star-on"></i></p>
            <div v-if="detail.isFree == 1" class="text3">免费<br>
                <router-link :to="'/study/course/'+detail.courseId">
                    <button style="color: #fff; background-color: #00cf8c; border-color: #00cf8c; margin-top: 20px"
                            @click="toClick">
                        立即观看
                    </button>
                </router-link>

            </div>
            <div v-if="detail.isFree == 0" style="margin-top: 10px">
                <span class="money">￥{{ detail.discountPrice }}</span>
                <span class="text2">￥{{ detail.coursePrice }}</span>
                <div class="nofress">{{ detail.discountDesc }}</div>
                <button style="background: rgb(255, 128, 0); border: rgb(255, 128, 0); margin-right: 30px">立即购买</button>
                <button style="color: #fff; background-color: #00cf8c; border-color: #00cf8c;"
                        @click="addShop">加入购物车
                </button>
            </div>
        </div>

    </div>
</template>

<script>
    import {getDetail, increaseGoods} from "../../../api/tl-course-api";
    import loginMixin from "../../../mixin/loginMixin";

    export default {
        name: "CourseIntroduce",
        data() {
            return {
                detail: {},
                isCollect: false
            }
        },
        mixins: [loginMixin],

        created() {
            // console.log(this.$route.params.courseId)
            getDetail(this.$route.params.courseId).then(res => {
                this.detail = res.data.data
                console.log(res.data.data)
            })

        },
        methods: {
            collect() {
                if (this.loginClick()) {
                    if (this.isCollect) {
                        this.isCollect = false;
                        this.$message({
                            message: '加入收藏成功...',
                            type: 'success'
                        });
                    } else {
                        this.isCollect = true;
                        this.$message({
                            message: '取消收藏...',
                            type: 'warning'
                        });

                    }
                    console.log("可以收藏");
                }
            },
            addShop() {
                increaseGoods(this.detail.courseId).then(res => {
                    this.$store.dispatch("checkShopCar");
                    console.log(res);
                    this.$message({
                        message: '加入购物车成功...',
                        type: 'success'
                    });
                })
            },
            toClick() {
                if (this.loginClick()) {
                    console.log("可以进入视频")
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .course-introduce-container {
        width: 100%;
        position: relative;
        background: #fff;
        border-radius: 4px;
        border-radius: 4px;
        padding: 20px;
        overflow: hidden;

        .left {
            display: block;
            /*-webkit-box-sizing: border-box;*/
            box-sizing: border-box;
            width: 33.33333333%;
            float: left;

            img {
                width: 330px;
                height: 220px;
            }
        }

        .right {
            display: block;
            /*-webkit-box-sizing: border-box;*/
            box-sizing: border-box;
            width: 58.33333333%;
            float: left;

            .right-text {
                font-size: 24px;
            }
        }

        .collect {
            cursor: pointer;
            display: inline-block;
            text-align: center;
            width: 110px;
            height: 30px;
            font-size: 16px;
            line-height: 26px;
            border: 1px solid #999;
            float: right;
            color: #999;
            position: absolute;
            right: 30px;
            top: 30px;
        }
    }


    .study {
        font-size: 16px;
        color: #666666;
        margin-top: 10px;

        i {
            color: #fadb14;
            font-size: 20px;
        }
    }

    .text2 {
        text-decoration: line-through;


        color: rgb(255, 79, 35);
        font-size: 14px;
        margin: 0px 10px;
    }

    .text3 {
        font-size: 24px;
        color: #00cf8c;
    }

    .nofress {
        color: #fa8c16;
        background: #fff7e6;
        font-size: 12px;
        margin-top: 30px;
        /*margin-left: 20px;*/
        height: 22px;
        width: 70px;
        border: 1px solid #ffd591;
        border-radius: 2px;
        text-align: center;
        margin-right: 20px;
    }

    button {
        width: 160px;
        height: 45px;
        font-size: 18px;
        /*margin-left: 10px;*/
        margin-top: 20px;
        outline: none;
        border: none;
        color: #ffffff;
    }

    .money {
        /*color: black;*/
        font-size: 22px;
    }

</style>