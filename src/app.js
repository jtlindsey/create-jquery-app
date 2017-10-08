window.$ = window.jQuery = require("jquery");

import appHelper from './helper.js';
window.appHelper = appHelper;

import 'font-awesome/css/font-awesome.min.css';
import ln from './components/IsLoggedIn/index.js';

ln();