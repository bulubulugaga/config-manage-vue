const Layout = () => import("views/layout/Layout.vue");
const _import = path => import(`views/admin/${path}`)
export const adminRoutes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Layout,
    meta: {
      name_str: "管理员"
    },
    redirect: {
      name: "InstitutionList"
    },
    children: [{
      path: "institution/list",
      name: "InstitutionList",
      component: () => _import("institution/list.vue"),
      meta: {
        name_str: "机构管理"
      }
    }, {
      path: "institution/detail",
      name: "InstitutionDetail",
      component: () => _import("institution/detail.vue"),
      meta: {
        name_str: "机构管理详情"
      }
    }]
  }
]
