  <template>
  <div id="app">
    <router-view/>
    <Modal/>
  </div>
</template>
<script>
import Modal from '@/components/Modal'

export default {
  name: 'App',
  components: {
    Modal
  },
  mounted (){
    console.log('appa')
  }
}
</script>
