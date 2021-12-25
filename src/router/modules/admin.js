const Layout = () => import("views/layout/Layout.vue");
const _import = path => import(`views/admin/${path}`)
export const adminRoutes = [
  {
    path: '/institution',
    name: 'Institution',
    component: Layout,
    meta: {
      name_str: "机构管理"
    },
    redirect: {
      name: "InstitutionList"
    },
    children: [{
      path: "list",
      name: "InstitutionList",
      component: () => _import("institution/list.vue"),
      meta: {
        name_str: "机构管理"
      }
    }]
  }
]