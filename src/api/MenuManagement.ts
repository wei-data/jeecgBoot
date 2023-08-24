import { http } from '../utils/Axios'
// 列表
export const tableData = (data: any) => {
  return http.request({
    method: "GET",
    url: '/sys/permission/list',
    params: data
  })
}
// 查询
export const query = (data: any) => {
  return http.request({
    method: "GET",
    url: '/sys/permission/list',
    params: data
  })
}
// 删除
export const del = (data: any) => {
  return http.request({
    method: "DELETE",
    url: `/sys/permission/delete?id=${data}`,
  })
}
// 批量删除
export const delAll = (data: any) => {
  return http.request({
    method: "DELETE",
    url: `/sys/permission/deleteBatch?ids=${data}`,
  })
}
// 添加
export const addList = (data: any) => {
  return http.request({
    method: "post",
    url: `/sys/permission/add`,
    data
  })
}

// 添加子级
export const addChild = (data: any) => {
  return http.request({
    method: "post",
    url: `/sys/permission/add`,
    data
  })
}
// 修改
export const editData = (data: any) => {
  return http.request({
    method: "post",
    url: `/sys/permission/edit`,
    data
  })
}
