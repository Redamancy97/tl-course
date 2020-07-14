<template>
    <div class="index-layout-container">
        <!-- 顶部导航栏 -->
        <header>
            <div class="top">
                <Logo class="logo"></Logo>
                <Search class="search"></Search>
                <Login class="login"></Login>
            </div>
            <div>
                <Classify></Classify>
            </div>
        </header>
        <section>
            <router-view></router-view>
        </section>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
</template>

<script>
    import Logo from '../components/header/Logo'
    import Search from '../components/header/Search'
    import Login from '../components/header/Login'
    import Classify from '../components/header/Classify'
    import Footer from "../components/footer/Footer";

    export default {
        name: "IndexLayout",
        components: {
            Logo,
            Search,
            Login,
            Classify,
            Footer
        }
    }
</script>

<style scoped lang="less">
    .index-layout-container {
        header {
            margin: 0 auto;
            position: relative;
            width: 1200px;
            background: #fff;

            .top {
                height: 106px;
            }

            .logo {
                margin-top: 22px;
                margin-right: 200px;
            }

            .search {
                margin: 30px 6px 0 0;
                display: inline-block;
            }

            .login {
                float: right;
                margin-right: 100px;
            }
        }

    }
</style>