<template>
    <span class="search-container">
        <span class="search">
            <input type="text" placeholder="搜索课程" size="large">
            <span class="search-button">
                <button><i class="el-icon-search"></i>搜索</button>
            </span>
        </span>
    </span>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped lang="less">
    .search-container {
        width: 400px;
        text-align: start;
        vertical-align: top;

        .search {
            -webkit-box-sizing: border-box;
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
            display: table;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;

            input {
                box-sizing: border-box;
                margin: 0;
                height: 38px;
                border-radius: 20px;
                float: left;
                width: 100%;
                margin-bottom: 0;
                text-align: inherit;
                padding: 6px 11px;
                font-size: 16px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                display: table-cell;
                position: relative;
                color: rgba(0, 0, 0, .65);
                line-height: 1.5;
                background-color: #fff;
                background-image: none;
                border: 1px solid #d9d9d9;
            }
        }

        .search-button {
            padding: 0;
            border: 0;
            position: relative;
            /*padding: 0 11px;*/
            color: rgba(0, 0, 0, .65);
            font-weight: 400;
            font-size: 14px;
            line-height: 1;
            text-align: center;
            background-color: #fafafa;
            /*border: 1px solid #d9d9d9;*/
            border-radius: 2px;
            -webkit-transition: all .3s;
            transition: all .3s;
            width: 1px;
            white-space: nowrap;
            vertical-align: middle;
            display: table-cell;

            button {
                background: rgb(0, 207, 140);
                color: white;
                line-height: 100%;
                width: 100%;
                border-radius: 20px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                height: 38px;
                margin-left: -2px;
                padding: 0 15px;
                font-size: 16px;
                position: relative;
                display: inline-block;
                font-weight: 400;
                white-space: nowrap;
                text-align: center;
                border: 1px solid transparent;
                box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
                cursor: pointer;
            }
        }
    }
</style>