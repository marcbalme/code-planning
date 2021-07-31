import { AgencyType } from '../types';
const Agency = require('../models/agency');

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

exports.getOneAgency = (req: any, res: any, next: any) => {
  Agency.findOne({
    _id: req.params.id
  })
    .then((agency: AgencyType) => {
      res.status(200).json(agency);
    })
    .catch((error: any) => {
      res.status(404).json({
        error: error
      });
    });
};

exports.deleteAgency = (req: any, res: any, next: any) => {
  Agency.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: 'Deleted!'
      });
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error
      });
    });
};

exports.updateAgency = (req: any, res: any, next: any) => {
  const agency = new Agency({
    _id: req.params.id,
    name: req.body.name
  });
  Agency.updateOne({ _id: req.params.id }, agency)
    .then(() => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error
      });
    });
};

exports.getAllAgencies = (req: any, res: any, next: any) => {
  Agency.find()
    .then((agencies: Array<AgencyType>) => {
      res.status(200).json(agencies);
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error
      });
    });
};

export {};
