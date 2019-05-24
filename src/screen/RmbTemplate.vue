<template>
  <div>
   <section class="rmb-contents">
      <div class="menu-info">
        <a id="show_" href="#" class="rmb-btn small">Show</a>
        <a id="show_" href="#" class="rmb-btn small">Create</a>
        <a id="show_" href="#" class="rmb-btn small">Battle</a>
        <a id="show_" href="#" class="rmb-btn small">Rank</a>
        <a id="show_" href="#" class="rmb-btn small">Chat</a>
        <a id="show_" href="#" class="rmb-btn small">Log</a>
      </div>
      <div class="">
        <router-view/>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  mounted () {
  }
}
</script>
