exports.set = (path) => {
  try {
    var items = this.get()
    items.unshift(path)
    window.localStorage.setItem(
      'tracking',
      JSON.stringify(items.slice(0, 9))
    )
  } catch (e) {
    return
  }
}
  
exports.get = () => {
  try {
    var items = window.localStorage.getItem('tracking')
    return JSON.parse(items) || [];
  } catch (e) {
    return [];
  }
}
