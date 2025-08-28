<script setup>
import { ref, onMounted } from 'vue'

const mapContainer = ref(null)

onMounted(async () => {
  const L = (await import('leaflet')).default
  await import('leaflet/dist/leaflet.css')
  await import('leaflet.markercluster')
  await import('leaflet.markercluster/dist/MarkerCluster.css')
  await import('leaflet.markercluster/dist/MarkerCluster.Default.css')

  const markets = [
    { name: 'Adams Market',coords: [-1.30263, 36.7798] },
    { name: 'Gikomba Market', coords: [-1.2863, 36.8415] },
    { name: 'Toi Market', coords: [-1.2990, 36.7900] },
    { name: 'City Market', coords: [-1.2833, 36.8170] },
    { name: 'Kariokor Market', coords: [-1.28123, 36.83797] },
    { name: 'Maasai Market', coords: [-1.2820, 36.8140] },
    { name: 'Village Market', coords: [-1.2040, 36.8690] },
    { name: 'Nairobi Farmers Market', coords: [-1.2082228, 36.8326568] }

  ]

  if (mapContainer.value._leaflet_id) {
    mapContainer.value._leaflet_id = null
  }

  const marketIcon = L.divIcon({
    className: "custom-marker",
    html: `
      <div class="pulse-wrapper">
        <span class="pulse"></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
          <path fill="#d60000" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"/>
        </svg>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35]
  })

  const map = L.map(mapContainer.value).setView([-1.286389, 36.817223], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  const markers = L.markerClusterGroup({
    maxClusterRadius: 50,
    showCoverageOnHover: false,
    spiderfyOnEveryZoom: true,
    animate: false
  })

  markets.forEach(market => {
    const marker = L.marker(market.coords, { icon: marketIcon })
    marker.bindPopup(`<strong>${market.name}</strong>`)
    markers.addLayer(marker)
  })

  map.addLayer(markers)
  window.addEventListener('resize', () => map.invalidateSize())
})
</script>

<template>
  <section class="hero-section">
    <div ref="mapContainer" class="map-container"></div>
  </section>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 500px;
}

.pulse-wrapper {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(214, 0, 0, 0.4);
  transform: translate(-50%, -50%);
  animation: pulse 2s infinite;
  pointer-events: none;
  z-index: 1;
  will-change: transform, opacity;
}

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
  70% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
}
</style>
