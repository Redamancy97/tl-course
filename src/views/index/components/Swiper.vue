<template>
    <div class="block">
        <el-carousel height="400px">
            <el-carousel-item v-for="item in list" :key="item.id" :style='{"background-image":"url("+item.imgUrlPc+")"}'
                              class="bgi-style">
                <!--                <div></div>-->
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import {getSwiper} from "../../../api/tl-course-api";

    export default {
        name: "Swiper",
        data() {
            return {
                list: []
            }
        },
        created() {
            getSwiper().then(res => {
                console.log(res.data.data);
                this.list = res.data.data;
            })
        }

    }
</script>

<style scoped lang="less">
    .bgi-style {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center !important;
        background-repeat: no-repeat;
    }
</style>