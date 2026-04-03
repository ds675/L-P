import { Component } from '@theme/component';

class LpHowItWorks extends Component {
  connectedCallback() {
    super.connectedCallback();
    this.stages = this.querySelectorAll('.lp-how-it-works__stage');

    for (const stage of this.stages) {
      stage.addEventListener('click', this.handleStageClick.bind(this));
    }
  }

  handleStageClick(event) {
    const clickedStage = event.currentTarget;

    for (const stage of this.stages) {
      stage.classList.remove('lp-how-it-works__stage--active');
    }

    clickedStage.classList.add('lp-how-it-works__stage--active');
  }
}

customElements.define('lp-how-it-works', LpHowItWorks);
