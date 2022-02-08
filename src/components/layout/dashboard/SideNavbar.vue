<template>
     <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li style="wi" class="nav-item me-auto">
                    <router-link to="/">
                        <img class="mt-1" width="50" :src="companyLogo" alt="">
                    </router-link>
                </li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><i class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i><i class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc" data-ticon="disc"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <!-- <li class=" nav-item"><a class="d-flex align-items-center" href="index.html"><i data-feather="home"></i><span class="menu-title text-truncate" data-i18n="Dashboards">Dashboards</span><span class="badge badge-light-warning rounded-pill ms-auto me-1">2</span></a>
                    <ul class="menu-content">
                        <li><a class="d-flex align-items-center" href="dashboard-analytics.html"><i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="Analytics">Analytics</span></a>
                        </li>
                        <li class="active"><a class="d-flex align-items-center" href="dashboard-ecommerce.html"><i data-feather="circle"></i><span class="menu-item text-truncate" data-i18n="eCommerce">eCommerce</span></a>
                        </li>
                    </ul>
                </li> -->
                <!-- <li class=" navigation-header"><span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span><i data-feather="more-horizontal"></i>
                </li> -->
                <!-- <li  class="nav-item">
                    <a class="d-flex align-items-center">
                        <i data-feather="mail"></i>
                        <span class="menu-title text-truncate" data-i18n="Email">Email</span>
                    </a>
                </li> -->
                <li v-for="(item, i) in sidebar" :key="i" class=" nav-item">
                    <MenuItem :item="item"/>
                    <!-- <ul class="menu-content">
                        <li v-for="(child, j) in item.child" :key="j">
                            <MenuItem :item="child"/>
                        </li>
                    </ul> -->
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
import {menu} from '@/data/menu'
import MenuItem from '@/components/layout/dashboard/MenuItem'
import {mapGetters} from 'vuex'

export default {
    name: 'SideNavbar',
    components: {
        MenuItem
    },
    data: () => ({
        menu
    }),

    computed: {
        ...mapGetters({
            sidebar: 'company/getSidebar',
            companyLogo: 'company/getCompanyLogo'
        })
    }
}
</script>
