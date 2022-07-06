const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.get("/productdetail", productController.detail);

router.get("/carritoDeCompras", productController.carritoCompras);

router.get("/createProduct", productController.create);

router.get("/editarProduct/:idProduct", productController.editar);

router.get("/lista", productController.list);

router.put("/editarProduct", function(req, res){
    res.send('lo logre');
});

module.exports = router;
