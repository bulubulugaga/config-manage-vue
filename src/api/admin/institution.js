/*
 * @Author: liu
 * @Date: 2022-01-05 16:26:59
 * @LastEditTime: 2022-01-05 16:33:17
 * @Description: 机构管理api
 */
import { axios } from 'api/request'

/**
 * @description 获取机构列表
 */
export function getInstitutionList(params) {
  return axios({
    url: '/institution/list',
    method: 'get',
    params
  });
}

