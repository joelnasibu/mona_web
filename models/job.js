export default class JobModel {
  constructor(job) {
    this.job = job;
  }
  get formatedJobRouteTitle() {
    return String(this.job.jobName).toLowerCase().replaceAll(" ", "-");
  }
  navigateToJobDetails() {
    navigateTo({
      name: "jobs-id",
      params: {
        name: this.formatedJobRouteTitle,
        id: this.job.jobId ?? this.job.objectID,
      },
    });
  }
}