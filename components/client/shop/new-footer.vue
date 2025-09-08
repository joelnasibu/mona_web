<template>
  <v-footer class="py-4" color="primary-dark">
    <CoreMidScreenLayout>
      <v-container class="pa-0" fluid>
        <v-row class="footer-row" no-gutters>
          <!-- Contact -->
          <v-col cols="12" sm="6" md="3">
            <h3 class="footer-title">contact</h3>
            <p class="footer-text">
              <LucideMail class="footer-icon" size="15" />
              info@nairobi-markets.com
            </p>
            <p class="footer-text">
              <LucidePhone class="footer-icon" size="15" />
              +254 10 7836370
            </p>
            <p class="footer-text">
              <LucideMapPin class="footer-icon" size="15" />
              The Nextgen Mall <br />
              Mombasa Rd, Nairobi <br />
              Suite 17 & 18
            </p>
          </v-col>

          <!-- About -->
          <v-col cols="12" sm="6" md="3">
            <h3 class="footer-title">about us</h3>
            <div class="privacy-links">
              <NuxtLink to="/About" class="privacy-link"
                >About Nairobi Market</NuxtLink
              >
              <NuxtLink to="/relations" class="privacy-link"
                >Vendors Relations</NuxtLink
              >
            </div>
          </v-col>

          <!-- Privacy -->
          <v-col cols="12" sm="6" md="3">
            <h3 class="footer-title">privacy</h3>
            <div class="privacy-links">
              <NuxtLink to="/privacy-policy" class="privacy-link"
                >Privacy Policy</NuxtLink
              >
              <NuxtLink to="/terms" class="privacy-link"
                >Terms of Service</NuxtLink
              >
            </div>
          </v-col>

          <!-- Social -->
          <v-col cols="12" sm="6" md="3">
            <h3 class="footer-title">follow us on</h3>
            <div class="social-links mt-2">
              <a
                href="https://www.instagram.com/mijinitech/"
                target="_blank"
                class="social-link"
                ><LucideInstagram size="20"
              /></a>
              <a
                href="https://x.com/mijinitech"
                target="_blank"
                class="social-link"
                ><LucideTwitter size="20"
              /></a>
              <a
                href="https://www.facebook.com/mijinitech/"
                target="_blank"
                class="social-link"
                ><LucideFacebook size="20"
              /></a>
            </div>
          </v-col>
        </v-row>

        <!-- Footer Bottom -->
        <v-divider class="my-4"></v-divider>
        <v-row justify="center" class="">
          <v-col cols="12" class="text-center pa-0">
            <p class="footer-bottom-text text-caption">
              © 2025 Nairobi Markets. All rights reserved.<br />
              Powered by
              <a
                href="https://mijinitech.com"
                target="_blank"
                class="footer-link"
                >MijiniTech</a
              >
            </p>
          </v-col>
        </v-row>
      </v-container>
    </CoreMidScreenLayout>
  </v-footer>
</template>

<script setup>
import {
  LucideMail,
  LucidePhone,
  LucideMapPin,
  LucideInstagram,
  LucideTwitter,
  LucideFacebook,
} from "lucide-vue-next";
</script>

<style scoped>
.footer-title {
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: #fff;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.footer-title::after {
  content: "";
  display: block;
  width: 30px;
  height: 2px;
  background: rgba(var(--v-theme-secondary));
  margin-top: 4px;
}

.footer-text {
  color: #ddd;
  font-size: 0.8rem;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}

.footer-icon {
  /* width: 20px;
  height: 20px; */
  color: rgba(var(--v-theme-secondary));
  flex-shrink: 0;
}

.privacy-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.privacy-link {
  color: #ddd;
  font-size: 0.8rem;
  text-decoration: none;
}
.privacy-link:hover {
  color: rgba(var(--v-theme-secondary));
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
  color: rgba(var(--v-theme-secondary));
}

.footer-bottom-text {
  color: #e6e3e1;
}
.footer-link {
  color: rgba(var(--v-theme-secondary));
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
}
</style>
