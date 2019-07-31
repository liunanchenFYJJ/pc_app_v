<style lang="scss" scoped>
.layout {
  height: inherit;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.ivu-layout-sider {
  .menu-icon {
    transition: all 0.3s;
  }
  .rotate-icon {
    transform: rotate(90deg) !important;
  }
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  .menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
  }
  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }
}
</style>
<template>
  <div class="layout">
    <Layout :style="{height: 'inherit'}">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1" to="/myorders">
              <Icon type="ios-paper" />我的订单
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-stats" />我的卡票
              </template>
              <MenuItem name="2-1" to="mytickets">我的票</MenuItem>
              <MenuItem name="2-2" to="mycards">我的卡</MenuItem>
            </Submenu>
            <MenuItem name="3" to="mycourt">
              <Icon type="ios-construct" />我的场地
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider
          v-model="isCollapsed"
          ref="sidebar"
          hide-trigger
          collapsible
          :collapsed-width="78"
          :style="{background: '#fff', height: 'calc( 100% )'}"
        >
          <Menu theme="dark" width="auto" active-name="1" :class="menuitemClasses">
            <Icon
              @click.native="collapsedSider"
              :class="rotateIcon"
              :style="{margin: '20px 20px', color: 'white'}"
              type="md-menu"
              size="24"
            ></Icon>
            <MenuItem name="1" to="/">
              <Icon type="md-document" />
              <span>购票</span>
            </MenuItem>
            <MenuItem name="2" to="cardpurchase">
              <Icon type="md-chatbubbles" />
              <span>购卡</span>
            </MenuItem>
            <MenuItem name="3" to="sitereservation">
              <Icon type="md-chatbubbles" />
              <span>场地预定</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 0'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>体育场馆服务</BreadcrumbItem>
            <BreadcrumbItem>{{componentsNow}}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view />
          </Content>
          <Footer>版权所有：大连理工大学地址：中国辽宁省大连市甘井子区凌工路2号邮编：116024服务热线：0411-84707007</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    componentsNow() {
      console.log(this.$route);
      return this.$route.meta.title;
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.sidebar.toggleCollapse();
    }
  }
};
</script>
