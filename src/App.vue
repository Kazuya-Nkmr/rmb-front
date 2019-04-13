  <template>
  <div id="app">
    <router-view/>
    <Modal/>
  </div>
</template>
<style src="@/assets/css/common.css"></style>
<style src="@/assets/css/login.css"></style>
<style src="@/assets/css/top.css"></style>
<style src="@/assets/css/create.css"></style>
<script src="@/assets/lib/jquery-3.4.0.min.js"></script>
<script>
import Modal from '@/components/Modal'

export default {
  name: 'App',
  components: {
    Modal
  },
  mounted() {
    console.log('appa')
  }
}
</script>

