export {};

const Agency = require('../models/agency');
const express = require('express');

exports.createAgency = (req: any, res: any, next: any) => {
  const agency = new Agency({
    name: req.body.name
  });
  agency
    .save()
    .then(() => {
      res.status(201).json({
        message: 'agency saved successfully!'
      });
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error
      });
    });
};
