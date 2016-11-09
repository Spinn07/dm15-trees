var trees = require('../models/trees');

module.exports = {
  index: function (req, res, next) {
    res.status(200).json(trees);
  },

  show: function (req, res, next) {
    var treeIndex = parseInt(req.params.id);
    res.status(200).json(trees[treeIndex]);
  },

  create: function (req, res, next) {
    trees.push(req.body);
    res.status(200).json(trees);
  },

  update: function (req, res, next) {
    // FIXME: implement this for yourself!
    res.status(200).json(trees);
  },

  destroy: function (req, res, next) {
    var treeIndex = parseInt(req.params.id);
    trees.splice(treeIndex, 1);
    res.sendStatus(204);
  }
};
