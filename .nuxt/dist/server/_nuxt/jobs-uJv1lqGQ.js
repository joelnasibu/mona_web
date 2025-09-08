import { a as useHttp, u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { k as defineStore, h as useAppStore } from "../server.mjs";
const http = useHttp();
const baseURL = `/jobs`;
const jobApplicationURL = `/job-applications`;
const useJobStore = defineStore("job", {
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
    headers() {
      return {
        Authorization: `Bearer ${this.app.token}`,
        user: this.app.currentUser.userId
      };
    }
  },
  actions: {
    async getJobs() {
      this.app.setError(false);
      this.app.load(true);
      try {
        const { response } = await http(`${baseURL}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async publishedJobs(enableLoader) {
      this.app.setError(false);
      this.app.load(enableLoader ?? true);
      try {
        const { response } = await http(`${baseURL}/published`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async jobsPerBusiness(enableLoader, business) {
      this.app.setError(false);
      this.app.load(enableLoader ?? true);
      try {
        const { response } = await http(`${baseURL}/business/${business}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async createJob(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Job created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getJob(job) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const { response } = await http(`${baseURL}/single/${job}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateJob(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Job updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteJob(job) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/${job}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Job deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async publishJob(job, body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/publish/${job}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Job published successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    //application
    async getJobApplications(enableLoader = true) {
      this.app.setError(false);
      this.app.load(enableLoader);
      try {
        const { response } = await http(`${jobApplicationURL}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getSingleApplication(applicationId) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const { response } = await http(
          `${jobApplicationURL}/single/${applicationId}`,
          {
            method: "GET"
          }
        );
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getJobApplicationsPerJob(enableLoader, job) {
      this.app.setError(false);
      this.app.load(enableLoader ?? true);
      try {
        const { response } = await http(`${jobApplicationURL}/job/${job}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async apply(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${jobApplicationURL}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Application submitted!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getJobApplicants() {
      this.app.setError(false);
      this.app.load(true);
      try {
        const { response } = await http(`${jobApplicationURL}/applicant/`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateApplication(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${jobApplicationURL}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Application updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteJobApplication(job) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${jobApplicationURL}/${job}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Application deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async changeApplicationStatus(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(
          `${jobApplicationURL}/status/${body.applicationId}`,
          {
            method: "PUT",
            body
          }
        );
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Application status updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});
export {
  useJobStore as u
};
//# sourceMappingURL=jobs-uJv1lqGQ.js.map
