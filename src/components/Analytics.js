import { useEffect } from 'preact/compat'

const Analytics = ({ facebookPixelId, googleAnalyticsId }) => {
  useEffect(() => {
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

    if (!facebookPixelId) return

    window.fbq('init', facebookPixelId)
    window.fbq('track', 'PageView')
  }, [])

  useEffect(() => {
    ;(function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r
      ;(i[r] =
        i[r] ||
        function() {
          ;(i[r].q = i[r].q || []).push(arguments)
        }),
        (i[r].l = 1 * new Date())
      ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

    if (!googleAnalyticsId) return

    window.ga('create', googleAnalyticsId, 'auto')
    window.ga('send', 'pageview')
  }, [])
}

export default Analytics
