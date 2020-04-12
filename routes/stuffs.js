import { Router } from 'express';
import { stuffs } from '../static';

const router = Router();

/** Get map stuffs */
router.get('/:game/stuffs/:map', (req, res) => {
  const { game, map } = req.params;
  const stuffList = stuffs[game][map];

  if (!stuffList) {
    res.send({
      error: true,
      details: `Invalid parameter: ${game}`,
    });
  } else {
    res.send({
      error: false,
      details: stuffList,
    });
  }
});

export default router;
