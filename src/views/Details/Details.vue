<template>
    <div class="details-container">
        <div class="box">
            <div class="text">
                <router-link :to="'/index'"><i class="el-icon-s-home"></i>首页</router-link>
                <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                <router-link :to="''">视频详情</router-link>
            </div>
<!--            <CourseIntroduce></CourseIntroduce>-->
<router-view></router-view>
            <CourseInfo></CourseInfo>
        </div>

    </div>
</template>

<script>
    // import CourseIntroduce from "./components/CourseIntroduce";
    import CourseInfo from "./components/CourseInfo";
    export default {
        name: "Details",
        components: {
            // CourseIntroduce,
            CourseInfo

        }
    }
</script>

<style scoped lang="less">
    .details-container {
        background-color: #F4F4F4;

        .box {
            width: 1200px;
            margin: auto;

            .text {
                font-size: 16px;
                padding: 10px 0 15px;
                padding-left: 5px;
                color: rgba(0, 0, 0, .45);
                font-size: 14px;

                a {
                    color: rgba(0, 0, 0, .45);
                    font-size: 14px;
                }

                a:hover {
                    color: #00cf8c;
                }

            }
        }
    }
</style>