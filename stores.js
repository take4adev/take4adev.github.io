// Store links for every page (owner 2026-11-11: QR codes and links open the
// right store for whoever scans them). After releasing the iPhone version
// in App Store Connect set appleLive to true and publish the website.
var BB = (function () {
  var ua = navigator.userAgent || '';
  return {
    play: 'https://play.google.com/store/apps/details?id=com.blockbeat808.game',
    apple: 'https://apps.apple.com/app/blockbeat-808/id6826680422',
    appleLive: true, // live since 2026-11-11
    // iPads on iPadOS 13+ say "Macintosh" but have a touch screen.
    ios: /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1),
    android: /Android/i.test(ua),
    de: /^de/i.test(navigator.language || '')
  };
})();

// Fills [box] with the official store badges (owner 2026-11-11: "die kennt
// man"; artwork from Google's and Apple's badge pages in badges/, never
// changed). [only]: 'play' or 'apple' for one store. [base]: path to the
// site root ('../' from a subfolder). The App Store badge only once the app
// is live there (Apple: badges only for available apps); before that a
// plain line. Both together: App Store first.
BB.badges = function (box, only, base) {
  base = base || '';
  var l = BB.de ? 'de' : 'en', html = '';
  if (only !== 'play') {
    html += BB.appleLive
      ? '<a class="store-badge apple" href="' + BB.apple + '"><img src="' + base + 'badges/app-store-' + l +
        '.svg" alt="' + (BB.de ? 'Laden im App Store' : 'Download on the App Store') + '"></a>'
      : '<span class="store-soon">' + (BB.de ? 'iPhone: bald im App Store' : 'iPhone: coming soon to the App Store') + '</span>';
  }
  if (only !== 'apple') {
    html += '<a class="store-badge play" href="' + BB.play + '"><img src="' + base + 'badges/google-play-' + l +
        '.png" alt="' + (BB.de ? 'Jetzt bei Google Play' : 'Get it on Google Play') + '"></a>';
  }
  box.innerHTML = html;
};
