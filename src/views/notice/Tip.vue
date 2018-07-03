<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 通知</el-breadcrumb-item>
                <el-breadcrumb-item>信息提示框</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>常用于展示鼠标 hover 时的提示信息~~</h2><hr>
            	<div class="box">
				  <div class="top">
				    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
				      <el-button>上左</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
				      <el-button>上边</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
				    	<div slot="content">可以采用slot分发内容<br/>试试看，很好用</div>
				      <el-button>上右</el-button>
				    </el-tooltip>
				  </div>
				  <div class="left">
				    <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
				      <el-button>左上</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
				      <el-button>左边</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
				      <el-button>左下</el-button>
				    </el-tooltip>
				  </div>

				  <div class="right">
				    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
				      <el-button>右上</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
				      <el-button>右边</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
				      <el-button>右下</el-button>
				    </el-tooltip>
				  </div>
				  <div class="bottom">
				    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
				      <el-button>下左</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
				      <el-button>下边</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
				      <el-button>下右</el-button>
				    </el-tooltip>
				  </div>
				</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		
	}
</script>

<style type="text/css" scoped>
	.box {
	    width: 400px;
	    margin-top: 20px;
	    padding-left: 20px;
	}
    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
	
</style>