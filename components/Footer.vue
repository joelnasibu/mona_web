<template>
<v-footer class="footer pt-8 pb-6">
  <v-container class="px-16" style="max-width: 1200px; margin: 0 auto;">

    <v-row justify="space-between" align="start" class="text-left" style="gap: 0.25rem;">
      <!-- Contact -->
      <v-col cols="12" md="3">
        <h3 class="footer-title">Contact</h3>
        <p class="footer-text">
          <LucideMail class="footer-icon" size="20" /> 
          info@nairobi-markets.com
        </p>
        <p class="footer-text">
          <LucidePhone class="footer-icon" size="20" /> 
          +254 10 7836370
        </p>
        <p class="footer-text">
          <LucideMapPin class="footer-icon" size="20" /> 
          The Nextgen Mall Mombasa Road, Nairobi, <br/> Suite 17 & 18
        </p>
      </v-col>

      <!-- About -->
      <v-col cols="12" md="3">
        <h3 class="footer-title">About</h3>
        <p class="footer-text">
          Nairobi Markets connects you with the city's vibrant markets, cultural trails, and unique shopping experiences. Explore, shop, and enjoy authentic Kenyan life.
        </p>
      </v-col>

      <!-- Privacy -->
      <v-col cols="12" md="3">
        <h3 class="footer-title">Privacy</h3>
        <div class="privacy-links">
          <NuxtLink to="/privacy-policy" class="privacy-link">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="privacy-link">Terms of Service</NuxtLink>
        </div>
      </v-col>

      <!-- Social -->
      <v-col cols="12" md="3">
       
        <div class="social-links mt-4">
          <a href="#" target="_blank" class="social-link"><LucideInstagram size="20" /></a>
          <a href="#" target="_blank" class="social-link"><LucideTwitter size="20" /></a>
          <a href="#" target="_blank" class="social-link"><LucideFacebook size="20" /></a>
        </div>
      </v-col>
    </v-row>

    <!-- Footer Bottom -->
    <v-divider class="my-6"></v-divider>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <p class="footer-bottom-text">
          © 2025 Nairobi Markets. All rights reserved. Designed by
          <a href="https://mijinitech.com" target="_blank" class="footer-link">MijiniTech</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</v-footer>


</template>

<script setup>
import { LucideMail, LucidePhone, LucideMapPin, LucideInstagram, LucideTwitter, LucideFacebook } from "lucide-vue-next"
</script>

<style scoped>
.footer {
  background-color: #032F46;
  color: #e6e3e1;
}
.footer-title {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.footer-text {
  color: #e6e3e1;
  font-size: 0.9rem;
  line-height: 1.5;
  display: flex;
  align-items: flex-start; /* Align multi-line text properly with icon */
  gap: 0.8rem; 
    margin-bottom: 0.6rem;           /* Space between icon and text */
}

.footer-icon {
  width: 20px;
  height: 20px;
  color: orange;          
  flex-shrink: 0;         
}

.privacy-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.privacy-link {
  color: #fff;
  text-decoration: none;
}
.privacy-link:hover {
  color: orange;
}
.social-links {
  display: flex;
  gap: 1rem;
}
.social-link {
  color: #fff;
  font-size: 1.2rem;
}
.social-link:hover {
  color: orange;
}
.footer-bottom-text {
  font-size: 0.8rem;
  color: #e6e3e1;
  margin-top: 12px;
}
.footer-link {
  color: orange;
  text-decoration: none;
}
.footer-link:hover {
  color: #fff;
}
</style>
