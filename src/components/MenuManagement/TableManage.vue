<template>
  <div class="TableManage">
    <a-button type="primary" :icon="h(PlusOutlined)" style='margin:10px 10px 10px 0' @click="openGrod">新增菜单</a-button>
    <a-button type="primary" :icon="h(ColumnHeightOutlined)" style='margin:10px 10px 10px 0'
      @click="fold = true">展开全部</a-button>
    <a-button type="primary" :icon="h(VerticalAlignMiddleOutlined)" style='margin:10px 10px 10px 0'
      @click="fold = false">折叠全部</a-button>
    <a-dropdown v-if="hasSelected">
      <template #overlay>
        <a-menu>
          <a-menu-item key="1" @click.prevent="dels">
            <DeleteOutlined />
            删除
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        批量操作
        <DownOutlined />
      </a-button>
    </a-dropdown>
    <a-alert v-if="!hasSelected" message="未选中任何数据" type="info" show-icon style="margin: 10px 0;" />
    <a-alert v-else :message="'已选择' + selected.length + '记录(可跨页)'" type="info" show-icon style="margin: 10px 0;">
      <template #action>
        <a-button size="small" type="link" :loading="state.loading" @click="start">清空</a-button>
      </template>
    </a-alert>
    <a-table :columns="columns" :data-source="data" :defaultExpandAllRows="true" v-if="fold"
      :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }" @change="onunhandlePagetion"
      bordered>
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'menuType'">
          <div v-if="text === 0">一级菜单</div>
          <div v-if="text === 1">二级菜单</div>
          <div v-if="text === 2">三级菜单</div>
        </template>
        <template v-if="column.dataIndex === 'icon'">
          <!-- <text /> -->
          {{ text }}
        </template>
        <template v-if="column.key === 'edit'">
          <a-button type="link" @click="PutEdit(record)">编辑</a-button>
          <a-dropdown :arrow="{ pointAtCenter: true }">
            <a class="ant-dropdown-link">
              更多
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1" @click.prevent="pushChild(record.id)">添加下级</a-menu-item>
                <a-menu-divider />
                <a-menu-item key="2" @click.prevent="InDel(record.id)">删除</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </template>
    </a-table>
    <a-table :columns="columns" :data-source="data" :defaultExpandAllRows="false" v-if="!fold"
      :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }" @change="onunhandlePagetion"
      bordered>
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'menuType'">
          <div v-if="text === 0">一级菜单</div>
          <div v-if="text === 1">二级菜单</div>
          <div v-if="text === 2">三级菜单</div>
        </template>
        <template v-if="column.dataIndex === 'icon'">
          <!-- <text /> -->
          {{ text }}
        </template>
        <template v-if="column.key === 'edit'">
          <a-button type="link" @click="PutEdit(record)">编辑</a-button>
          <a-dropdown :arrow="{ pointAtCenter: true }">
            <a class="ant-dropdown-link">
              更多
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1" @click.prevent="pushChild(record.id)">添加下级</a-menu-item>
                <a-menu-divider />
                <a-menu-item key="2" @click.prevent="InDel(record.id)">删除</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </template>
    </a-table>
    <a-modal v-model:open="open" title="新增菜单" width="1000px" @ok="handleOk">
      <a-form :model="formState" :ref='addRefs'>
        <a-form-item label="菜单名称">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label='访问路径'>
          <a-input v-model:value="formState.url" />
        </a-form-item>
        <a-form-item label='前端组件'>
          <a-input v-model:value="formState.component" />
        </a-form-item>
        <a-form-item label='组件名称'>
          <a-input v-model:value="formState.componentName" />
        </a-form-item>
        <a-form-item label='默认跳转地址'>
          <a-input v-model:value="formState.redirect" />
        </a-form-item>
        <a-form-item label='菜单图标'>
          <a-input v-model:value="formState.icon" />
        </a-form-item>
        <a-form-item label='排序'>
          <a-input-number id="inputNumber" v-model:value="formState.sortNo" :min="1" :max="20" />
        </a-form-item>
        <a-form-item label='是否路由菜单'>
          <a-switch v-model:checked="formState.route" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='隐藏路由'>
          <a-switch v-model:checked="formState.hidden" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='隐藏Tab'>
          <a-switch v-model:checked="formState.hideTab" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='是否缓存路由'>
          <a-switch v-model:checked="formState.keepAlive" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='聚合路由'>
          <a-switch v-model:checked="formState.alwaysShow" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='打开方式'>
          <a-switch v-model:checked="formState.internalOrExternal" checked-children="外部" un-checked-children="内部" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal v-model:open="openChild" title="新增子菜单" width="1000px" @ok="handleChildOk">
      <a-form :model="formState" :ref="addRefs">
        <a-form-item label="菜单名称">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label='上级菜单'>
          <!-- <a-input v-model:value="formState.redirect" /> -->
          <a-tree-select v-model:value="formState.redirect" show-search style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }" placeholder="请输入上级菜单" allow-clear
            tree-default-expand-all :tree-data="treeData" tree-node-filter-prop="label">
          </a-tree-select>
        </a-form-item>
        <a-form-item label='访问路径'>
          <a-input v-model:value="formState.url" />
        </a-form-item>
        <a-form-item label='前端组件'>
          <a-input v-model:value="formState.component" />
        </a-form-item>
        <a-form-item label='组件名称'>
          <a-input v-model:value="formState.componentName" />
        </a-form-item>
        <a-form-item label='菜单图标'>
          <a-input v-model:value="formState.icon" />
        </a-form-item>
        <a-form-item label='排序'>
          <a-input-number id="inputNumber" v-model:value="formState.sortNo" :min="1" :max="20" />
        </a-form-item>
        <a-form-item label='是否路由菜单'>
          <a-switch v-model:checked="formState.route" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='隐藏路由'>
          <a-switch v-model:checked="formState.hidden" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='隐藏Tab'>
          <a-switch v-model:checked="formState.hideTab" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='是否缓存路由'>
          <a-switch v-model:checked="formState.keepAlive" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='聚合路由'>
          <a-switch v-model:checked="formState.alwaysShow" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='打开方式'>
          <a-switch v-model:checked="formState.internalOrExternal" checked-children="外部" un-checked-children="内部" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal v-model:open="openEdit" title="编辑菜单" width="1000px" @ok="handleEditOk(editVal)">
      <a-form :model="editVal">
        <a-form-item label="菜单名称">
          <a-input v-model:value="editVal.name" />
        </a-form-item>
        <a-form-item label='访问路径'>
          <a-input v-model:value="editVal.url" />
        </a-form-item>
        <a-form-item label='前端组件'>
          <a-input v-model:value="editVal.component" />
        </a-form-item>
        <a-form-item label='组件名称'>
          <a-input v-model:value="editVal.componentName" />
        </a-form-item>
        <a-form-item label='默认跳转地址'>
          <a-input v-model:value="editVal.redirect" />
        </a-form-item>
        <a-form-item label='菜单图标'>
          <a-input v-model:value="editVal.icon" />
        </a-form-item>
        <a-form-item label='排序'>
          <a-input-number id="inputNumber" v-model:value="editVal.sortNo" :min="1" :max="20" />
        </a-form-item>
        <a-form-item label='是否路由菜单'>
          <a-switch v-model:checked="editVal.route" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='隐藏路由'>
          <a-switch v-model:checked="editVal.hidden" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='隐藏Tab'>
          <a-switch v-model:checked="editVal.hideTab" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='是否缓存路由'>
          <a-switch v-model:checked="editVal.keepAlive" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='聚合路由'>
          <a-switch v-model:checked="editVal.alwaysShow" checked-children="是" un-checked-children="否" />
        </a-form-item>
        <a-form-item label='打开方式'>
          <a-switch v-model:checked="editVal.internalOrExternal" checked-children="外部" un-checked-children="内部" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang='ts'>
