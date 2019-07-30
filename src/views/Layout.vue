<style scoped>
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
</style>
<template>
  <div class="layout">
    <Layout :style="{height: 'inherit'}">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff', height: 'calc( 100% )'}">
          <Menu theme="dark" width="auto" active-name="1">
            <MenuGroup title="应用菜单">
              <MenuItem name="1" to="/">
                <Icon type="md-document" />购票
              </MenuItem>
              <MenuItem name="2" to="CardPurchase">
                <Icon type="md-chatbubbles" />购卡
              </MenuItem>
              <MenuItem name="3" to="SiteReservation">
                <Icon type="md-chatbubbles" />场地预定
              </MenuItem>
            </MenuGroup>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 0'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>体育场馆服务</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view />
          </Content>
          <Footer>
            版权所有：大连理工大学地址：中国辽宁省大连市甘井子区凌工路2号邮编：116024服务热线：0411-84707007
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {};
</script>
