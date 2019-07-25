import {
  Router
} from 'express';
import uuidv4 from 'uuid/v4';
const router = Router();

// --------------------- MESSAGES ------------------------

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.messages))
})

router.get('/:messageId', (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId])
})

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

router.post('/:messageId', (req, res) => {
  messages[req.params.messageId].text = req.body.text
  return res.send(messages[req.params.messageId])
})

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;

  req.context.models.messages = otherMessages;

  return res.send(message);
});

export default router