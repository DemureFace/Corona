let windowWidth = null
function onResize(Event) {
  windowWidth = window.innerWidth
  console.log(windowWidth,window.innerHeight);
}
window.addEventListener('resize', onResize)

setTimeout(() => {
  window.removeEventListener('resize', onResize)
}, 2000);