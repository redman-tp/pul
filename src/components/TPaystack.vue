<template>
  <q-btn @click="initializeNewPayment()" :label="!noLabel ? label : null">
    <q-tooltip v-if="tooltip">
      <q-icon v-if="tooltipIcon" :name="tooltipIcon" /> {{ tooltip }}
    </q-tooltip>
  </q-btn>
</template>

<script>
import PaystackPop from '@paystack/inline-js'
export default {
  name: 'TPaystack',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    label: {
      type: String,
      default: 'Pay Now',
    },
    tooltip: {
      type: String,
      default: null,
    },
    tooltipIcon: {
      type: String,
      default: null,
    },
    noLabel: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    data: {
      handler(data) {},
    },
  },
  setup() {
    return {}
  },
  created() {},
  methods: {
    initializeNewPayment() {
      this.$q.loading.show()

      this.$api
        .post(`/payment/initialize`, {
          ...this.data,
          inline: this.$q.platform.is.mobile,
        })
        .then(({ data }) => {
          if (this.$q.platform.is.mobile) {
            this.$q.loading.hide()
            return this.paystack(data.data.amount, data.data.payload.data.reference).openIframe()
          } else {
            setTimeout((e) => {
              this.$q.loading.hide()
              window.location.href = data.data.payload.data.authorization_url
            }, 10000)
          }
        })
        .catch((e) => {
          this.$q.loading.hide()
          let error = this.$plugins.reader.error(e)
          this.$helper.notify(error.message || error, error.status || 'error')
        })
    },
    paystack(amount = 0, ref = null) {
      let helper = this.$helper
      let router = this.$router
      const api = this.$api
      return PaystackPop.setup({
        key: this.$boot.settings.paystack_public_key, // Replace with your public key
        email: this.$user.email,
        amount: amount * 100,
        ref: ref,
        label: this.$user.fullname,
        onClose: function () {
          helper.notify('Transaction cancelled.', 'error')
          api.delete('/payment/terminate', {
            data: { reference: ref },
          })
        },
        callback: function (response) {
          router.push({
            name: 'user.payment.verify.ref',
            params: {
              ref: response.reference,
              reference: response.reference,
            },
          })
        },
      })
    },
  },
}
</script>
