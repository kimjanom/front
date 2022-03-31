<template>
	<div class="workSpace">
		<b-navbar toggleable type="dark" variant="dark">
			<b-navbar-brand href="#">
				<img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
				고양이
			</b-navbar-brand>

			<!-- Right aligned nav items -->
			<b-navbar-nav style="display: inline-block" class="ml-auto">
				<b-nav-form >
					<b-form-input style="float: left"  size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
					<b-button style="float: right"   size="sm" class="my-2 my-sm-1" type="submit">Search</b-button>
				</b-nav-form>
			</b-navbar-nav>
			<b-navbar-toggle target="navbar-toggle-collapse">
				<template #default="{ expanded }">
					<b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
					<b-icon v-else icon="chevron-bar-down"></b-icon>
				</template>
			</b-navbar-toggle>

			<b-collapse id="navbar-toggle-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item href="#">Link 1</b-nav-item>
					<b-nav-item href="#">Link 2</b-nav-item>
					<b-nav-item href="#" disabled>Disabled</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<image-test/>
	</div>
</template>
<style>
	/*.mr-sm-2{*/
	/*	float: right;*/
	/*}*/
	/*.my-sm-1{*/

	/*	float:right;*/
	/*	margin-top: 0.5rem;*/
	/*	margin-bottom: 0.5rem;*/
	/*}*/
</style>
<script lang="ts">
    // @ is an alias to /src
    import Vue from 'vue';
    import imageTest from "../components/imageTest.vue";

    export default Vue.extend({
        name: 'WorkSpace',
        components: {
            imageTest
        },
        data() {
            return {}
        },

    });
</script>