import { h, ref, reactive, computed, defineExpose } from 'vue'
import { message } from 'ant-design-vue'
import { tableData, del, delAll, addList, editData } from '@/api/MenuManagement';
import { PlusOutlined, ColumnHeightOutlined, VerticalAlignMiddleOutlined, DownOutlined, DeleteOutlined } from '@ant-design/icons-vue'

const addRefs = ref()
// 新增控制
const open = ref(false)
const openChild = ref(false)
// 编辑操控
const openEdit = ref(false)
const treeData = ref([]);
const pro_id = ref('')
const editVal: any = ref([])
// 扩展收缩控制
const fold = ref(false)
// 新增数据
const formState = reactive({
  alwaysShow: '',
  component: '',
  componentName: '',
  hidden: 0,
  hideTab: 0,
  internalOrExternal: false,
  keepAlive: false,
  menuType: 0,
  name: '',
  route: true,
  sortNo: 1,
  url: '',
  redirect: '',
  icon: ''
})
const openGrod = () => {
  open.value = true
  addRefs.value.resetFields();
}
const pushChild = (val: string) => {
  pro_id.value = val
  openChild.value = true
  addRefs.value.resetFields();
}

const handleOk = async () => {
  const data = await addList({
    alwaysShow: formState.alwaysShow,
    component: formState.component,
    componentName: formState.componentName,
    hidden: formState.hidden,
    hideTab: formState.hideTab,
    internalOrExternal: formState.internalOrExternal,
    keepAlive: formState.keepAlive,
    menuType: formState.menuType,
    name: formState.name,
    route: formState.route,
    sortNo: formState.sortNo,
    url: formState.url
  })
  if (data.code === 200) {
    message.success(data.message)
    open.value = false
    getData()
  } else {
    message.error(data.message)
  }
}
const handleChildOk = async () => {
  const data = await addList({
    alwaysShow: formState.alwaysShow,
    component: formState.component,
    componentName: formState.componentName,
    hidden: formState.hidden,
    hideTab: formState.hideTab,
    internalOrExternal: formState.internalOrExternal,
    keepAlive: formState.keepAlive,
    menuType: formState.menuType + 1,
    parentId: pro_id.value,
    name: formState.name,
    route: formState.route,
    sortNo: formState.sortNo,
    url: formState.url
  })
  if (data.code === 200) {
    message.success(data.message)
    openChild.value = false
    getData()
  } else {
    message.error(data.message)
  }
}

