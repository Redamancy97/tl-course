<template>
    <div class="other-layout-container">
        <!-- 顶部导航栏 -->
        <header>
            <Logo class="logo"></Logo>
            <Classify class="classify"></Classify>
            <Search class="search"></Search>
            <Login class="login"></Login>
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
    // import Details from "../views/Details/Details";

    export default {
        name: "OtherLayout",
        components: {
            // Details,
            Logo,
            Search,
            Login,
            Classify,
            Footer
        }
    }
</script>

<style scoped lang="less">
    .other-layout-container {
        border-bottom: 1px solid #f2f2f2;
        background: #fff;

        header {
            margin: 0 auto;
            position: relative;
            width: 1200px;
            height: 80px;

            .logo {
                margin-top: 16px;
            }

            .classify {
                margin-top: 10px;
                margin-right: 30px;
                float: left;
                margin-left: 40px;
                /*height: 50px;*/
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