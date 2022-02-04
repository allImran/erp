<template>
     <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item me-auto"></li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><i class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i><i class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc" data-ticon="disc"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class=" nav-item"><a class="d-flex align-items-center" href="index.html"><i data-feather="home"></i><span class="menu-title text-truncate" data-i18n="Dashboards">Dashboards</span><span class="badge badge-light-warning rounded-pill ms-auto me-1">2</span></a>
                    <ul class="menu-content">
                        <li><a class="d-flex align-items-center" href="dashboard-analytics.html"><i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Analytics">Analytics</span></a>
                        </li>
                        <li class="active"><a class="d-flex align-items-center" href="dashboard-ecommerce.html"><i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="eCommerce">eCommerce</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" navigation-header"><span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span><i data-feather="more-horizontal"></i>
                </li>
                <li class=" nav-item"><a class="d-flex align-items-center" href="app-email.html"><i data-feather="mail"></i><span class="menu-title text-truncate" data-i18n="Email">Email</span></a>
                </li>
                <li class=" nav-item"><a class="d-flex align-items-center" href="#"><i data-feather="file-text"></i><span class="menu-title text-truncate" data-i18n="Invoice">Invoice</span></a>
                    <ul class="menu-content">
                        <li><a class="d-flex align-items-center"><i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="List">List</span></a>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideNavbar'
}
</script>
