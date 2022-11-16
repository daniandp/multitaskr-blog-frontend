<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand to="/">Blog</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item to="/admin"> Admin </b-nav-item>
          <b-nav-item to="/login"> Login </b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
    <nuxt />
  </div>
</template>
