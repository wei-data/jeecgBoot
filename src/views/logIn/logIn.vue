<script setup lang="ts">
import {onMounted, ref} from "vue";
import Cookie from 'js-cookie';
import {useRouter } from 'vue-router'
import {getVerification,logInUser} from '../../api/user'
// import {Verification} from '../../api/type/userType'
const checkKey = ref('')
const url =ref()
const router = useRouter ()
onMounted(async ()=>{
  // inputCode = '';
  //TODO 兼容mock和接口，暂时这样处理
  checkKey.value = '1691804949576'; //new Date().getTime();
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
  <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        label="Username"
        name="username"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
        label="Password"
        name="password"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item  label="验证码" name="verify" :wrapper-col="{ offset: 8, span: 16 }">
      <div style="display: flex;width: 300px">
        <a-input v-model:value="formState.verify" style="width: 250px!important;"  />
        <img
            :width="150"
            :src="url"
            @click="Toggle"
        />
      </div>
    </a-form-item>
    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped>
::v-deep :where(.css-dev-only-do-not-override-eq3tly).ant-col-offset-8{
  margin: 0;
}
</style>