// 选中数据
const selected: any = ref([])

const state = reactive<{
  selectedRowKeys: (string | number)[];
  loading: boolean;
}>({
  selectedRowKeys: [], // Check here to configure the default column
  loading: false,
});
const hasSelected = computed(() => state.selectedRowKeys.length > 0);
const start = () => {
  state.loading = true;
  // ajax request after empty completing
  setTimeout(() => {
    state.loading = false;
    state.selectedRowKeys = [];
  }, 1000);
};
const onSelectChange = (selectedRowKeys: (string | number)[]) => {
  state.selectedRowKeys = selectedRowKeys;
  selected.value = selectedRowKeys
};

// 表格
const columns = [
  {
    title: '菜单名称',
    dataIndex: 'title',
    key: 'title',
    width: '30%'
  },
  {
    title: '菜单类型',
    dataIndex: 'menuType',
    key: 'menuType',
    width: '12%',
  },
  {
    title: '图标',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: '组件',
    dataIndex: 'component',
    key: 'component',
  },
  {
    title: '路径',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: '排序',
    dataIndex: 'sortNo',
    key: 'sortNo',
  },
  {
    title: '操作',
    dataIndex: 'edit',
    key: 'edit',
    width: '20%'
  },
];
// 数据
const data = ref([])
// 修改数据
const PutEdit = (val: any) => {
  editVal.value = val
  openEdit.value = true
}

const handleEditOk = async (val: any) => {
  const data = await editData({
    alwaysShow: val.alwaysShow,
    component: val.component,
    componentName: val.componentName,
    hidden: val.hidden,
    hideTab: val.hideTab,
    icon: val.icon,
    id: val.id,
    internalOrExternal: val.internalOrExternal,
    keepAlive: val.keepAlive,
    menuType: val.menuType,
    name: val.name,
    redirect: val.redirect,
    route: val.route,
    sortNo: val.sortNo,
    url: val.url
  })
  if (data.code === 200) {
    message.success(data.message)
    openEdit.value = false
    getData()
  } else {
    message.error(data.message)
  }
}
// 删除
const InDel = async (val: any) => {
  const data = await del(val)
  if (data.code === 200) {
    message.success(data.message)
    getData()
  } else {
    message.error(data.message)
  }
}
// 批量删除
const dels = async () => {
  let ids: any = []
  selected.value.forEach((item: any) => {
    ids.push(item)
  })
  const data: unknown = await delAll(ids)
  if (data.code === 200) {
    message.success(data.message)
    getData()
  } else {
    message.error(data.message)
  }
}

// 初始化数据
const getData = async () => {
  const { result } = await tableData({
    column: '',
    order: '',
    _t: new Date().getTime()
  })
  data.value = result
  result.forEach((item: any, index: number) => {
    treeData.value.push({
      value: item.name,
      label: item.name,
      children: item.children
    })
  })
}
getData()

// 子组件 抛出方法
defineExpose({ data });
</script>

<style lang='scss' scoped ></style>

<style>
::v-deep.ant-drawer-content-wrapper {
  width: auto !important;
}
</style>
