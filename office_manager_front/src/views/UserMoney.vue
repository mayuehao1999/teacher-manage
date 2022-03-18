<template>
      <div class="hello">
		<h1>员工工资管理</h1>
		<el-row class="table-grid-content">
			<el-col :span="18" class="grid">
				<el-input v-model="input" placeholder="请输入搜索内容"></el-input>
			</el-col>
			<el-col :span="3" class="grid" :gutter="1">
				<el-button type="success" icon="el-icon-search">搜索</el-button>
			</el-col>
			<el-col :span="2" class="grid" :gutter="15">
				<el-button type="primary" @click="addMembers()">增加</el-button>
			</el-col>
		</el-row>
		<el-table :data="tables" :stripe="true" :border="true" width="100%">
			<el-table-column label="ID" prop="id1"></el-table-column>
			<el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="手机" prop="phone"></el-table-column>
      <el-table-column label="工资" prop="wages"></el-table-column>
      <el-table-column label="职位" prop="role"></el-table-column>
			<el-table-column label="地址" prop="address"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="primary" @click="modifyData(scope.$index, scope.row)">修改</el-button>
					<el-button type="danger" @click="deleteData(scope.$index,tableData)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog :visible.sync="centerDialogVisible">
			<el-form :model="editForm">
				<el-form-item label="ID" >
					<el-input v-model="editForm.id1"></el-input>
				</el-form-item>
				<el-form-item label="姓名">
					<el-input v-model="editForm.name"></el-input>
				</el-form-item>
        <el-form-item label="手机" >
					<el-input v-model="editForm.phone"></el-input>
				</el-form-item>
        <el-form-item label="工资" >
					<el-input v-model="editForm.wages"></el-input>
				</el-form-item>
        <el-form-item label="职位" >
					<el-input v-model="editForm.role"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="editForm.address"></el-input>
				</el-form-item>
			</el-form>
			<div>
				<el-button @click="closeDialog()">取消</el-button>
				<el-button type="primary" @click="sumbitEditRow()">确定</el-button>
			</div>
		</el-dialog>
		<el-dialog :visible.sync="isAddMembers">
			<el-form :model="addForm">
					<el-form-item label="ID" >
					<el-input v-model="editForm.id1"></el-input>
				</el-form-item>
				<el-form-item label="姓名">
					<el-input v-model="editForm.name"></el-input>
				</el-form-item>
        <el-form-item label="手机" >
					<el-input v-model="editForm.phone"></el-input>
				</el-form-item>
        <el-form-item label="工资" >
					<el-input v-model="editForm.wages"></el-input>
				</el-form-item>
        <el-form-item label="职位" >
					<el-input v-model="editForm.role"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="editForm.address"></el-input>
				</el-form-item>
			</el-form>
			<div>
				<el-button @click="closeDialog()">取消</el-button>
				<el-button type="primary" @click="sumbitAddRow()">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
var _index;
export default {
  name: "UserMoney",
  
    data() {
           return {
				centerDialogVisible: false,
				isAddMembers: false,
				editForm: [],
				addForm: [],
				searchData: '',
				input: '',
				id:'',
				tableData: [{
            id1:1,
						name: 'admin',
            phone:'14736573187',
            wages:'8000',
            role:'校长',
						address: '上海市'
					}, {
						id1:2,
						name: '帅哥',
            phone:'14736571111',
            wages:'3600',
            role:'教师',
						address: '上海市'
					}, {
						id1:3,
						name: '王小虎',
            phone:'14736111187',
            wages:'3600',
            role:'教师',
						address: '重庆'
					}, {
						id1:4,
						name: '王大虎',
            phone:'11111573187',
            wages:'5000',
            role:'年级组长',
						address: '北京'
					}, {
						id1:5,
						name: '王二狗',
            phone:'14736574139',
            wages:'3000',
            role:'教师',
						address: '成都'
					}

				]
			}
		},
		methods: {
			deleteData(index, row) {
				this.tableData.splice(index, 1)
				console.log("进行了删除操作")
				console.log("index的值是：" + index)
				console.log("row的值是：", row)
			},
			modifyData(index, row) {
				this.centerDialogVisible = true
				this.editForm = Object.assign({}, row); //重置对象
				_index = index;
				console.log("index的值：" + index)
				console.log("_index的值：" + _index)
				console.log("row的值是：", this.editForm) //代表选择的这一行的数据
			},
			sumbitEditRow() {
				var editData = _index;
				console.log("editData的值" + this.editForm)
        this.tableData[editData].id1 = this.editForm.id1;
				this.tableData[editData].name = this.editForm.name;
				this.tableData[editData].wages = this.editForm.wages;
        this.tableData[editData].phone = this.editForm.phone;
        this.tableData[editData].role = this.editForm.role;
				this.tableData[editData].address = this.editForm.address;
				this.centerDialogVisible = false;
				console.log("数据：" + this.editForm.date)
				console.log("对象数组", this.tableData)
			},
			closeDialog() {
				this.centerDialogVisible = false
				this.isAddMembers = false
				console.log("editfrom", this.editForm)
				console.log("addfrom", this.addForm)

			},
			addMembers() {
				this.isAddMembers = true
				this.addForm = {
                    id1: '',
					name: '',
					phone: '',
                    wages:'',
                    role:'',
					address: ''
				}
			},
			sumbitAddRow() {
				this.tableData = this.tableData || []
				console.log("表格是:" + this.tableData)
				this.tableData.push({
          id1:this.addForm.id1,
					name: this.addForm.name,
          phone: this.addForm.phone,
					wages: this.addForm.wages,
          role:this.addForm.role,
					address: this.addForm.address
				})
          this.isAddMembers = false;
			}
		},
		computed: {
			tables() {
				const input = this.input
				if (input) {
					console.log("input输入的搜索内容：" + this.input)
					return this.tableData.filter(data => {
						console.log("object:" + Object.keys(data))
						return Object.keys(data).some(key => {
							return String(data[key]).toLowerCase().indexOf(input) > -1
						})
					})
				}
				return this.tableData
			}
        }
}
</script>
<style scoped>
.table-grid-content {
		border-radius: 4px;
		height: 50 px;
		background: #ebeef5;
		padding: 10px;
	}
</style>