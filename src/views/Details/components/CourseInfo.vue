<template>
    <div class="detailbottom-box">
        <div class="info-box">
            <el-tabs v-model="activeName" @tab-click="handleClick" style="padding: 0px 10px; margin: 0px;"
                     class="ant-tabs-nav-container">
                <el-tab-pane label="课程描述" name="first">
                    <div v-html="text" class="description"></div>
                </el-tab-pane>
                <el-tab-pane label="目录" name="second">

                    <ul class="directoryList">
                        <li v-for="(item,index) in list" :key="index">
                            <div class="bigTitle">{{index+1+'.'+item.sectionName}}
                                <div class="bigTitle-ico"><i class="el-icon-download">下载</i></div>
                            </div>
                            <p class="smallTitle" v-for="(item,index) in item.subSections" :key="index">{{index+1+'-'+1+
                                item.sectionName}}</p>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="评价" name="third">
                    <div class="evaluate">
                        <div class="evaluate-box1">
                            <p style="margin-bottom: 10px">评价</p>
                            <p class="evaluate-box-text" style="margin-bottom: 10px">
                                <i class="el-icon-star-on"></i><i
                                    class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i
                                    class="el-icon-star-on"></i><i
                                    class="el-icon-star-on"></i>
                                <span>非常好</span>
                            </p>
                        </div>
                        <div class="evaluate-box2">
                            <textarea placeholder="请发表您对课程的评价"></textarea>
                            <button>发表评论</button>
                        </div>
                        <ul>
                            <li v-for="(item ,index) in commentList" :key="index" class="comment">
                                <hr>
                                <p class="comment-title"><i class="el-icon-s-custom"></i>{{item.user.nickname}}</p>
                                <p class="comment-text">{{item.commentContent}}</p>
                                <p class="comment-time">{{item.updatedTime}}回复</p>
                            </li>
                        </ul>

                    </div>
                </el-tab-pane>

            </el-tabs>

        </div>

    </div>
</template>

<script>
    import {getComment, getDetail} from "../../../api/tl-course-api";

    export default {
        name: "CourseInfo",
        data() {
            return {
                list: [],
                text: "",
                activeName: 'first',
                commentList: []
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },

        created() {
            // console.log(this.$route.params.courseId)
            getDetail(this.$route.params.courseId).then(res => {
                this.list = res.data.data.sections
                console.log(res.data.data)
                this.text = res.data.data.courseDetail
            })
            getComment(this.$route.params.courseId).then(res => {
                this.commentList = res.data.rows
                console.log(res.data.rows)
                // this.text=res.data.data.courseDetail
            })

        }
    }
</script>

<style scoped lang="less">
    .detailbottom-box {
        width: 1200px;
        min-width: 1200px;
        padding: 0 10px;
        margin: 20px auto;
        background-color: #ffffff;
        /*overflow: hidden;*/
        box-sizing: border-box;

        .info-box {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            color: rgba(0, 0, 0, .65);
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5;
            list-style: none;
            -webkit-font-feature-settings: "tnum";
            font-feature-settings: "tnum";
            position: relative;
            overflow: hidden;
            zoom: 1;

            .ant-tabs-nav-container {
                position: relative;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                margin-bottom: -1px;
                overflow: hidden;
                font-size: 14px;
                line-height: 1.5;
                white-space: nowrap;
                zoom: 1;
            }
        }
    }

    .description {
        padding: 30px;
    }

    .directoryList {
        margin-left: 20px;
        list-style: none;

        .smallTitle {
            width: 100%;
            /*height: 50px;*/
            /*line-height: 50px;*/
            padding: 15px 20px;
            background: #f2f2f2;
            margin: 10px 0;
            color: rgba(0, 0, 0, .65);
            /*font-size: 12px;*/
        }

        .smallTitle:hover {
            color: #00cf8c;
        }

        .smallTitle:hover .hide {
            display: block;
        }

        .smallTitle:hover .show {
            display: none;
        }


    }

    .bigTitle {
        font-size: 22px;
        padding: 5px 0 5px 10px;
        display: flex;
        justify-content: space-between;
    }

    .bigTitle-ico {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        background-color: #24a5fe;
        /*position: absolute;*/
        /*top: 9px;*/
        /*right: 20px;*/
        width: 80px;
        height: 30px;
        /*background-color: rgb(45, 183, 245);*/
        color: #ffffff;
        /*font-size: 12px;*/
        line-height: 30px;
        text-align: center;
    }

    /*详情*/

    .evaluate {

        width: 1200px;
        min-width: 1200px;
        margin: auto;
        /*height: 700px;*/
        padding: 10px 20px;
        background-color: white;


    }

    .evaluate-box1 {
        /*width: 1200px;*/
        margin: auto;
        /*border: 1px solid orangered;*/

        color: rgba(0, 0, 0, .65);
        font-size: 14px;
        /*border: 1px solid red;*/
    }

    .evaluate-box-text > i {
        color: #fadb14;
        font-size: 16px;
    }

    .evaluate-box2 {
        width: 100%;
        margin: auto;
        /*margin-top: 10px;*/
        color: rgba(0, 0, 0, 0.65);
        font-size: 16px;
        /*margin-bottom: 50px;*/
        position: relative;
        overflow: hidden;

        textarea {
            width: 1120px;
            height: 138px;
            min-height: 136px;
            max-height: 136px;
            overflow-y: hidden;
            margin-top: 0px;
            margin-bottom: 0px;
            /* resize: none; */
            font-size: 14px;
            padding: 10px;

            textarea:hover {
                border-color: #00cf8c;
            }
        }

        button {
            float: right;
            /*position: absolute;*/
            /*bottom: 20px;*/
            /*right: 10px;*/
            margin-top: 10px;
            margin-right: 50px;
            color: white;
            background-color: #00cf8c;
            width: 88px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            outline: none;
            border: none;
            border-color: transparent;
        }

    }

    ul {
        list-style: none;
    }

    .comment {
        width: 999px;
        min-width: 999px;
        margin: auto;

        hr {
            margin: 20px 0px;
            height: 1px;
            border: 0px;
            background-color: rgb(232, 232, 232);
            color: rgb(232, 232, 232);
        }

        .comment-title {
            color: rgba(0, 0, 0, .65);
            font-size: 14px;
        }

        .comment-text {
            padding: 10px 0px 10px 40px;
            color: rgba(0, 0, 0, .65);
            font-size: 16px;
        }

        .comment-time {
            padding: 0 10px 0 0;
            color: #999;
            text-align: right;
        }
    }
</style>