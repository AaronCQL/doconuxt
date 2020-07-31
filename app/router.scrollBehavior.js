/**
 * Scrolls the page to the hash anchor on first visit
 * See: https://nuxtjs.org/api/configuration-router#scrollbehavior
 */
export default function (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
    };
  }
}
