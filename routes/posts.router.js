const {Router} = require("express")
const router = Router()

const postsController = require("../controller/posts.controller")

router.get("/",postsController.getAllRecords);
router.get("/:id",postsController.getRecordbyId);
router.post("/",postsController.addRecord);
router.delete("/:id",postsController.removeRecord);
router.put("/:id",postsController.updateRecord);

module.exports=router;