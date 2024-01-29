const pool = require("../database/db");
const query = require("../queries/queries");

const getAllRecords = (req, res) => {
  pool.query(query.getAllRecords, (err, results) => {
    if (err) throw err;
    else res.status(200).json(results.rows);
  });
};

const getRecordbyId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getRecordbyId, [id], (err, results) => {
    if (err) throw err;
    else res.status(200).json(results.rows);
  });
};

const addRecord = (req, res) => {
  const { id, title, content } = req.body;
  pool.query(query.addRecord, [id, title, content], (err, results) => {
    if (err) throw err;

    res.status(201).send("Record has been added");
  });
};

const removeRecord = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(query.removeRecord, [id], (err, results) => {
    if (err) throw err;
    else {
      res.status(200).send("Record removed successfully");
    }
  });
};

const updateRecord=(req,res)=>{
    const id = parseInt(req.params.id);
    const {title}=req.body;

    pool.query(query.updateRecord,[title,id],(err,results)=>{
        if(err) throw err;
        else
        {
            res.status(200).send("Record updated successfully");
        }
    })
    
}



module.exports = { getAllRecords,
    getRecordbyId,
    addRecord,
    removeRecord,
    updateRecord
};
