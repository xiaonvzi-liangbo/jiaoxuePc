<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ServiceWorkerUpdatePopup'
})
export default class extends Vue {
  private refreshing = false
  private notificationText = 'New content is available!'
  private refreshButtonText = 'Refresh'
  private registration: ServiceWorkerRegistration | null = null

  created() {
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true })
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return
      this.refreshing = true
      window.location.reload()
    })
  }

  render() {
  }

  private showRefreshUI(e: Event) {
    const h = this.$createElement
    this.registration = (e as CustomEvent).detail
    this.$notify.info({
      title: 'Update available',
      message: h('div', { class: 'sw-update-popup' }, [
        this.notificationText,
        h('br'),
        h('button', {
          on: {
            click: (e: Event) => {
              e.preventDefault()
              this.refreshApp()
            }
          }
        }, this.refreshButtonText)
      ]),
      position: 'bottom-right',
      duration: 0
    })
  }

  private refreshApp() {
    // Protect against missing registration.waiting.
    if (!this.registration || !this.registration.waiting) return
    this.registration.waiting.postMessage('skipWaiting')
  }
}
</script>

<style lang="scss" scoped>
.sw-update-popup > button {
  margin-top: 0.5em;
  padding: 0.25em 1.5em;
}
</style>
