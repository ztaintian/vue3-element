<template>
  <div>
    {{ name }} {{ counter }}
    <p @click="changeName">改变</p>
    <p @click="changeAge">改变年龄：</p>
    年龄：{{ age }}
    <el-table :data="tableData" style="width: 100%">

      <el-table-column width="55">
        <template #header>
          <el-checkbox v-model="allCheckFlag"></el-checkbox>
        </template>
        <template #default="scope">
          <el-checkbox v-model="scope.row.flag"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="创建日期" width="180">
        <el-table-column prop="date1" label="日期" width="180">
          <template #default="scope">
            {{ scope.row.date }}{{ scope.row.date1 }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-pagination @current-change="currentChange" background layout="prev, pager, next" :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import {
    defineComponent,
    onMounted,
    reactive,
    ref,
    toRefs
  } from "vue";
  export default {
    props: {
      test: {
        type: Object,
        default: () => {
          return {
            name: "d"
          };
        },
      },
    },
    setup(props, context) {
      console.log("context", context);
      const counter = ref(0);
      console.log("props===>", props);
      var state = reactive({
        allCheckFlag: false,
        total: 0,
        age: 0,
        changeAge() {
          state.age = state.age + 7;
        },
        allData: [],
        tableData: [],
      });
      onMounted(() => {
        for (var i = 0; i < 100; i++) {
          state.allData.push({
            date: i,
            date1: "",
            flag: false,
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          })
        }
        state.total = state.allData.length
        state.tableData.push(...state.allData.slice(0, 10))
        state.tableData[0].flag = true;
        console.log(state.allData)
      })

      function currentChange(val) {
        console.log('val', val)
        state.tableData = [];
        state.tableData.push(...state.allData.slice(10 * (val - 1), 10 * val))
      }

      function handleSelectionChange(val) {
        console.log('valvalval', val)
      }

      function objectSpanMethod({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        console.log(columnIndex, rowIndex)
        if (columnIndex === 1) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1,
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0,
            };
          }
        }
      }
      const {
        name
      } = toRefs(props.test);
      // function changeName() {
      //   console.log(33131);
      //   counter.value++;
      //   name.value = 'dada'
      //   // state.age++
      // }
      return {
        ...toRefs(state),
        // changeName,
        counter,
        name,
        currentChange,
        objectSpanMethod,
        handleSelectionChange
      };
    },
  };
</script>

<style scoped></style>