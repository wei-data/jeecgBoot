<template>
  <div>
    <div>
      <a-form
        :model="formState"
        name="horizontal_login"
        layout="inline"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item label="规则名称" name="username">
          <a-input
            v-model:value="formState.username"
            placeholder="请输入规则名称"
          >
          </a-input>
        </a-form-item>
        <a-form-item label="规则编码" name="username">
          <a-input
            v-model:value="formState.username2"
            placeholder="请输入规则编码"
          >
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" @click="formInquire"
            >查询</a-button
          >
          <a-button html-type="submit" @click="formReset">重置</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="body">
      <!-- 表单 -->
      <a-form
        :model="formState"
        name="horizontal_login"
        layout="inline"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item>
          <a-button type="primary" html-type="submit" @click="add"
            >新增</a-button
          >
          <a-button type="primary" html-type="submit">导出</a-button>
          <a-button type="primary" html-type="submit">导入</a-button>
        </a-form-item>
      </a-form>
      <!-- 新增-对话框组件 -->
      <ModalCom
        v-if="open.Boolean"
        :open="open"
        :codingMess="codingMess"
        @handleOk="addList"
        @close="over"
      ></ModalCom>

      <!-- 列表 -->
      <a-table
        :scroll="{ x: 800, y: 300 }"
        :row-selection="rowSelection"
        :columns="columns"
        :data-source="data"
      >
        <template #bodyCell="{ column, index }">
          <template v-if="column.key === 'ind'">
            {{ index + 1 }}
          </template>
          <template v-if="column.key === 'operation'">
            <a style="margin-right: 20px" @click="edit(data, index)">编辑</a>
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent> 更多 </a>
              <DownOutlined />
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a @click="funTest(data, index)">功能测试</a>p
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="funDele(data, index)">删除</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed, onMounted, ref } from "vue";
import { DownOutlined } from "@ant-design/icons-vue";
import type { TableProps, TableColumnType } from "ant-design-vue";
import { Modal } from "ant-design-vue";
import { message } from "ant-design-vue";
import { h } from "vue";
import ModalCom from "../../components/rule/ModalCom.vue";
// 接口
import {
  getList,
  adList,
  functionalTest,
  functionalDele,
  codingInquire,
  codingRedact,
} from "../../api/rule/coding";
let data: any = ref([]);

// 获取列表数据
const getListFun = async () => {
  let list: any = await getList({
    columns: "createTime",
    order: "desc",
    pageNo: 1,
    pageSize: 10,
    _t: 1691977266055,
  });
  data.value = list.result.records;
  // console.log(data.value, 1243423);
};

onMounted(() => {
  getListFun();
});
// 表单类型
interface FormState {
  username: string;
  password: string;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
// 查询
const formInquire = async () => {
  let inquire: any = await codingInquire({
    ruleName: formState.username,
    ruleCode: formState.password,
  });
  console.log(data.value, inquire.result.records[0]);

  data.value = inquire.result.records;
};
// 重置
const formReset = () => {
  formState.username = "";
  formState.password = "";
};

// 列表
// 数据类型
interface DataType {
  key: string;
  ruleName: string;
  ruleCode: number;
  address: string;
}
const columns: TableColumnType<DataType>[] = [
  {
    title: "序号",
    key: "ind",
    fixed: "left",
    width: 60,
  },
  {
    title: "规则名称",
    dataIndex: "ruleName",
  },
  {
    title: "规则编码",
    dataIndex: "ruleCode",
  },
  {
    title: "规则实现类",
    dataIndex: "ruleClass",
  },
  {
    title: "规则参数",
    dataIndex: "ruleParams",
  },
  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 140,
  },
];

const rowSelection: TableProps["rowSelection"] = {
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};
// 对话框

let open: any = reactive({ Boolean: false, title: "" });
// 新增
const add = () => {
  open.title = "新增";
  open.Boolean = true;
};
let codingMess: any = ref([]);
const edit = (data: any, ind: any) => {
  console.log(data[ind]);
  codingMess = data[ind];
  open.title = "编辑";
  open.Boolean = true;
};

const over = () => {
  open.Boolean = false;
  codingMess = [];
};
const addList = async (aa: any, bb: any) => {
  open.Boolean = false;
  console.log("八嘎", aa, bb, open.value);
  if (bb == "新增") {
    let addMyList: any = await adList({
      ruleName: aa.username,
      ruleCode: aa.userid,
      ruleClass: aa.userclass,
    });
    console.log(addMyList, 1243423);
    if (addMyList.code === 200) {
      message.success("添加成功！");
    } else {
      message.error("添加失败！");
    }
  } else {
    let redact: any = await codingRedact({
      id: aa.id,
      ruleName: aa.username,
      ruleCode: aa.userid,
      ruleClass: aa.userclass,
    });
    console.log(redact);

    if (redact.code === 200) {
      message.success("编辑成功！");
    } else {
      message.error("编辑失败！");
    }
  }
  (codingMess = []), getListFun();
};
// 功能测试
const funTest = async (
  list: { [x: string]: { id: any } },
  index: string | number
) => {
  let funcbody: any = await functionalTest({
    ruleCode: list[index].ruleCode,
    _t: list[index].id,
  });
  Modal.success({
    title: "填值规则功能测试",
    class: "ant-coding",
    content: h("div", {}, [h("p", `生成结果：${funcbody.result[0]} `)]),
  });
  // console.log(test.value);
};
// 删除
const funDele = async (
  list: { [x: string]: { id: any } },
  index: string | number
) => {
  let funcbody: any = await functionalDele({
    id: list[index].id,
  });
  if (funcbody.code === 200) {
    message.success("删除成功！");
  }
  console.log(funcbody);
  getListFun();
};
</script>

<style scoped>
button.css-dev-only-do-not-override-eq3tly.ant-btn.ant-btn-primary {
  margin-right: 20px;
}
.body {
  margin-top: 20px;
}
a {
  color: #1677ff;
}
.ant-table-wrapper.css-dev-only-do-not-override-eq3tly {
  margin-top: 30px;
}
</style>
<style>
.ant-coding .ant-modal-body {
  padding: 20px !important;
}
</style>
