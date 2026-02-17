/**
 * Bin to Better - Main JavaScript
 * Pure vanilla JavaScript for interactive functionality
 */

// ===========================
// Utility
// ===========================

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// ===========================
// Header / Navigation
// ===========================

function initHeader() {
  const header = document.getElementById('header')
  if (!header) return

  const mobileMenuToggle = document.getElementById('mobileMenuToggle')
  const mobileMenu = document.getElementById('mobileMenu')
  const mobileMenuClose = document.getElementById('mobileMenuClose')
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay')

  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link')
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link')

  // Set active nav link from current path
  const path = (window.location.pathname || '/').replace(/\/$/, '') || '/'
  const isHome = path === '' || path === '/' || path === '/index.html'
  navLinks.forEach((link) => {
    const href = link.getAttribute('href')
    const linkPath = href && href.startsWith('/') && !href.startsWith('/#') ? href.replace(/\/$/, '') || '/' : null
    const isHomeLink = linkPath === '/' || linkPath === '/index.html'
    if (isHome && isHomeLink) {
      link.classList.add('active')
    } else if (!isHome && linkPath && path === linkPath) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })

  function closeMobileMenu() {
    if (!mobileMenu) return
    mobileMenu.classList.remove('active')
    document.body.style.overflow = ''
  }

  const handleScroll = debounce(() => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
    updateActiveNavLink()
  }, 50)

  window.addEventListener('scroll', handleScroll)

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu)
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu)
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu)
  })

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      if (!href || !href.startsWith('/#')) return

      const targetId = href.substring(2)
      const targetSection = document.getElementById(targetId)
      if (!targetSection) return

      e.preventDefault()
      const headerHeight = header.offsetHeight
      const targetPosition = targetSection.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    })
  })

  function updateActiveNavLink() {
    const path = (window.location.pathname || '/').replace(/\/$/, '') || '/'
    const isHome = path === '' || path === '/' || path === '/index.html'
    if (isHome) {
      navLinks.forEach((link) => {
        const h = link.getAttribute('href')
        if (h === '/' || h === '/#hero') link.classList.add('active')
        else link.classList.remove('active')
      })
      return
    }
    const sections = document.querySelectorAll('section[id]')
    const scrollPosition = window.scrollY + 100
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `/#${sectionId}`) link.classList.add('active')
        })
      }
    })
  }

  updateActiveNavLink()
}

// ===========================
// Testimonials Carousel
// ===========================

function initTestimonials() {
  const testimonialCards = document.querySelectorAll('.testimonial-card')
  const prevBtn = document.querySelector('.testimonial-prev')
  const nextBtn = document.querySelector('.testimonial-next')
  const dots = document.querySelectorAll('.testimonial-dot')

  if (!testimonialCards.length) return

  let currentIndex = 0
  const totalTestimonials = testimonialCards.length
  let autoAdvanceTimer

  function showTestimonial(index) {
    testimonialCards.forEach((card) => card.classList.remove('active'))
    dots.forEach((dot) => dot.classList.remove('active'))

    testimonialCards[index].classList.add('active')
    if (dots[index]) dots[index].classList.add('active')

    if (prevBtn) prevBtn.disabled = index === 0
    if (nextBtn) nextBtn.disabled = index === totalTestimonials - 1

    currentIndex = index
  }

  function nextTestimonial() {
    const nextIndex = (currentIndex + 1) % totalTestimonials
    showTestimonial(nextIndex)
    resetAutoAdvance()
  }

  function prevTestimonial() {
    const prevIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials
    showTestimonial(prevIndex)
    resetAutoAdvance()
  }

  function goToTestimonial(index) {
    showTestimonial(index)
    resetAutoAdvance()
  }

  function startAutoAdvance() {
    autoAdvanceTimer = setInterval(() => {
      nextTestimonial()
    }, 5000)
  }

  function stopAutoAdvance() {
    if (autoAdvanceTimer) clearInterval(autoAdvanceTimer)
  }

  function resetAutoAdvance() {
    stopAutoAdvance()
    startAutoAdvance()
  }

  if (prevBtn) prevBtn.addEventListener('click', prevTestimonial)
  if (nextBtn) nextBtn.addEventListener('click', nextTestimonial)

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToTestimonial(index))
  })

  const testimonialsWrapper = document.querySelector('.testimonials-wrapper')
  if (testimonialsWrapper) {
    testimonialsWrapper.addEventListener('mouseenter', stopAutoAdvance)
    testimonialsWrapper.addEventListener('mouseleave', startAutoAdvance)
  }

  document.addEventListener('keydown', (e) => {
    if (!document.querySelector('.testimonials-section:hover')) return
    if (e.key === 'ArrowLeft') prevTestimonial()
    if (e.key === 'ArrowRight') nextTestimonial()
  })

  showTestimonial(0)
  startAutoAdvance()
}

