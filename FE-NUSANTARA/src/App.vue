<template>
  <div id="app" class="">
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-danger">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span class="fs-5 d-none d-sm-inline">BRIDGESTONE</span>
            </a>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li class="nav-item">
                <router-link to="/dashboard" class="nav-link align-middle px-0 text-white"> <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </router-link>
              </li>
              <li>
                <a href="#submenu1" data-bs-toggle="collapse " class="nav-link px-0 align-middle text-white"> <i class="fs-4 bi-boxes"></i> <span class="ms-1 d-none d-sm-inline">Barang Masuk</span> </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0 align-middle text-white"> <i class="fs-4 bi-box-arrow-up-right"></i> <span class="ms-1 d-none d-sm-inline">Barang Keluar</span></a>
              </li>
              <li>
                <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white"> <i class="fs-4 bi bi-truck"></i> <span class="ms-1 d-none d-sm-inline">Order</span></a>
                <!-- <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                  <li class="w-100">
                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                  </li>
                </ul> -->
              </li>
              <li>
                <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white"> <i class="fs-4 bi bi-archive"></i> <span class="ms-1 d-none d-sm-inline">Stock Opname</span> </a>
              </li>
            </ul>
            <hr />
            <div class="pb-4">
              <a href="#" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                <i class="bi bi-box-arrow-right"></i>
                <span class="d-none d-sm-inline mx-1">Logout</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
