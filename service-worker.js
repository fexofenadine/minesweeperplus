//the old minesweeper worker lived here, this retires it and its cache
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await caches.delete('minesweeper')
      await self.registration.unregister()
      const tabs = await self.clients.matchAll({ type: 'window' })
      tabs.forEach((tab) => tab.navigate(tab.url))
    })(),
  )
})
