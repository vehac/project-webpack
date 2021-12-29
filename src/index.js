import utils from './utils';
import style from './style.css';
import sass from './sass.scss';

utils.alterText();

$("#btn-jq").on("click", function() {
  utils.msg();
});