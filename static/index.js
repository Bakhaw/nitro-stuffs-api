import csgoMaps from './maps/csgoMaps';
import csgoStuffs from './stuffs/csgoStuffs';
import valorantMaps from './maps/valorantMaps';
import valorantAgents from './agents/valorantAgents';

export const maps = {
  csgo: csgoMaps,
  valorant: valorantMaps,
};

export const stuffs = {
  csgo: csgoStuffs,
  valorant: [],
};

export const agents = {
  valorant: valorantAgents,
};
