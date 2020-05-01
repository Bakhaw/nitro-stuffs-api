import { Router } from 'express';
import { agents } from '../static';

const router = Router();

/** Get agents */
router.get('/:game/agents', (req, res) => {
  const { game } = req.params;
  const agentsList = agents[game];

  if (!agentsList) {
    res.send({
      error: true,
      details: `Invalid parameter: ${game}`,
    });
  } else {
    res.send({
      error: false,
      details: agentsList,
    });
  }
});

export default router;
