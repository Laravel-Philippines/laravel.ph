<template>
    <div>
        <page-header></page-header>
        <template>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <sidebar></sidebar>
                    </div>
                    <div class="col">
                        <router-view></router-view>
                    </div>
                </div>

            </div>
        </template>
        <!-- <page-footer></page-footer> -->
    </div>
</template>
