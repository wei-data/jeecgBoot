<template>
  <div>
    <div>
      <a-modal
        class="ant-modal"
        v-model:open="props.open.Boolean"
        :title="props.open.title"
        okText="确认"
        cancelText="取消"
        @ok="handleOk"
        @cancel="close"
      >
        <!-- 弹框表单 -->
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          class="add"
        >
          <a-form-item
            label="规则名称"
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item
            label="规则编码"
            name="userid"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input
              :disabled="props.open.title !== '新增'"
              v-model:value="formState.userid"
            />
          </a-form-item>
          <a-form-item
            label="规则实现类"
            name="userclass"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.userclass" />
          </a-form-item>
          <!-- 新增 -->
          <a-form-item label="规则参数" name="userclass">
            <a-form
              ref="formRef"
              name="dynamic_form_nest_item"
              :model="dynamicValidateForm"
            >
              <a-space
                v-for="(user, index) in dynamicValidateForm.users"
                :key="user.id"
                style="display: flex; margin-bottom: 8px"
                align="baseline"
              >
                <a-form-item
                  :name="['users', index, 'first']"
                  :rules="{
                    required: true,
                    message: 'Missing first name',
                  }"
                >
                  <a-input
                    v-model:value="user.first"
                    placeholder="请输入参数key"
                  />
                </a-form-item>
                <a-form-item
                  :name="['users', index, 'last']"
                  :rules="{
                    required: true,
                    message: 'Missing last name',
                  }"
                >
                  <a-input
                    v-model:value="user.last"
                    placeholder="请输入参数value"
                  />
                </a-form-item>
                <MinusCircleOutlined @click="removeUser(user)" />
              </a-space>
              <a-form-item class="add_btn">
                <a-button type="dashed" block @click="addUser">
                  <PlusOutlined />
                  新增
                </a-button>
              </a-form-item>
            </a-form>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, reactive, ref, toRefs } from "vue";
import type { FormInstance } from "ant-design-vue";
// 组件传值
const props = defineProps({
  open: Object,
  codingMess: Array,
});
console.log(props);

const emit = defineEmits(["handleOk", "close"]);
// 单击确定
const handleOk = () => {
  if (formState.userclass !== "") {
    if (formState.userid !== "") {
      if (formState.username !== "") {
        emit("handleOk", formState, props.open.title);
      }
    }
  }
};
// 单击遮罩
const close = () => {
  emit("close");
};
// 表单
// 表单类型
interface FormState {
  username: string;
  userid: string;
  userclass: string;
  id: string;
}

let formState = reactive<FormState>({
  username: "",
  userid: "",
  userclass: "",
  id: "",
});
formState.username = props.codingMess.ruleName;
formState.userid = props.codingMess.ruleCode;
formState.userclass = props.codingMess.ruleClass;
formState.id = props.codingMess.id;

interface User {
  first: string;
  last: string;
  id: number;
}
const formRef = ref<FormInstance>();
const dynamicValidateForm = reactive<{ users: User[] }>({
  users: [],
});
// 新增删除项
const removeUser = (item: User) => {
  let index = dynamicValidateForm.users.indexOf(item);
  if (index !== -1) {
    dynamicValidateForm.users.splice(index, 1);
  }
};
const addUser = () => {
  dynamicValidateForm.users.push({
    first: "",
    last: "",
    id: Date.now(),
  });
};
</script>

<style>
.ant-modal .ant-modal-content {
  border-radius: 0;
  padding: 0;
}
.ant-modal .ant-modal-header {
  padding: 16px;
  border-bottom: 1px solid #e8e8e8;
}
.ant-modal .ant-modal-title {
  font-weight: 400;
}
.ant-modal {
  width: 800px !important;
}
.ant-modal .add {
  padding: 14px;
}
.ant-modal .add_btn {
  width: 350px !important;
}
.ant-modal .ant-modal-footer {
  padding: 16px;
  border-top: 1px solid #e8e8e8;
}
</style>
