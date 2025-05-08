import icons from 'url:../../img/icons.svg';
import { RES_PER_PAGE } from '../config';
import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandleClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / RES_PER_PAGE);
    const curPage = this._data.page;
    // page 1, and there are other pages
    if (curPage === 1 && numPages > 1)
      return `
          <button data-goto="${
            curPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> `;

    // last page
    if (curPage === numPages && numPages > 1)
      return `
          <button data-goto="${
            curPage - 1
          }"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
    `;

    // other page
    if (curPage < numPages)
      return `
          <button data-goto="${
            curPage + 1
          }"class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
          <button data-goto="${
            curPage - 1
          }"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
    `;

    // page 1, and NO other pages
    return '';
  }
}

export default new PaginationView();
