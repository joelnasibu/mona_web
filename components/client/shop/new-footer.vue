<template>
  <v-footer class="d-flex footer pt-4 pb-6">
    <v-container class="px-6" style="max-width: 1000px; margin: 0 auto;">
      <v-row class="footer-row" no-gutters>
        <!-- Contact -->
        <v-col cols="12" sm="6" md="3">
          <h3 class="footer-title">contact</h3>
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
            The Nextgen Mall  <br/>
            Mombasa Rd, Nairobi <br/> Suite 17 & 18
          </p>
        </v-col>

        <!-- About -->
        <v-col cols="12" sm="6" md="3">
          <h3 class="footer-title">about us</h3>
          <div class="privacy-links">
            <NuxtLink to="/About" class="privacy-link">About Nairobi Market</NuxtLink>
            <NuxtLink to="/relations" class="privacy-link">Vendors Relations</NuxtLink>
          </div>
        </v-col>

        <!-- Privacy -->
        <v-col cols="12" sm="6" md="3">
          <h3 class="footer-title">privacy</h3>
          <div class="privacy-links">
            <NuxtLink to="/privacy-policy" class="privacy-link">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="privacy-link">Terms of Service</NuxtLink>
          </div>
        </v-col>

        <!-- Social -->
        <v-col cols="12" sm="6" md="3">
          <h3 class="footer-title">follow us on</h3>
          <div class="social-links mt-2">
            <a href="https://www.instagram.com/mijinitech/" target="_blank" class="social-link"><LucideInstagram size="20" /></a>
            <a href="https://x.com/mijinitech" target="_blank" class="social-link"><LucideTwitter size="20" /></a>
            <a href="https://www.facebook.com/mijinitech/" target="_blank" class="social-link"><LucideFacebook size="20" /></a>
          </div>
        </v-col>
      </v-row>

      <!-- Footer Bottom -->
      <v-divider class="my-4"></v-divider>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <p class="footer-bottom-text">
            © 2025 Nairobi Markets. All rights reserved. Powered by
            <a href="https://mijinitech.com" target="_blank" class="footer-link">MijiniTech</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { 
  LucideMail, 
  LucidePhone, 
  LucideMapPin, 
  LucideInstagram, 
  LucideTwitter, 
  LucideFacebook 
} from "lucide-vue-next"
</script>

<style scoped>
.footer {
  background-color: #032F46;
  color: #e6e3e1;
}

.footer-row {
  margin: 0;
}

.footer-title {
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: #fff;
  position: relative;
  display: inline-block;
}


.footer-title::after {
  content: "";
  display: block;
  width: 30px;
  height: 2px;
  background: rgba(255, 166, 0, 0.671);
  margin-top: 4px;
}


.footer-row > .v-col {
  margin-bottom: 2rem;
}

.footer-text {
  color: #e6e3e1;
  font-size: 0.9rem;
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
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
  font-size: 0.9rem;
  text-decoration: none;
}
.privacy-link:hover {
  color: orange;
}

.social-links {
  display: flex;
  gap: 0.8rem;
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
  margin-top: 10px;
}
.footer-link {
  color: orange;
  text-decoration: none;
}
.footer-link:hover {
  color: #fff;
}

/* Responsive */
@media (max-width: 960px) {
  .footer-title {
    font-size: 0.95rem;
  }
  .footer-row {
    row-gap: 1.5rem;
  }
}
@media (min-width: 960px) {
  .footer-row > .v-col {
    margin-bottom: 0;
  }
}
@media (max-width: 600px) {
  .footer-title {
    font-size: 0.9rem;
  }
  .footer-text {
    font-size: 0.85rem;
  }
}
</style>
