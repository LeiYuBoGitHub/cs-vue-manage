<template>
<div class="content">
  <el-container>
    <el-menu 
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <router-link to="/dashboard">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <template #title>仪表盘</template>
        </el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-location"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/blow"><el-menu-item index="1-1">吹风机</el-menu-item></router-link>
          <el-menu-item index="1-2">开水器</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <el-container>
      <el-header class="bg-color">
          <h3 class="title">管理系统</h3>
      </el-header>
      <el-main>
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    loadingCustomerComponent: function () {
      console.log('渲染客户组件被点击!')
      this.contentComponent = 'customer-table'
    },
    handleSelect: function (key, keyPath) {
      console.log(key, keyPath)
    }

  }
}
</script>

<style>
a {
    text-decoration: none;
}

.title {
  text-align: center;
  color: #fff;
}
.bg-color {
  background-color: #323259;
  background: linear-gradient(90deg,#60b2fb,#6485f6);
  color: #ffffff;
  text-align: center;
}
</style>
