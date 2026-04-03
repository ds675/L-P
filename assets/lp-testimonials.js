import { Component } from '@theme/component';

class LpTestimonials extends Component {
  connectedCallback() {
    super.connectedCallback();
    this.track = this.querySelector('.lp-testimonials__track');
    this.prevBtn = this.querySelector('[data-prev]');
    this.nextBtn = this.querySelector('[data-next]');

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', this.handlePrev.bind(this));
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', this.handleNext.bind(this));
    }
  }

  handlePrev() {
    if (!this.track) return;
    const card = this.track.querySelector('.lp-testimonials__card');
    if (!card) return;
    const scrollAmount = card.offsetWidth + 16;
    this.track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  handleNext() {
    if (!this.track) return;
    const card = this.track.querySelector('.lp-testimonials__card');
    if (!card) return;
    const scrollAmount = card.offsetWidth + 16;
    this.track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

customElements.define('lp-testimonials', LpTestimonials);
