<template>
    <div class="excellentCourses">
        <div class="phone-class-list">
            <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
                <header>
                    <span class="title-course">{{title}}</span>
                    <span class="more-course">
                            <a href="#">更多<i class="el-icon-d-arrow-right"></i></a>
                        </span>
                </header>
            </div>
            <!-- <h1>免费课程</h1> -->
        </div>
        <ul class="free-box">
            <li class="courseId" v-for="item in list" :key="item.courseId">
                <a href="#">
                    <div class="free-box-img"><img :src="item.bannerImgUrl"/></div>
                    <p class="free-box-p">{{item.title}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getHeadLine} from "../../../api/tl-course-api";

    export default {
        name: "HeaderLine",
        data() {
            return {
                list: []
            }
        },
        created() {
            getHeadLine(1, 5).then(res => {
                console.log(res);
                this.list = res.data.rows
            })
        },
        props: {
            title: String,
            pageNum: Number,
            pageSize: Number
        }
    }
</script>

<style scoped lang="less">
    .phone-class-list {
        padding: 0 10px;
        width: 1200px;
        margin: 0 auto;
    }

    /* .title-course {
        margin: 50px 0 30px 0;
        text-align: center;
        font-size: 24px;
        color: #333;
    }
     */
    .phone-class-list header {
        font-size: 24px;
        padding: 0 12px 10px 62px;
        border-bottom: 2px solid #e8e8e8;
        margin: 30px 0 0 0;
        text-align: center;
        color: #333;
    }

    .more-course {
        float: right;
        font-size: 16px;
        line-height: 34px;
    }

    .more-course a {
        color: #999;
    }

    .more-course a:hover {
        color: #999;
    }

    .free-box {
        width: 1200px;
        height: 200px;
        /* margin-top: 10px; */
        margin: 10px auto;
    }

    .free-box > li {
        width: 230px;
        height: 100%;
        /* background-color: yellow; */
        /* border: 1px solid brown; */
        float: left;
        margin-right: 10px;
        cursor: pointer;
    }

    .free a,
    .quality a {
        color: #999;
        text-decoration: none;
    }

    .free-box-img {
        width: 228px;
        height: 122px;
        overflow: hidden;
        cursor: pointer;
    }

    .free-box-img > img {
        width: 100%;
        height: 100%;
        /* transform: scale(1.5); */
        transition: transform 2s;
    }

    .free-box-img > img:hover {
        transform: scale(1.1);
    }

    .free-box-p {
        color: black;
        font-weight: 400px;
        cursor: pointer;
        margin: 3px 0px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .free-box-p:hover {
        color: #1da57a !important;
        cursor: pointer;
    }

    .free {
        color: #00cf8c;
        font-size: 16px;
        margin-top: -5px;
    }

    .quality {
        width: 1200px;
        margin: auto;
        height: 300px;
    }

    .ant-tag-orange {
        float: right !important;
        height: 22px;
        width: 70px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        background: #fff7e6;
        border-color: #ffd591;
        text-align: center;
        margin-right: 20px;
        color: #fa8c16;
    }

    .ant-tag-orange > a {
        color: #fa8c16;
        text-decoration: none;
    }

    .free-box-p1 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>