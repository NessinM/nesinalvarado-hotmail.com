import { Router }  from 'express'
const router  = Router()

const mw   = require('../middlewares')
const user = require('../models/user')

router.post('/login',  user.login)
router.post('/logout', mw.isLogged, user.logout)
router.get('/',        mw.isLogged, user.get)
router.post('/',       mw.isLogged, user.add)
// router.delete('/',     mw.isLogged, user.remove)
// router.put('/',        mw.isLogged, user.update)

module.exports = router
