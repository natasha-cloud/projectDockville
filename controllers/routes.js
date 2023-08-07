const express = require('express');
const router = express();



//routers
router.get('/dashboard', (req, res) => {
res.render('../views/pug/dashboard/index.pug')
});
router.get('/', (req, res) => {
res.render('../views/pug/index.pug')
});
router.get('/login', (req, res) => {
res.render('../views/pug/parkingLogin.pug')
});
router.get('/signUp', (req, res) => {
res.render('../views/pug/parkingRegister.pug')
});
router.get('/personal-car', (req, res) => {
res.render('../views/pug/personal-car.pug')
});
router.get('/battery', (req, res) => {
res.render('../views/pug/batterysection.pug')
});
router.get('/bodaboda', (req, res) => {
res.render('../views/pug/bodaboda-form.pug')
});
router.get('/tyre', (req, res) => {
res.render('../views/pug/cartyreclinic.pug')
});
router.get('/clientReg', (req, res) => {
res.render('../views/pug/client.pug')
});
router.get('/coaster', (req, res) => {
res.render('../views/pug/coaster.pug')
});
router.get('/services', (req, res) => {
res.render('../views/pug/services.pug')
});
router.get('/taxis', (req, res) => {
res.render('../views/pug/taxis.pug')
});
router.get('/trucks', (req, res) => {
res.render('../views/pug/trucks.pug')
});

module.exports = router;