// ===========================
// Contact Form (mailto)
// ===========================

function initContactForm() {
  const form = document.getElementById('contactForm')
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const subjectParts = ['Bin to Better website inquiry']
    if (name) subjectParts.push(`from ${name}`)
    const subject = subjectParts.join(' ')

    const bodyLines = []
    if (name) bodyLines.push(`Name: ${name}`)
    if (email) bodyLines.push(`Email: ${email}`)
    if (bodyLines.length) bodyLines.push('')
    bodyLines.push(message || '(no message provided)')

    const mailto = `mailto:outreach@bintobetter.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join('\n'),
    )}`

    window.location.href = mailto
  })
}

// ===========================
// Theme (dark mode) toggle
// ===========================

const THEME_KEY = 'bin-to-better-theme'

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '')
  localStorage.setItem(THEME_KEY, theme)
}

function initTheme() {
  setTheme(getPreferredTheme())

  const toggle = document.getElementById('themeToggle')
  const toggleMobile = document.getElementById('themeToggleMobile')

  function handleToggle() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    setTheme(current === 'dark' ? 'light' : 'dark')
  }

  if (toggle) toggle.addEventListener('click', handleToggle)
  if (toggleMobile) toggleMobile.addEventListener('click', handleToggle)
}

// ===========================
// Image Lightbox
// ===========================

function initLightbox() {
  const triggers = document.querySelectorAll('.lightbox-trigger, [data-lightbox]')
  if (!triggers.length) return

  let overlay = document.getElementById('lightbox-overlay')
  if (!overlay) {
    overlay = document.createElement('div')
    overlay.id = 'lightbox-overlay'
    overlay.className = 'lightbox-overlay'
    overlay.setAttribute('aria-hidden', 'true')
    overlay.innerHTML = '<div class="lightbox-backdrop" aria-label="Close"></div><div class="lightbox-content"><img src="" alt="" /></div><button class="lightbox-close" type="button" aria-label="Close">&times;</button>'
    document.body.appendChild(overlay)
  }

  const backdrop = overlay.querySelector('.lightbox-backdrop')
  const content = overlay.querySelector('.lightbox-content img')
  const closeBtn = overlay.querySelector('.lightbox-close')

  function open(src, alt) {
    content.src = src
    content.alt = alt || 'Enlarged image'
    overlay.classList.add('active')
    overlay.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
    content.focus()
  }

  function close() {
    overlay.classList.remove('active')
    overlay.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
  }

  triggers.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const href = el.getAttribute('href')
      const img = el.querySelector('img')
      const alt = img ? img.getAttribute('alt') : ''
      if (href) open(href, alt)
    })
  })

  if (backdrop) backdrop.addEventListener('click', close)
  if (closeBtn) closeBtn.addEventListener('click', close)
  overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') close() })
}

// ===========================
// Footer Year
// ===========================

function updateFooterYear() {
  const yearElement = document.getElementById('currentYear')
  if (yearElement) yearElement.textContent = new Date().getFullYear()
}

// ===========================
// Init
// ===========================

function initApp() {
  initTheme()
  initHeader()
  initTestimonials()
  initContactForm()
  initLightbox()
  updateFooterYear()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}
