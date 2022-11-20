// 管理菜单相关数据
export default {
    state: {
        isCollapse: false  // 控制菜单展开与收起
    },
    mutations: {
        collapseMenu (state) {
            state.isCollapse = !state.isCollapse;
        }
    }
}