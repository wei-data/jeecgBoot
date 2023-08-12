<script setup lang="ts">
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';

import {onMounted, ref} from "vue";
import Cookie from 'js-cookie';
import {useRouter } from 'vue-router'
import {getVerification,logInUser} from '../../api/user'
// import {Verification} from '../../api/type/userType'
const checkKey = ref('')
const url =ref()
const router = useRouter ()
const activeKey = ref('1');


onMounted(async ()=>{
  // inputCode = '';
  //TODO 兼容mock和接口，暂时这样处理
  checkKey.value = '1629428467008'; //new Date().getTime();
  const data:any = await getVerification(checkKey.value)
  console.log(data)
  url.value = data.result
  // console.log(url.value)
})

import { reactive } from 'vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
  verify: string
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  verify: '',
  remember: true,
});
const onFinish =async (values: any) => {
  console.log('Success:', values);
  const { verify} = values;
  const data:any = await logInUser({username:formState.username ,password:formState.password, captcha: verify,checkKey:checkKey.value});
  console.log(data)
  if(data.code===200){
    Cookie.set('myCookie', data.result.token)
    await router.push({
      path: '/Home'
    })
  }else {
    await Toggle()
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Toggle = async ()=>{
  const data:any = await getVerification(checkKey.value)
  console.log(data)
  url.value = data.result
}
</script>

<template>
  <div class="main">
    <div class="box">
      <a-tabs v-model:activeKey="activeKey" style="width: 40%;height: 100%;background: white">
        <a-tab-pane key="1" tab="登录"><a-form
            style="width: 100%;background: white;height: 100%;"
            :model="formState"
            name="basic"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
          <a-form-item
              name="username"
          >
            <a-input style="width: 90%"  v-model:value="formState.username" >
              <template #prefix>
                <user-outlined type="user" />
              </template>
<!--              <template #suffix>-->
<!--                <a-tooltip title="Extra information">-->
<!--                  <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />-->
<!--                </a-tooltip>-->
<!--              </template>-->
            </a-input>
          </a-form-item>

          <a-form-item
              name="password"
          >
            <a-input-password style="width: 90%" v-model:value="formState.password" >
<!--              <unlock-outlined />-->
              <template #prefix>
                <unlock-outlined />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item  name="verify" >
            <div style="display: flex;justify-content:center;width: 90%">
              <a-input v-model:value="formState.verify" placeholder="验证码" style="width: 80%;"  />
              <img
                  :width="80"
                  :src="url"
                  @click="Toggle"
              />
            </div>
          </a-form-item>
          <a-form-item name="remember" >
            <div style="display: flex;justify-content: space-between;width: 90%;margin-left: 5%">
              <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
              <a-button type="link" size="small">忘记密码？</a-button>
            </div>
          </a-form-item>
          <a-form-item style="width: 90%;margin-left: 5%">
            <a-button type="primary" html-type="submit" style="width: 100%">登录</a-button>
          </a-form-item>
        </a-form></a-tab-pane>
        <a-tab-pane key="2" tab="手机登录" force-render>Content of Tab Pane 2</a-tab-pane>
      </a-tabs>
<!--      <img src="" alt="">-->

    </div>
  </div>
</template>

<style scoped lang="scss">
::v-deep :where(.css-dev-only-do-not-override-eq3tly).ant-col-offset-8{
  margin: 0;
}
.main {
  background-image: url("../../../public/img/logInBgc.webp");
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  .box {
    width: 50%;
    height: 60%;
    transform: translate(50%, 40%);
    //background: white;
    //border-radius: 20px;
    background-image: url("../../../public/img/logInImg.webp");
    background-size: 100% 100%;
  }
}
::v-deep :where(.css-dev-only-do-not-override-eq3tly).ant-input {
  width: 250px;

}
::v-deep .ant-form-item-control-input-content {
  display: flex;
  justify-content: center;
}
::v-deep :where(.css-dev-only-do-not-override-eq3tly).ant-tabs >.ant-tabs-nav .ant-tabs-nav-wrap, :where(.css-dev-only-do-not-override-eq3tly).ant-tabs >div>.ant-tabs-nav .ant-tabs-nav-wrap{
  justify-content: center;
}
</style>
