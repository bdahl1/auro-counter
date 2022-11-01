import { fixture, html, expect, elementUpdated  } from '@open-wc/testing';
import '../src/auro-counter.js';

describe('auro-counter', () => {
  it('auro-counter is accessible', async () => {
    const el = await fixture(html`
      <auro-counter></auro-counter>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-counter custom element is defined', async () => {
    const el = await !!customElements.get("auro-counter");

    await expect(el).to.be.true;
  });

  describe('increment and decrement functionality', () => {
    let incrementButton;
    let decrementButton;
    let el;
    beforeEach(async () => {
      el = await fixture(html`
        <auro-counter></auro-counter>
      `);
  
      decrementButton = el.shadowRoot.querySelectorAll('button')[0];
      incrementButton = el.shadowRoot.querySelectorAll('button')[1];
      
    });

    it('Should initalize to zero', async() => {
      const content = el.shadowRoot.querySelector('span.count').textContent;
      expect(content).to.equal('0');
    });
  
    it('single increment', async() => {
      incrementButton.click();
      await elementUpdated(el);
      const val = el.shadowRoot.querySelector('span.count').textContent;
      expect(val).to.equal('1');
    });

    it('multiple increment', async() => {
      incrementButton.click();
      incrementButton.click();
      incrementButton.click();
      await elementUpdated(el);
      const val = el.shadowRoot.querySelector('span.count').textContent;
      expect(val).to.equal('3');
    });

    it('single decrement', async() => {
      decrementButton.click();
      await elementUpdated(el);
      const val = el.shadowRoot.querySelector('span.count').textContent;
      expect(val).to.equal('-1');
    });

    it('multiple decrement', async() => {
      decrementButton.click();
      decrementButton.click();
      decrementButton.click();
      await elementUpdated(el);
      const val = el.shadowRoot.querySelector('span.count').textContent;
      expect(val).to.equal('-3');
    });
  });
  

});
