<template>
    <div>
        <div class="video-details-container">
            <div class="play-view clearfix">
                <div class="view-play">
                    <video :src="file.fileUrl" controls></video>
                </div>
                <div class="view-directory">
                    <div class="section-detail-directory" v-for="(item,i) in sections" :key="item.sectionId">
                        <h3>{{item.sectionName}}</h3>
                        <dt>
                            <dl class="directory" v-for="(item,index) in item.subSections" :key="index">
                                <div class="pull-left directoryDetails">
                                    <div class="recorded clearfix">录播</div>
                                    <div class="pageword" @click="playView(item.sectionId)">{{i+1}}-{{index+1}}
                                        {{item.sectionName}}
                                    </div>
                                </div>
                            </dl>
                        </dt>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {getDetail, switchChapters} from "../../../api/tl-course-api";


    export default {
        name: "VideoDetails",
        data() {
            return {
                obj: {},
                sections: [],
                file: {},
            }
        },
        methods: {
            playView(sectionId) {
                console.log(sectionId);
                switchChapters(sectionId).then(res => {
                    console.log(res);
                    this.file = res.data.section.file
                })
            }
        },
        created() {
            //缓冲页目录
            getDetail(this.$route.params.courseId).then(res => {
                console.log(res)
                this.obj = res.data.data
                this.sections = res.data.data.sections
            })
        }
    }
</script>

<style scoped lang="less">
    /*.clearfix:after {*/
    /*    Content: "";*/
    /*    Height: 0;*/
    /*    display: block;*/
    /*    clear: both;*/
    /*}*/

    .video-details-container {
        width: 1200px;
        margin: 0 auto;
        background-color: #fff;
        overflow: hidden;

        .play-view {
            width: 1100px;
            margin: 20px auto;
            .view-play {
                float: left;

                video {
                    width: 800px;
                    height: 450px;
                }
            }

            .view-directory {
                /*background-color: black;*/
                float: left;
                width: 300px;
                height: 450px;
                overflow: scroll;

                .section-detail-directory {
                    margin-left: 20px;
                    h3{
                        margin: 10px auto;
                    }

                    .directory {
                        margin-top: 5px;

                        .directoryDetails {
                            .pageword {
                                font-size: 14px;
                                margin-left: 60px;
                            }

                            .recorded {
                                width: 50px;
                                height: 20px;
                                float: left;
                                background-color: #cccccc;
                                display: flex;
                                justify-content: center;
                                color: white;
                            }

                            .active {
                                background-color: #1da57a;
                                color: #1da57a;
                            }
                        }
                    }

                    .dlBox:hover {
                        color: #1da57a;
                        cursor: pointer;
                    }
                }
            }
        }

    }
</style>