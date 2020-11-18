<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant= "info"></b-navbar>
            <b-navbar-brand href="#">Post Your Story Here</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item href="#">Information</b-nav-item>
                <b-nav-item to="/board/free">Thoughts</b-nav-item>
                <b-nav-item href="#">Q and A</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {};
    }
};
</script>