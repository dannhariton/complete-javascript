import View from './View';

class SearchView extends View {
  _parentELement = document.querySelector('.search');

  getQuery() {
    const query = this._parentELement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentELement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentELement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
