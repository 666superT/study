<template>
  <div>
    <i-table :tableColumn="tableColumn" :tableData="tableData" index>
      <template v-slot:btn="data">
        <el-button size="mini" type="primary">添加</el-button>
        <el-button size="mini" type="warning">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
        <b>{{ data }}</b>
      </template>
    </i-table>
  </div>
</template>

<script>
import ITable from '../components/ITable'

export default {
  name: 'tableViewComponent',
  components: {
    ITable
  },
  data() {
    return {
      tableData: [
        {
          name: '张三',
          avatarUrl:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          sex: '男',
          car: 1
        }
      ],
      tableColumn: [
        {
          type: 'text',
          label: '姓名',
          prop: 'name'
        },
        {
          type: 'avatar',
          label: '头像',
          prop: 'avatarUrl',
          size: 50,
          shape: 'square'
        },
        {
          type: 'switch',
          label: '状态',
          prop: 'status',
          callback: (val) => {
            console.log(val)
          }
        },
        {
          type: 'tag',
          label: '交通工具',
          prop: 'car',
          callback: (val) => {
            let obj
            switch (val) {
              case 1:
                obj = { title: '汽车', type: 'primary', effect: 'dark' }
                break
              case 2:
                obj = { title: '火车', type: 'warning' }
                break
              case 3:
                obj = { title: '飞机', type: 'danger' }
                break
            }
            return obj
          }
        },
        {
          type: 'slot',
          label: '操作',
          slotName: 'btn'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
