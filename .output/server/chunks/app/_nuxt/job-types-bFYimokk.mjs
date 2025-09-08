import { u as useHelpers, b as useHttp } from './useHelpers-9BVYUhTt.mjs';
import { k as defineStore, h as useAppStore } from '../server.mjs';

const baseURL = `/job-types`;
const useJobTypeStore = defineStore("jobType", {
  state: () => ({
    //
  }),
  getters: {
    app() {
      const app = useAppStore();
      return app;
    },
    helpers() {
      return useHelpers();
    },
    http() {
      return useHttp();
    }
  },
  actions: {
    async getJobTypes(enableLoader) {
      this.app.setError(false);
      this.app.load(enableLoader != null ? enableLoader : true);
      try {
        const {
          response
        } = await this.http(baseURL, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async createType(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(`${baseURL}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Job type created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateType(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(`${baseURL}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Type updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteType(type) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(`${baseURL}/${type}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Type deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});

export { useJobTypeStore as u };
//# sourceMappingURL=job-types-bFYimokk.mjs.map
