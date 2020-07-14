<template>
    <div class="login-container">
        <div class="login-box">
            <a href="#" class="shopping">
                <span>
                    <router-link to="/shop">
                        <i class="el-icon-shopping-cart-2" @click="toclick"></i>
                    </router-link>
                </span>
            </a>
            <span class="line">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <div class="login">
                <span class="login-text" @click="showLoginModel" v-if="!isLogin">登录/注册</span>
                <span v-else @click="logout">{{userInfo.nickname}}</span>
                <span class="user">
                    <i class="el-icon-user-solid"></i>
                </span>
            </div>
        </div>
        <!--        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>-->
        <div>
            <el-dialog
                    title="登录"
                    :visible.sync="loginModelVisible"
                    width="30%" @close="cancel">
                <!--            <span>这是一段信息</span>-->
                <div>
                    <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px"
                             class="demo-ruleForm">
                        <el-form-item label="用户名" prop="userName">
                            <el-input v-model="loginForm.userName" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                </div>

                <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {loginApi, logout} from "../../api/user-api";
    import loginMixin from "../../mixin/loginMixin";
    // import {createKey, setItem} from "../../utils/localstore";

    export default {
        name: "Login",
        mixins: [loginMixin],
        data() {
            var userName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                } else if (value.length < 5) {
                    return callback(new Error("用户名要大于五位"))
                } else {
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                loginForm: {
                    password: '',
                    userName: ''
                },
                loginRules: {
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    userName: [
                        {validator: userName, trigger: 'blur'}
                    ]
                }
            };
        }
        ,
        computed: {
            ...
                mapState(["loginModelVisible", "isLogin", "userInfo"])
        }
        ,
        methods: {
            showLoginModel() {
                this.$store.commit("changeLoginModelVisible", {isShow: true})
            }
            ,
            cancel
                () {
                this.$store.commit("changeLoginModelVisible", {isShow: false})
            }
            ,
            submit() {
                this.$refs['loginForm'].validate((valid) => {
                    if (valid) {
                        console.log(this.loginForm);
                        //    登录成功之后
                        loginApi(this.loginForm.userName, this.loginForm.password).then(res => {
                            console.log(res);
                            if (res.data.code == 0) {
                                //登录成功
                                //顶部注册登录变成用户名和头像
                                //给用户提示
                                //修改全局的登录状态
                                this.$message({
                                    message: '登录成功...',
                                    type: 'success'
                                });
                                // this.$store.commit("changeLogin", {isLogin: true});
                                // // localStorage.setItem(createKey("isLogin"),"true");
                                // setItem(createKey("isLogin"), "true", Date.now() + 30000);
                                // this.$store.commit("changeUserInfo", {userInfo: res.data.userInfo});
                                // // localStorage.setItem(createKey("userInfo"),JSON.stringify(res.data.userInfo));
                                this.$store.commit("changeLoginModelVisible", {isShow: false});
                                this.$store.dispatch("checkLoginStatus")
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            logout() {
                logout().then(res => {
                    console.log(res);
                    if (res.data.code === 0) {
                        this.$store.dispatch("checkLoginStatus")
                    }
                })
            },
            toclick(){
                if(this.loginClick()){
                    console.log("可以进入购物车")
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .login-container {
        height: 100%;
        font-size: 14px;
        padding: 32px 0 0;

        a {
            color: #999;
        }

        .login-box {
            line-height: 32px;

            .shopping {
                line-height: 35px;

                span {
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    /*color: rgba(0,0,0,.65);*/
                    font-size: 14px;
                    font-variant: tabular-nums;
                    /*line-height: 1.5;*/
                    list-style: none;
                    -webkit-font-feature-settings: "tnum";
                    font-feature-settings: "tnum";
                    position: relative;
                    display: inline-block;
                    color: unset;
                    /*line-height: 1;*/

                    i {
                        display: inline-block;
                        font-style: normal;
                        line-height: 0;
                        text-align: center;
                        text-transform: none;
                        vertical-align: -.125em;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                    }
                }
            }

            .line {
                color: #999;
            }

            .login {
                float: right;
                cursor: pointer;

                .login-text {
                    margin-right: 8px;
                }

                .user {
                    width: 32px;
                    height: 32px;
                    line-height: 32px;
                    font-size: 16px;
                    margin-top: -4px;
                }
            }
        }


    }
</style>