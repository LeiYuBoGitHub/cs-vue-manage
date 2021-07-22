<template>
  <div>
    <el-row class="card-panel-col">
      <el-col :span="24">
        <el-card class="box-card">
          <div class="text item">
            <el-form :inline="true" class="demo-form-inline">
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="card-panel-col">
      <el-col :span="24">
        <el-card class="box-card">
          <div>
            <el-table :data="blowTableList" border style="width: 100%">
              <el-table-column prop="mapping" label="映射码"> </el-table-column>
              <el-table-column prop="deviceCode" label="姓名">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
            <el-pagination
              background
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="10"
              :total="total"
            >
            </el-pagination>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { loadingBlowTable } from "@/http/api/serviceApi";
import {onMounted, reactive, toRefs} from 'vue'
export default {
  setup () {
    const state = reactive({
      blowTableList: [],
      total: 0,
      currentPage: 1,
      param: {
        userId: 73,
        page: 0
      },
    });
    // 远程加载数据
    loadingBlowTable(state.param).then((res) => {
      console.log(state.value);
      console.log(state.param);
      console.log(res.data);
      state.blowTableList = res.data
      state.total = res.total // 可以 但只能首次加载
      // state.blowTableList.value = res.data 不行
      // state.value blowTableList = res.data 不行 
      // console.log("111:" + JSON.stringify(res.data));
      // state.value.blowTableList = res.data;
      // console.log("222:" + JSON.stringify(state.blowTableList));
      // state.value.total  = res.total;
    });
    // 用户点击调用加载
    function handleCurrentChange(val) {
      console.log(val)
      state.param.page = val
      console.log(state.param.page)
      loadingBlowTable(state.param)
    }
    onMounted(() => {
      // state.blowTableList = props.datas.blowTableList
      // console.log("3...onMounted()组件挂在到页面之后执行");
    });
    return {
      ...toRefs(state),
      handleCurrentChange,
    };
  }
};
</script>

<style scoped>
.card-panel-col {
  margin-bottom: 30px;
}
</style>