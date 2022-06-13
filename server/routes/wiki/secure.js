const express = require('express');
const router = express.Router();
const Wiki = require('../../models/wiki')
const mongoose = require('mongoose')
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();


module.exports = router;