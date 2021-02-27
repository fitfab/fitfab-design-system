import { newSpecPage } from '@stencil/core/testing';
import { FitfabButton } from '../fitfab-button';

describe('fitfab-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FitfabButton],
      html: `<fitfab-button></fitfab-button>`,
    });
    expect(page.root).toEqualHtml(`<fitfab-button>
       <button>
         <span>
           submit
         </span>
         <svg aria-labelledby="chevronRightIconTitle" fill="none" height="32px" role="img" stroke="#f8f9fa" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.75" viewBox="0 0 24 24" width="32px" xmlns="http://www.w3.org/2000/svg">
           <polyline points="10 6 16 12 10 18 10 18"></polyline>
         </svg>
       </button>
     </fitfab-button>`);
  });
});
