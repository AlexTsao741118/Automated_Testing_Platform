<template>
    <div class="login_page">
        <div class="login_box">
            <!-- 左侧内容 -->
            <div class="left_box">
                <!-- 显示图片 -->
                <img src="@/assets/images/login_left4.png" class="img_box">
            </div>
            <!-- 右侧登录表单 -->
            <div class="login_right_box">
                <div class="header">
                    <div class="logo">
                        <img src="@/assets/images/logo.png" aly="">
                    </div>
                    <div class="title">自动化测试平台</div>
                </div>
                <div class="login_form">
                    <el-form :model="loginForm">
                        <el-form-item >
                            <el-input prefix-icon="Avatar" v-model="loginForm.username" placeholder="请输入账号"/>
                        </el-form-item>
                        <el-form-item >
                            <el-input prefix-icon="Lock" type="password" v-model="loginForm.password" placeholder="请输入密码"/>
                        </el-form-item>
                        <el-form-item>
                            
                            <el-button icon="CircleClose" round style="width:170px;">重置</el-button>
                            <el-button @click='loginSubmit' type="primary" icon="Avatar" round style="width:170px;">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref,reactive} from 'vue'

    // 登录的表单数据
    const loginForm =reactive({
        username:"",
        password:""
    })
    // 提交登录的方法
    function loginSubmit(){
        alert('点击了登录')
    }

</script>

<style lang="scss" scoped>
    @import './login.scss'
</style>
