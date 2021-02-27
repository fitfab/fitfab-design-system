import { newE2EPage } from '@stencil/core/testing';

describe('fitfab-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fitfab-button></fitfab-button>');

    const element = await page.find('fitfab-button');
    expect(element).toHaveClass('hydrated');
  });
});
