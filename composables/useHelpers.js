import {
  useAppStore
} from '~/store/app'
import {
  useAuthStore
} from '~/store/auth'
import {
  format
} from 'date-fns'
import {
  enUS,
  fr
} from 'date-fns/locale'


export const useHelpers = () => {
  const app = useAppStore()
  const auth = useAuthStore()
  const numberFormat = (val, decimals) => {
    var decimalCount = decimals ?? 2
    var decimal = '.'
    var thousands = ','
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 3 : decimalCount

    const negativeSign = val < 0 ? '-' : ''
    let i = parseInt(
      (val = Math.abs(Number(val) || 0).toFixed(decimalCount))
    ).toString()
    let j = i.length > 3 ? i.length % 3 : 0

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount ?
        decimal +
        Math.abs(val - i)
        .toFixed(decimalCount)
        .slice(2) :
        '')
    )
  }
  const transformToLowerCase = (event) => {
    event.target.value = event.target.value.toLowerCase()
  }

  const transformToUpperCase = (event) => {
    event.target.value = event.target.value.toUpperCase()
  }

  const getAddress = (address) => {
    let location = ''
    const country = address.country ? `${address.country}` : ''
    const province = address.province ? `${address.province}` : ''
    const town = address.town ? `${address.town}` : ''
    const commune = address.commune ? `Commune de ${address.commune}, ` : ''
    const avenue = address.avenue ? `Av. ${address.avenue}, ` : ''
    const quartier = address.quartier ? `Qrt. ${address.quartier}, ` : ''
    const no = address.no ? `No. ${address.no},` : ''

    if (typeof address == 'object') {
      location = `${commune}${avenue}${quartier}${no} ${town}${province}${country}`
    }

    return location;
  }

  const currencyFormat = (val, decimals = 2) => {
    val = val != null ? val : 0
    return '$' + numberFormat(val, decimals) //currency.sign
  }
  const errorHandler = (e, show = true) => {
    if (
      e.name == 'TokenExpiredError' ||
      e.response?._data.name == 'TokenExpiredError'
    ) {
      // auth.logout();
      app.setUser({})
      app.setToken(null)
      navigateTo({
        name: 'auth'
      })
    }
    app.setError(true)
    app.load(false)
    if (show)
      app.toggleSnackbar({
        status: true,
        type: 'error',
        message: e.response?._data.message ?? e.message
      })
  }
  const routeNavigation = () => {
    navigateTo({
      name: app.redirect?.name ?? 'index',
      params: app.redirect?.params ?? {}
    })
    //
  }
  const adminRouteNavigation = () => {
    navigateTo({
      name: app.adminRedirect?.name ?? 'index',
      params: app.adminRedirect?.params ?? {}
    })
    //
  }
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
      return discount > 0 ?
        Number(price - (discount * price) / 100).toFixed(2) :
        Number(price).toFixed(2)
    },

    pricesAfterDiscount(array, discount) {
      var max = Math.max(...array)
      var min = Math.min(...array)

      var discountedMax = Number(max - (discount * max) / 100).toFixed(2)
      var discountedMin = Number(min - (discount * min) / 100).toFixed(2)

      return discount > 0 ?
        `${currencyFormat(discountedMin)} ~ ${currencyFormat(discountedMax)}` :
        `${currencyFormat(min)} ~ ${currencyFormat(max)}`
    },

    roundDiscountPercentage(discount) {
      return discount % 1 === 0 ? discount : Number(discount).toFixed(2)
    },
    numberOfDays(date) {
      let date1 = new Date(date)
      let date2 = new Date()
      let timeDifference = date2.getTime() - date1.getTime()
      let h = Math.floor(timeDifference / (1000 * 60 * 60).toFixed(1))
      let hour = h > 1 ? h + ' hours' : h + ' hour'
      let daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24))

      let res =
        h < 1 ?
        'Less than an hour' :
        daysDifference < 1 ?
        hour :
        daysDifference > 1 ?
        `${daysDifference} days` :
        `${daysDifference} day`
      return res + ' ago'
    },
    dateFormat_Month(date) {
      let d =
        date != '' ?
        format(new Date(date), 'dd MMMM, yyyy', {
          locale: fr
        }) :
        date
      return d
    },
    dateFormat_Time(date) {
      let d =
        date != '' ?
        format(new Date(date), 'yyyy-MM-dd, hh:m a', {
          locale: fr
        }) :
        date
      return d
    },
    getTime(date) {
      let d =
        date != '' ? format(new Date(date), 'HH:MM', {
          locale: fr
        }) : date
      return d
    },
    dateFormat_short(date) {
      let d = date ? format(new Date(date), 'yyyy-MM-dd', {
        locale: fr
      }) : date
      return d
    },
    dateDifference(date1, date2) {
      const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds

      const date1InMs = new Date(date1).getTime()
      const date2InMs = new Date(date2 ?? new Date()).getTime()

      const daysRemaining = Math.round((date1InMs - date2InMs) / oneDay)
      return daysRemaining > 0 ? `${daysRemaining} day(s) left` : 'Closed'
    },
    timePassedSinceDate(date1, date2) {
      const start = new Date(date1)
      const end = new Date(date2 ?? new Date())

      const timeElapsed = {
        years: end.getFullYear() - start.getFullYear(),
        months: end.getMonth() - start.getMonth(),
        days: end.getDate() - start.getDate(),
        totalDays: Math.floor((end - start) / (1000 * 3600 * 24)),
        totalWeeks: Math.floor((end - start) / (1000 * 3600 * 24 * 7))
      }
      return `${
        timeElapsed.years >= 1
          ? timeElapsed.years + ' year(s)'
          : timeElapsed.months >= 1
          ? timeElapsed.months + ' month(s)'
          : timeElapsed.totalWeeks >= 1
          ? timeElapsed.totalWeeks + ' week(s)'
          : timeElapsed.days + ' day(s)'
      } ago`
    },
    digitsOnly: event => {
      let keyCode = event.keyCode ? event.keyCode : event.which
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        event.preventDefault()
      }
    },
    getFullnames(user) {
      return user.firstname ?
        user?.firstname + ' ' + user?.lastname :
        'Full names'
    },
    getDetails(items, id) {
      return items.find(item => item.id === id)
    },
    replaceObjectEmptyStrings(object) {
      if (object)
        object.forEach(obj => {
          Object.keys(obj).forEach(key => {
            if (obj[key] === '') obj[key] = '-'
          })
        })
      return object
    },
    filterDataPerField(array, search, conditions = {}) {
      return array.filter(
        item =>
        Object.keys(conditions).every(key =>
          conditions[key] === '' ?
          item :
          String(item[key]).toLowerCase() ===
          String(conditions[key]).toLowerCase()
        ) &&
        Object.values(item).some(
          value =>
          typeof value === 'string' &&
          value.toLowerCase().includes(search.toLowerCase())
        )
      )
    },
    randPassword() {
      let passwordLength = 12
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const numberChars = '0123456789'
      const specialChars = '!@#$%^&*()-_+=<>?/[]{},.;:'

      let password = ''

      // Ensure at least one character from each category
      password += lowercaseChars.charAt(
        Math.floor(Math.random() * lowercaseChars.length)
      )
      password += uppercaseChars.charAt(
        Math.floor(Math.random() * uppercaseChars.length)
      )
      password += numberChars.charAt(
        Math.floor(Math.random() * numberChars.length)
      )
      password += specialChars.charAt(
        Math.floor(Math.random() * specialChars.length)
      )

      const remainingLength = passwordLength - 4 // Subtract 4 because we already added one character from each category

      // Fill the rest of the password with random characters from all categories
      const allChars =
        lowercaseChars + uppercaseChars + numberChars + specialChars
      for (let i = 0; i < remainingLength; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length))
      }

      // Shuffle the password string to make the order of characters random
      password = password
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('')

      return password
    },
    shuffleArray(array) {
      return array
        .map(value => ({
          value,
          sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(({
          value
        }) => value)
    },
    sanitizeTitleForRoute(title) {
      return String(title).toLowerCase().replaceAll(' ', '-')
    },
    destructureSanitizedTitle(title) {
      return String(title).replaceAll('-', ' ')
    },
    capitalizeFirstLetter(string) {
      return string ?
        string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() :
        ''
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = error => reject(error)
        reader.readAsDataURL(file)
      })
    },
    pageTitle(title) {
      let sanitizedTitle = title?.replace('admin-', '')
      return sanitizedTitle === 'admin' ? 'dashboard' : sanitizedTitle
    },
    chartColors() {
      return ['#9767fe', '#036A00', '#ea3321', '#3b2864', '#f8be08']
    },

  }
}