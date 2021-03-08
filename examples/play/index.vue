<template>
  <div class="df">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm home"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-form-item prop="date1">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        -
        <el-form-item prop="date2">
          <el-time-picker
            placeholder="选择时间"
            v-model="ruleForm.date2"
            style="width: 100%;"
          ></el-time-picker>
        </el-form-item>
        <!-- <el-time-picker
          is-range
          v-model="value1"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        >
        </el-time-picker>
        <el-date-picker
          v-model="value1"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
        >
        </el-date-picker> -->
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <hr />
    </el-form>

    <el-form
      :detailMode="true"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm home"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%;"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <hr />
    </el-form>

    <div class="home">
      <el-input v-model="ruleForm.name"></el-input>
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      <el-date-picker
        type="date"
        placeholder="选择日期"
        v-model="ruleForm.date1"
        style="width: 100%;"
      ></el-date-picker>
      <el-time-picker
        placeholder="选择时间"
        v-model="ruleForm.date2"
        style="width: 100%;"
      ></el-time-picker>
      <el-switch v-model="ruleForm.delivery"></el-switch>
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
      <hr />
      <el-checkbox
        v-model="ruleForm.checked"
        label="美食/餐厅线上活动"
        name="type"
      ></el-checkbox>
      <hr />
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="线下场地免费1"></el-radio>
        <el-radio label="线上品牌商赞助2"></el-radio>
        <el-radio label="线下场地免费3"></el-radio>
        <el-radio label="线上品牌商赞助4"></el-radio>
        <el-radio label="线下场地免费5"></el-radio>
      </el-radio-group>

      <el-button type="primary" @click="submitForm('ruleForm')"
        >立即创建</el-button
      >
      <el-button @click="resetForm('ruleForm')">重置</el-button>
      <hr />
    </div>

    <div class="home">
      <el-input :detailMode="true" v-model="ruleForm.name"></el-input>
      <el-input
        :detailMode="true"
        type="textarea"
        v-model="ruleForm.desc"
      ></el-input>
      <el-select
        :detailMode="true"
        v-model="ruleForm.region"
        placeholder="请选择活动区域"
      >
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      <el-date-picker
        :detailMode="true"
        type="date"
        placeholder="选择日期"
        v-model="ruleForm.date1"
        style="width: 100%;"
      ></el-date-picker>
      <el-time-picker
        :detailMode="true"
        placeholder="选择时间"
        v-model="ruleForm.date2"
        style="width: 100%;"
      ></el-time-picker>
      <el-switch v-model="ruleForm.delivery" :detailMode="true"></el-switch>
      <el-checkbox-group v-model="ruleForm.type" :detailMode="true">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>

      <hr />
      <el-checkbox
        v-model="ruleForm.checked"
        label="美食/餐厅线上活动"
        name="type"
        :detailMode="true"
      ></el-checkbox>
      <hr />

      <el-radio-group v-model="ruleForm.resource" :detailMode="true">
        <el-radio label="线下场地免费1"></el-radio>
        <el-radio label="线上品牌商赞助2"></el-radio>
        <el-radio label="线下场地免费3"></el-radio>
        <el-radio label="线上品牌商赞助4"></el-radio>
        <el-radio label="线下场地免费5"></el-radio>
      </el-radio-group>
      <el-button
        type="primary"
        @click="submitForm('ruleForm')"
        :detailMode="true"
        >立即创建</el-button
      >
      <el-button @click="resetForm('ruleForm')" :detailMode="true"
        >重置</el-button
      >
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        checked: true,
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' },
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss">
.home {
  width: 450px;
  margin: 0 50px;
}

.df {
  display: flex;
  flex-wrap: wrap;
}
</style>
