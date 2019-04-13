  <template>
  <div id="app">
    <router-view/>
    <ModalComponent/>
  </div>
</template>
<script>
import ModalComponent from '@/components/Modal'

export default {
  name: 'App',
  components: {
    ModalComponent
  },
  mounted () {
    console.log('a')
  }
}
</script>
<style src="@/assets/css/common.css"></style>
<style src="@/assets/css/login.css"></style>
<style src="@/assets/css/top.css"></style>
<style src="@/assets/css/create.css"></style>
