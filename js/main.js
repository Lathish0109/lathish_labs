(function () {
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = document.getElementById('lightbox-close');
  var lastTrigger = null;

  function openLightbox(trigger) {
    var src = trigger.getAttribute('data-full');
    var img = trigger.querySelector('img');
    lightboxImg.src = src;
    lightboxImg.alt = img ? img.alt : 'Enlarged screenshot';
    lightbox.hidden = false;
    lastTrigger = trigger;
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    if (lastTrigger) lastTrigger.focus();
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* ===== Screenshot carousel ===== */
  var track = document.getElementById('carousel-track');
  if (track) {
    var slides = Array.prototype.slice.call(track.querySelectorAll('.carousel-slide'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('.carousel-dot'));
    var caption = document.getElementById('carousel-caption');
    var prevBtn = document.getElementById('carousel-prev');
    var nextBtn = document.getElementById('carousel-next');
    var activeIndex = 0;
    var scrollTimer = null;

    function setActive(index) {
      activeIndex = index;
      slides.forEach(function (s, i) {
        s.classList.toggle('is-active', i === index);
      });
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === index);
      });
      if (caption) caption.innerHTML = slides[index].getAttribute('data-caption') || '';
    }

    function goTo(index, smooth) {
      index = Math.max(0, Math.min(slides.length - 1, index));
      var target = slides[index];
      var trackRect = track.getBoundingClientRect();
      var targetRect = target.getBoundingClientRect();
      var delta = (targetRect.left + targetRect.width / 2) - (trackRect.left + trackRect.width / 2);
      setActive(index);
      track.scrollTo({ left: track.scrollLeft + delta, behavior: smooth === false ? 'auto' : 'smooth' });
    }

    function nearestIndex() {
      var trackRect = track.getBoundingClientRect();
      var trackCenter = trackRect.left + trackRect.width / 2;
      var best = 0;
      var bestDist = Infinity;
      slides.forEach(function (s, i) {
        var r = s.getBoundingClientRect();
        var dist = Math.abs((r.left + r.width / 2) - trackCenter);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      return best;
    }

    track.addEventListener('scroll', function () {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        var idx = nearestIndex();
        if (idx !== activeIndex) setActive(idx);
      }, 100);
    });

    slides.forEach(function (slide, i) {
      slide.addEventListener('click', function (e) {
        if (i === activeIndex) {
          openLightbox(slide);
        } else {
          e.preventDefault();
          goTo(i);
        }
      });
    });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(activeIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(activeIndex + 1); });

    setActive(0);
    requestAnimationFrame(function () { goTo(0, false); });
  }
})();
