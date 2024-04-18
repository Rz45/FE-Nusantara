<template>
  <!-- NAVBAR START -->
  <!-- <nav
      class="navbar navbar-expand-md bg-body-transparent static-top mynavbar"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="img/Bridgestone_logo.svg.png"
            alt=""
            width="150"
            height="20"
          />
        </a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Bridgestone
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="navbar-nav ms-auto">
              <a class="nav-link" href="#home">Home</a>
              <a class="nav-link" href="#info">Info</a>
              <a class="nav-link" href="#story">Story</a>
              <a class="nav-link" href="#gallery">Gallery</a>
              <a class="nav-link" href="#rsvp">RSVP</a>
              <a class="nav-link" href="#gifts">Gifts</a>
            </div>
          </div>
        </div>
      </div>
    </nav> -->

  <!-- NAVBAR END -->

  <!-- SIDEBAR START -->

  <div class="wrapper">
    <aside id="sidebar">
      <div class="d-flex">
        <button class="toggle-btn" type="button">
          <i class="bi bi-grid-fill"></i>
        </button>
        <div class="sidebar-logo">
          <a href="#">Bridgestone</a>
        </div>
      </div>
      <ul class="sidebar-nav">
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="bi bi-boxes"></i>
            <span>Barang Masuk</span>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="bi bi-box-arrow-up-right"></i>
            <span>Barang Keluar</span>
          </a>
        </li>
        <!-- <li class="sidebar-item">
                  <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                      data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                      <i class="lni lni-protection"></i>
                      <span>Auth</span>
                  </a>
                  <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                      <li class="sidebar-item">
                          <a href="#" class="sidebar-link">Login</a>
                      </li>
                      <li class="sidebar-item">
                          <a href="#" class="sidebar-link">Register</a>
                      </li>
                  </ul>
              </li> -->
        <!-- <li class="sidebar-item">
                  <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                      data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
                      <i class="lni lni-layout"></i>
                      <span>Multi Level</span>
                  </a>
                  <ul id="multi" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                      <li class="sidebar-item">
                          <a href="#" class="sidebar-link collapsed" data-bs-toggle="collapse"
                              data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                              Two Links
                          </a>
                          <ul id="multi-two" class="sidebar-dropdown list-unstyled collapse">
                              <li class="sidebar-item">
                                  <a href="#" class="sidebar-link">Link 1</a>
                              </li>
                              <li class="sidebar-item">
                                  <a href="#" class="sidebar-link">Link 2</a>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li> -->
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="bi bi-truck"></i>
            <span>Pengiriman</span>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="bi bi-archive"></i>
            <span>Stock Opname</span>
          </a>
        </li>
      </ul>
      <div class="sidebar-footer">
        <a href="#" class="sidebar-link">
          <i class="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </a>
      </div>
    </aside>
    <div class="main p-3">
      <div class="text-center">
        <h1>Main Content</h1>
      </div>
    </div>
  </div>
</template>

<script>
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
</script>
