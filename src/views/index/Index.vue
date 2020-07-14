<template>
    <div>
        <Swiper/>
        <LiveList/>
        <CourseList :title="'免费课程'" :type="'free'" :pageNum="1" :pageSize="10"/>
        <CourseList :title="'精品课程'" :type="'boutique'" :pageNum="1" :pageSize="5"/>
        <CourseList :title="'限时折扣'" :type="'discount'" :pageNum="1" :pageSize="5"/>
        <HeaderLine :title="'头条精选'" :pageNum="1" :pageSize="5"/>
    </div>
</template>

<script>
    import Swiper from "./components/Swiper";
    import LiveList from "./components/LiveList";
    import CourseList from "./components/CourseList";
    import HeaderLine from "./components/HeaderLine";

    export default {
        name: "Index",
        components: {
            HeaderLine,
            CourseList,
            Swiper,
            LiveList
        }
    }
</script>

<style scoped>

</style>