<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="邮箱" prop="email" label-width="300px">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width="300px">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item label-width="300px">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "@/api/user";

export default {
  data() {
    return {
      ruleForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱!", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [{ required: true, message: "请输入密码!", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          api
            .login(this.ruleForm).then((res) => {
              console.log(res.data.data);
              this.$message.success("登录成功");
              this.$store.dispatch("setUserInfo", res.data.data);
              this.$router.push({
                name: "Home",
              });
            })
            .catch((error) => {
              this.$message.error(error);
            });
            return true
        } else {
          this.$message.error("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 50%;
}
</style>