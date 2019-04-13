<template>
  <section class="modal-area">
    <section id="modal-login" class="rmb-modal" style="display:none">
      <button data-izi-modal-close class="icon-close">×</button>
      <header>
        <!-- Login -->
      </header>
      <div class="modal-main-contents">
        <section class="hide">
          <form id="login-form" action="top.html" method="post">
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <button
              class="rmb-btn half-lineup rmb-cancel"
              data-izi-modal-close
              data-izi-modal-transition-out="bounceOutDown"
            >Cancel</button>
            <button name="Login" type="submit" class="rmb-btn half-lineup next">Login</button>
          </form>
        </section>
      </div>
    </section>
    <section id="modal-adduser" class="rmb-modal">
      <button data-izi-modal-close class="icon-close">×</button>
      <header>
        <!-- Add User -->
      </header>
      <div class="modal-main-contents">
        <section>
          <input type="text" placeholder="Username">
          <input type="password" placeholder="Password">
          <input type="text" placeholder="Email">
          <form action method="post">
            <button
              class="rmb-btn half-lineup cancel"
              data-izi-modal-close
              data-izi-modal-transition-out="bounceOutDown"
            >Cancel</button>
            <button class="rmb-btn half-lineup next">Create Account</button>
          </form>
        </section>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'Modal',
  method: {
    load : function() {
      console.log('abc')
      $('#modal-login').iziModal()
      $('#modal-adduser').iziModal()
      $(document).on('click', '.modal-login-trigger', function(event) {
        event.preventDefault()
        $('#modal-login').iziModal('open')
      })
      $(document).on('lick', '.modal-adduser-trigger', function(event) {
        event.preventDefault()
        $('#modal-adduser').iziModal('open')
      })
    }
  }
}
</script>
<script src='@/assets/lib/jquery-3.4.0.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="@/assets/lib/iziModal.min.css"></link>
<script src="@/assets/lib/iziModal.min.js" type="text/javascript"></script>
