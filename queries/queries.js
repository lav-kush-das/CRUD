const getAllRecords = "SELECT * from POST";

const getRecordbyId = "SELECT * from POST where id=$1";

const addRecord = "INSERT into POST(id,title,content) values ($1,$2,$3)";

const removeRecord = "DELETE from POST where id=$1";

const updateRecord = "UPDATE POST set title=$1 where id=$2";

module.exports = { getAllRecords,
getRecordbyId,
addRecord,
removeRecord,
updateRecord
};