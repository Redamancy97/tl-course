<template>
    <div class="shop-car-container">
        <p class="shop-car-title"><span class="shop-car">我的购物车</span></p>
        <div class="shop">
            <ul class="shop-car-table">
                <li style="width: 200px;text-align: left ">
                    <el-checkbox :indeterminate="isIndeterminate" :value="checkAll" @change="handleCheckAllChange">
                        全选
                    </el-checkbox>
                </li>
                <li style="width: 300px;">课程名称</li>
                <li style="width: 150px; text-align: center">原价</li>
                <li style="width: 280px; text-align: center">优惠</li>
                <li>操作</li>
            </ul>
        </div>
        <div class="shop-car-goods" v-for="(item,index) in list" :key="index">
            <ul>
                <li style="width: 200px;" class="selected">
                     <span class="box" style="line-height: 100px">
                        <el-checkbox v-model="item.checked"></el-checkbox>
                    </span>

                    <img :src="item.course.bannerFileUrl" alt="">
                </li>
                <li style="width: 300px;">{{item.course.courseTitle}}</li>
                <li style="width: 150px; text-align: center">
                    <span class="old-price">￥{{item.course.coursePrice}}</span>
                    <span class="new-price">￥{{item.course.discountPrice}}</span>
                </li>
                <li style="width: 280px; text-align: center">
                    <span class="limit-time">限时钜惠</span>
                </li>
                <li style="margin-left: 20px" @click="deleteShop(item.shoppingCartId)">
                    <i class="el-icon-delete"></i>
                </li>
            </ul>

        </div>
        <div class="total">
            <div class="total-price">
                <span>合计</span> <span style="color: red;margin-right: 20px">￥{{totalMoney}}</span>
                <button class="submit" :class="totalMoney>0?'active':''">提交</button>
            </div>
        </div>
        <div style="clear: both"></div>

    </div>
</template>

<script>
    import {deleteGoods, goodsList} from "../../api/tl-course-api";

    export default {
        name: "shop",
        data() {
            return {
                list: [],
            }
        },
        computed: {
            isIndeterminate() {
                let i = 0;
                this.list.forEach(item => {
                    if (item.checked) {
                        i++
                    }
                })
                return i !== 0 && i !== this.list.length
            },
            totalMoney() {
                let totalMoney = 0;
                this.list.forEach(item => {
                    if (item.checked)
                        totalMoney += item.course.discountPrice
                })
                return totalMoney;
            },
            checkAll() {
                let i = 0;
                this.list.forEach(item => {
                    if (item.checked) {
                        i++
                    }
                })
                return i === this.list.length
            },
        },
        methods: {

            handleCheckAllChange(val) {
                if (val) {
                    // 全选操作
                    this.list = this.list.map(item => ({...item, checked: true}))
                } else {
                    // 取消全选的操作
                    this.list = this.list.map(item => ({...item, checked: false}))
                }
            },
            // handleCheckedCitiesChange(value) {
            //     let checkedCount = value.length;
            //     this.checkAll = checkedCount === this.cities.length;
            //     this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            // },
            deleteShop(a) {
                deleteGoods(a).then(res => {
                    console.log(res)
                    this.$message({
                        message: '该课程已删除 ...',
                        type: 'warning'
                    });
                    goodsList().then(res => {
                        console.log(res)
                        this.list = res.data.shoppingCartList.map(item => {
                            return {
                                ...item,
                                // 为数组的每一项添加选中的属性
                                checked: false
                            }
                        })

                    })
                })
            },


        },
        created() {
            // console.log(shopCar.courseId)
            goodsList().then(res => {
                console.log(res)
                this.list = res.data.shoppingCartList.map(item => {
                    return {
                        ...item,
                        // 为数组的每一项添加选中的属性
                        checked: false
                    }
                })

            })
        }
    }

</script>

<style scoped lang="less">
    .shop-car-container {
        width: 1200px;
        margin: 0 auto;
        padding: 20px;

        .shop-car-title {
            margin-bottom: 20px;

            .shop-car {
                font-size: 16px;
                padding: 20px 0;
                font-weight: 400;
            }
        }

        .shop {
            border: 1px solid #e8e8e8;
            height: 50px;
            width: 100%;
            line-height: 50px;
            background: #fafafa;

            .shop-car-table {
                list-style: none;

                li {
                    float: left;
                    width: 200px;
                    text-align: left;
                    padding-left: 10px;
                    color: rgba(0, 0, 0, .65);
                    /*text-align: center;*/
                }
            }
        }

        .shop-car-goods {
            /*width: 1200px;*/
            height: 100px;
            border: 1px solid #e8e8e8;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 10px 0;

            img {
                width: 156px;
                height: 100%;
                margin-left: 10px;
            }

            li {
                float: left;
                line-height: 90px;
                padding: 3px;

            }

            .selected {
                display: flex;
                justify-content: center;

                .box {
                    line-height: 50px;
                }
            }
        }

        .new-price {
            font-size: 14px;
            color: red;

        }

        .old-price {
            font-size: 14px;
            color: rgb(153, 153, 153);
            text-decoration: line-through;
        }

        .limit-time {
            width: 64px;
            height: 22px;
            background-color: rgb(255, 85, 0);
            color: white;
            font-size: 12px;
            padding: 0 7px;
        }

        .total {
            background-color: #eee;
            border: 1px solid #e4e4e4;
            border-right: 0;
            height: 60px;
            margin: 20px 0;
            width: 100%;

            .total-price {
                float: right;
                line-height: 60px;
            }

            .submit {
                float: right;
                background: #999;
                font-size: 20px;
                text-align: center;
                line-height: 60px;
                width: 120px;
                color: #fff;
                margin-top: -1px;
                outline-style: none;
                border: 0;
            }

            .active {
                background: #ff8000;
            }
        }
    }
</style>