<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand to="/">Admin</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item to="/admin/posts"> Post </b-nav-item>
          <b-nav-item to="/admin/users"> Users </b-nav-item>
          <b-nav-item to="/admin/comments"> Comments </b-nav-item>
          <b-nav-item to="/admin/categories"> Categories </b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
    <nuxt />
  </div>
</template>
