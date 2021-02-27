import { newSpecPage } from '@stencil/core/testing';
import { FitfabButton } from '../fitfab-button';

describe('fitfab-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FitfabButton],
      html: `<fitfab-button></fitfab-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fitfab-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fitfab-button>
    `);
  });
});
