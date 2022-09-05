/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
import { Admin, Resource, fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { TournamentList, TournamentShow, TournamentEdit, TournamentCreate } from './api/tournaments';
import { TeamList, TeamShow, TeamEdit, TeamCreate } from './api/teams';
import { MatchList, MatchShow, MatchEdit, MatchCreate } from './api/matches';
import { BetsList, BetsShow, BetsEdit, BetsCreate } from './api/bets';

const dataProvider = simpleRestProvider('http://localhost:3000/admin', fetchUtils.fetchJson, 'X-Total-Count');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="tournaments"
      list={TournamentList}
      show={TournamentShow}
      edit={TournamentEdit}
      create={TournamentCreate}
    />
    <Resource
      name="team"
      list={TeamList}
      show={TeamShow}
      edit={TeamEdit}
      create={TeamCreate}
    />
    <Resource
      name="match"
      list={MatchList}
      show={MatchShow}
      edit={MatchEdit}
      create={MatchCreate}
    />
    <Resource
      name="bets"
      list={BetsList}
      show={BetsShow}
      edit={BetsEdit}
      create={BetsCreate}
    />
  </Admin>
);

export default App;
