import { http } from '../utils/Axios'

export const allocationList = (data: any) => {
  return http.request({
    method: 'get',
    url: 'online/cgreport/head/list',
    params: data
  })
}

export const allocationAdd = (data: any) => {
  return http.request({
    method: 'post',
    url: 'online/cgreport/head/add',
    data: data
  })
}
export const allocationQuery = (data: any) => {
  return http.request({
    method: 'get',
    url: 'online/cgreport/head/list',
    params: data
  })
}

export const allocationDels = (data: any) => {
  return http.request({
    method: `DELETE`,
    url: `online/cgreport/head/deleteBatch?ids=${data}`,
  })
}

export const allocationDel = (data: any) => {
  return http.request({
    method: 'DELETE',
    url: `online/cgreport/head/delete?id=${data}`
  })
}
