/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
import { Admin, Resource, fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { createBrowserHistory } from 'history';

import { TournamentList, TournamentShow, TournamentEdit, TournamentCreate } from './api/tournaments';
import { TeamList, TeamShow, TeamEdit, TeamCreate } from './api/teams';
import { MatchList, MatchShow, MatchEdit, MatchCreate } from './api/matches';
import { BetsList, BetsShow, BetsEdit, BetsCreate } from './api/bets';
import { ResultsList, ResultsShow, ResultsEdit, ResultsCreate } from './api/results';

const dataProvider = simpleRestProvider('https://footbet.pp.ua/admin', fetchUtils.fetchJson, 'X-Total-Count');
const history = createBrowserHistory();

const App = () => (
  <Admin basename="/admin" dataProvider={dataProvider} history={history}>
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
    <Resource
      name="results"
      list={ResultsList}
      show={ResultsShow}
      edit={ResultsEdit}
      create={ResultsCreate}
    />
  </Admin>
);

export default App;
