/*
    Path: /api/personero    
*/
const { Router } = require('express');


const router = Router();

// Listar Personeros
router.get('/', (req, res) => {
    res.json(
        {
            ok: true,
            msj: 'Formulario de personero'
        }
    );
});


module.exports = router;