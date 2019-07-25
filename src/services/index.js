import {
  Router
} from 'express';
const router = Router();


// ------------------- MIDDLEWARE --------------------------

router.use((req, res, next) => {
  /**
   * Authentication middleware. 
   * It would go
   */

  req.context = {
    users: models.users,
    messages: models.messages,
    me: models.users[1]
  } // set user that is used to create messages
  next()
})