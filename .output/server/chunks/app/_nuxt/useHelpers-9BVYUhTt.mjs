import { k as defineStore, h as useAppStore, b as navigateTo } from '../server.mjs';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const opts = {
  baseURL: "https://agp-api.acces-global.com/api/v1",
  async onRequest({ request, options, error }) {
    var _a;
    const app = useAppStore();
    options.headers = {
      Authorization: `Bearer ${app.token}`,
      user: (_a = app.currentUser) == null ? void 0 : _a.userId
    };
    if (error) {
      console.log("error fetch:", error);
    }
  },
  onRequestError({ error }) {
    console.log(error);
  },
  async onResponseError(error) {
    useHelpers().errorHandler(error, false);
  }
};
const useHttp = () => $fetch.create(opts);
const baseURL = `/auth`;
const userBaseURL = `/users`;
const emailBaseURL = `/auth/email`;
const useAuthStore = defineStore("auth", {
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
    }
  },
  actions: {
    // 
    async login(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const http2 = useHttp();
        const res = await http2(`${baseURL}/login/`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.setUser({
          account: res.account,
          applicant: res.applicant,
          ...res.response
        });
        this.app.setToken(res.response.access_token);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Access granted"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async confirmUser(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const http2 = useHttp();
        const res = await http2(`${baseURL}/confirm-user`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Access granted"
        });
        return Promise.resolve(true);
      } catch (e) {
        this.helpers.errorHandler(e);
        return Promise.reject(false);
      }
    },
    async logout() {
      this.app.setError(false);
      this.app.load(true);
      try {
        const http2 = useHttp();
        await http2(`${baseURL}/logout/`, {
          method: "POST",
          body: {
            refresh_token: this.app.currentUser.refresh_token
          }
        });
        this.app.load(false);
        this.app.setUser({
          accessLevel: 0,
          refresh_token: null,
          roleId: 0
        });
        this.app.setToken(null);
      } catch (e) {
        this.app.load(false);
      }
    },
    async createAccount(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const http2 = useHttp();
        const res = await http2(`${userBaseURL}/sign-up`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Account created successfully"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async emailVerified(userId) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const http2 = useHttp();
        const res = await http2(`${emailBaseURL}/verify/${userId}`, {
          method: "PUT"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    //users
    async getUsers(enableLoader) {
      this.app.setError(false);
      this.app.load(enableLoader != null ? enableLoader : true);
      try {
        const http2 = useHttp();
        const res = await http2(`${userBaseURL}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(res.response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getBusinessUsers(payload) {
      var _a;
      this.app.setError(false);
      this.app.load((_a = payload.enableLoader) != null ? _a : true);
      try {
        const res = await http(`${userBaseURL}/business/${payload.business}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(res.response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getUser(payload) {
      var _a;
      this.app.setError(false);
      this.app.load((_a = payload.enableLoader) != null ? _a : true);
      try {
        const res = await http(`${userBaseURL}/${payload.id}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(res.response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getUserByUID(payload, enableLoader = true) {
      this.app.setError(false);
      this.app.load(enableLoader);
      try {
        const res = await http(`${userBaseURL}/details/${payload.id}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(res.response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async createUser(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${userBaseURL}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
        return Promise.resolve(res);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async checkUniqueFields(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const {
          response
        } = await http(`${userBaseURL}/field-check`, {
          method: "POST",
          body
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
        return Promise.reject(e);
      }
    },
    async updateUser(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${userBaseURL}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "User updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async upgradeUser(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${userBaseURL}/upgrade/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "User updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteUser(user) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${userBaseURL}/${user}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "User deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    //passwords
    async decodeToken(token) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/decode-token?token=${token}`, {
          method: "GET"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
        return Promise.resolve(res.response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async resetPassword(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/set-password/${body.userId}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
        return Promise.resolve(true);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async changePassword(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(
          `${baseURL}/change-password/${this.app.currentUser.responseId}`,
          {
            method: "PUT",
            body
          }
        );
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Password changed successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async forgotPassword(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/forgot-password`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
        return Promise.resolve(res);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    //accounts
    async shopAccount(body, type) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`/${type}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Account created successfully"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateAccount(body, type) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`/${type}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Account updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteAccount(user, type) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`/${type}/${user}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Account deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});
const useHelpers = () => {
  const app = useAppStore();
  useAuthStore();
  const numberFormat = (val, decimals) => {
    var decimalCount = decimals != null ? decimals : 2;
    var decimal = ".";
    var thousands = ",";
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 3 : decimalCount;
    const negativeSign = val < 0 ? "-" : "";
    let i = parseInt(
      val = Math.abs(Number(val) || 0).toFixed(decimalCount)
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(val - i).toFixed(decimalCount).slice(2) : "");
  };
  const transformToLowerCase = (event) => {
    event.target.value = event.target.value.toLowerCase();
  };
  const transformToUpperCase = (event) => {
    event.target.value = event.target.value.toUpperCase();
  };
  const getAddress = (address) => {
    let location = "";
    const country = address.country ? `${address.country}` : "";
    const province = address.province ? `${address.province}` : "";
    const town = address.town ? `${address.town}` : "";
    const commune = address.commune ? `Commune de ${address.commune}, ` : "";
    const avenue = address.avenue ? `Av. ${address.avenue}, ` : "";
    const quartier = address.quartier ? `Qrt. ${address.quartier}, ` : "";
    const no = address.no ? `No. ${address.no},` : "";
    if (typeof address == "object") {
      location = `${commune}${avenue}${quartier}${no} ${town}${province}${country}`;
    }
    return location;
  };
  const currencyFormat = (val, decimals = 2) => {
    val = val != null ? val : 0;
    return "$" + numberFormat(val, decimals);
  };
  const errorHandler = (e, show = true) => {
    var _a2;
    var _a, _b;
    if (e.name == "TokenExpiredError" || ((_a = e.response) == null ? void 0 : _a._data.name) == "TokenExpiredError") {
      app.setUser({});
      app.setToken(null);
      navigateTo({
        name: "auth"
      });
    }
    app.setError(true);
    app.load(false);
    if (show)
      app.toggleSnackbar({
        status: true,
        type: "error",
        message: (_a2 = (_b = e.response) == null ? void 0 : _b._data.message) != null ? _a2 : e.message
      });
  };
  const routeNavigation = () => {
    var _a2, _b2;
    var _a, _b;
    navigateTo({
      name: (_a2 = (_a = app.redirect) == null ? void 0 : _a.name) != null ? _a2 : "index",
      params: (_b2 = (_b = app.redirect) == null ? void 0 : _b.params) != null ? _b2 : {}
    });
  };
  const adminRouteNavigation = () => {
    var _a2, _b2;
    var _a, _b;
    navigateTo({
      name: (_a2 = (_a = app.adminRedirect) == null ? void 0 : _a.name) != null ? _a2 : "index",
      params: (_b2 = (_b = app.adminRedirect) == null ? void 0 : _b.params) != null ? _b2 : {}
    });
  };
  return {
    numberFormat,
    currencyFormat,
    errorHandler,
    routeNavigation,
    adminRouteNavigation,
    transformToUpperCase,
    transformToLowerCase,
    getAddress,
    priceAfterDiscount(price, discount) {
      return discount > 0 ? Number(price - discount * price / 100).toFixed(2) : Number(price).toFixed(2);
    },
    pricesAfterDiscount(array, discount) {
      var max = Math.max(...array);
      var min = Math.min(...array);
      var discountedMax = Number(max - discount * max / 100).toFixed(2);
      var discountedMin = Number(min - discount * min / 100).toFixed(2);
      return discount > 0 ? `${currencyFormat(discountedMin)} ~ ${currencyFormat(discountedMax)}` : `${currencyFormat(min)} ~ ${currencyFormat(max)}`;
    },
    roundDiscountPercentage(discount) {
      return discount % 1 === 0 ? discount : Number(discount).toFixed(2);
    },
    numberOfDays(date) {
      let date1 = new Date(date);
      let date2 = /* @__PURE__ */ new Date();
      let timeDifference = date2.getTime() - date1.getTime();
      let h = Math.floor(timeDifference / (1e3 * 60 * 60).toFixed(1));
      let hour = h > 1 ? h + " hours" : h + " hour";
      let daysDifference = Math.floor(timeDifference / (1e3 * 3600 * 24));
      let res = h < 1 ? "Less than an hour" : daysDifference < 1 ? hour : daysDifference > 1 ? `${daysDifference} days` : `${daysDifference} day`;
      return res + " ago";
    },
    dateFormat_Month(date) {
      let d = date != "" ? format(new Date(date), "dd MMMM, yyyy", {
        locale: fr
      }) : date;
      return d;
    },
    dateFormat_Time(date) {
      let d = date != "" ? format(new Date(date), "yyyy-MM-dd, hh:m a", {
        locale: fr
      }) : date;
      return d;
    },
    getTime(date) {
      let d = date != "" ? format(new Date(date), "HH:MM", {
        locale: fr
      }) : date;
      return d;
    },
    dateFormat_short(date) {
      let d = date ? format(new Date(date), "yyyy-MM-dd", {
        locale: fr
      }) : date;
      return d;
    },
    dateDifference(date1, date2) {
      const oneDay = 24 * 60 * 60 * 1e3;
      const date1InMs = new Date(date1).getTime();
      const date2InMs = new Date(date2 != null ? date2 : /* @__PURE__ */ new Date()).getTime();
      const daysRemaining = Math.round((date1InMs - date2InMs) / oneDay);
      return daysRemaining > 0 ? `${daysRemaining} day(s) left` : "Closed";
    },
    timePassedSinceDate(date1, date2) {
      const start = new Date(date1);
      const end = new Date(date2 != null ? date2 : /* @__PURE__ */ new Date());
      const timeElapsed = {
        years: end.getFullYear() - start.getFullYear(),
        months: end.getMonth() - start.getMonth(),
        days: end.getDate() - start.getDate(),
        totalDays: Math.floor((end - start) / (1e3 * 3600 * 24)),
        totalWeeks: Math.floor((end - start) / (1e3 * 3600 * 24 * 7))
      };
      return `${timeElapsed.years >= 1 ? timeElapsed.years + " year(s)" : timeElapsed.months >= 1 ? timeElapsed.months + " month(s)" : timeElapsed.totalWeeks >= 1 ? timeElapsed.totalWeeks + " week(s)" : timeElapsed.days + " day(s)"} ago`;
    },
    digitsOnly: (event) => {
      let keyCode = event.keyCode ? event.keyCode : event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        event.preventDefault();
      }
    },
    getFullnames(user) {
      return user.firstname ? (user == null ? void 0 : user.firstname) + " " + (user == null ? void 0 : user.lastname) : "Full names";
    },
    getDetails(items, id) {
      return items.find((item) => item.id === id);
    },
    replaceObjectEmptyStrings(object) {
      if (object)
        object.forEach((obj) => {
          Object.keys(obj).forEach((key) => {
            if (obj[key] === "")
              obj[key] = "-";
          });
        });
      return object;
    },
    filterDataPerField(array, search, conditions = {}) {
      return array.filter(
        (item) => Object.keys(conditions).every(
          (key) => conditions[key] === "" ? item : String(item[key]).toLowerCase() === String(conditions[key]).toLowerCase()
        ) && Object.values(item).some(
          (value) => typeof value === "string" && value.toLowerCase().includes(search.toLowerCase())
        )
      );
    },
    randPassword() {
      let passwordLength = 12;
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars = "0123456789";
      const specialChars = "!@#$%^&*()-_+=<>?/[]{},.;:";
      let password = "";
      password += lowercaseChars.charAt(
        Math.floor(Math.random() * lowercaseChars.length)
      );
      password += uppercaseChars.charAt(
        Math.floor(Math.random() * uppercaseChars.length)
      );
      password += numberChars.charAt(
        Math.floor(Math.random() * numberChars.length)
      );
      password += specialChars.charAt(
        Math.floor(Math.random() * specialChars.length)
      );
      const remainingLength = passwordLength - 4;
      const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
      for (let i = 0; i < remainingLength; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
      }
      password = password.split("").sort(() => Math.random() - 0.5).join("");
      return password;
    },
    shuffleArray(array) {
      return array.map((value) => ({
        value,
        sort: Math.random()
      })).sort((a, b) => a.sort - b.sort).map(({
        value
      }) => value);
    },
    sanitizeTitleForRoute(title) {
      return String(title).toLowerCase().replaceAll(" ", "-");
    },
    destructureSanitizedTitle(title) {
      return String(title).replaceAll("-", " ");
    },
    capitalizeFirstLetter(string) {
      return string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : "";
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    },
    pageTitle(title) {
      let sanitizedTitle = title == null ? void 0 : title.replace("admin-", "");
      return sanitizedTitle === "admin" ? "dashboard" : sanitizedTitle;
    },
    chartColors() {
      return ["#9767fe", "#036A00", "#ea3321", "#3b2864", "#f8be08"];
    }
  };
};

export { useAuthStore as a, useHttp as b, useHelpers as u };
//# sourceMappingURL=useHelpers-9BVYUhTt.mjs.map
