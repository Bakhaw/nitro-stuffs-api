import { Router } from 'express';
import { maps } from '../static';

const router = Router();

/** Get all maps using a game param */
router.get('/:game/maps', (req, res) => {
  const { game } = req.params;
  const mapList = maps[game];

  if (!mapList) {
    res.send({
      error: true,
      details: `Invalid parameter: ${game}`,
    });
  } else {
    res.send({
      error: false,
      details: mapList,
    });
  }
});

/** Get a game map using it's key */
router.get('/:game/maps/:mapKey', (req, res) => {
  const { game, mapKey } = req.params;
  const mapList = maps[game];

  if (!mapList) {
    res.send({
      error: true,
      details: `Invalid parameter: ${game}`,
    });
  }

  const map = maps[game].filter((map) => map.key === mapKey)[0];

  if (!map) {
    res.send({
      error: true,
      details: `Invalid parameter: ${mapKey}`,
    });
  } else {
    res.send({
      error: false,
      details: map,
    });
  }
});

export default router;
