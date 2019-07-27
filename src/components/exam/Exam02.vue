<template>
    <div>
        <h1>Exam02</h1>
        <mt-field label='用户名' placeholder='请输入用户名' v-model='uname' type='text' :attr='{maxlength:10}'></mt-field>
        <mt-field type='password' label='密码' placeholder="请输入密码" v-model='upwd'></mt-field>
        <mt-field type='text' label='年龄' placeholder="请输入年龄" v-model='age'></mt-field>
        <mt-button @click='reg' size='large'>用户注册</mt-button>
    </div>
</template>

<script>
export default {
    data(){  // 组件中共享数据
        return {
            uname:'',
            upwd:'',
            age:'',
        }    //数据
    },
    methods:{
        reg1:function(){
                if(/^[\d|\w]{3,8}$/i.test(this.uname)){
                    if(/^[\d|\w]{3,8}$/i.test(this.upwd)){
                        if(/^\d{2}$/i.test(this.age)){
                            return '验证通过'
                        }else{
                            return '年龄格式不正确'
                        }
                    }else{
                        return '密码错误'
                    }
                }else{
                    return '用户名错误'
                }
        },
        reg(){
            this.$messagebox('提交',this.reg1())
            }
        },
    // watch:{
    //     uname(){
    //         this.reg()
    //     }
    // }
    
}
</script>

<style>

</style>

