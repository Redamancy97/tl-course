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
            <router-link class="courseId" v-for="item in list" :key="item.courseId" :to="'/other/detail/'+item.courseId"
                         tag="li">
                <a href="#">
                    <div class="free-box-img"><img :src="item.bannerFileUrl"/></div>
                    <p class="free-box-p">{{item.courseTitle}}</p>
                    <p style="color: #888; cursor: pointer; font-size: 14px;">
                        共{{item.subSectionNum}}节课 | {{item.learningNum}}人报名
                    </p>
                    <div style=" width: 100%; float: left;" v-if="item.isFree==1">
                        <span style="font-size: 16px;color: #00cf8c">免费</span>
                    </div>
                    <div style=" width: 100%; float: left;" v-if="item.isFree==0">
                        <span style="color: #ff4500;">{{item.discountPrice}}</span>
                        <span style="color: #999;text-decoration: line-through;font-size: 12px;">{{item.coursePrice}}</span>
                        <span class="ant-tag-orange">{{item.discountDesc}}</span>
                    </div>
                </a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import {getCourseList} from "../../../api/tl-course-api";

    export default {
        name: "CourseList",
        data() {
            return {
                list: []
            }
        },
        created() {
            getCourseList(this.type, this.pageNum, this.pageSize).then(res => {
                console.log(res.data.rows);
                this.list = res.data.rows
            })
        },
        props: {
            title: String,
            type: String,
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