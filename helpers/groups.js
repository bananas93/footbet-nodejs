/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */

class League {
  constructor(matches) {
    this.matches = matches;
    this.table = {};
  }

  getStandings() {
    this.matches.forEach((match) => {
      const homeTeam = match.homeTeam.name;
      const awayTeam = match.awayTeam.name;

      if (!this.table[homeTeam]) this.addToTable(match.group, homeTeam);
      if (!this.table[awayTeam]) this.addToTable(match.group, awayTeam);

      this.increasePlayed(match.group, [homeTeam, awayTeam], match.status);
      this.setResults(match.group, match);
      this.setGoals(match.group, homeTeam, match.homeGoals, match.awayGoals, match.status);
      this.setGoals(match.group, awayTeam, match.awayGoals, match.homeGoals, match.status);
      this.sortTable();
    });

    return this.table;
  }

  addToTable(group, team) {
    if (!this.table[group]) this.table[group] = [];
    if (!this.table[group].some((item) => item.team === team)) {
      this.table[group].push({
        id: team,
        team,
        played: 0,
        won: 0,
        lost: 0,
        drawn: 0,
        goalsScored: 0,
        goalsAgainst: 0,
        points: 0,
      });
    }
  }

  increasePlayed(group, teams, status) {
    teams.forEach((team) => {
      this.table[group].forEach((item) => {
        if (status === 'Завершено' || status === 'Live') {
          return item.team === team ? item.played += 1 : null;
        }
      });
    });
  }

  setResults(group, match) {
    const { homeGoals, awayGoals, status } = match;

    const homeTeam = match.homeTeam.name;
    const awayTeam = match.awayTeam.name;

    this.table[group].forEach((item) => {
      if (status === 'Завершено' || status === 'Live') {
        if (item.team === homeTeam) {
          if (homeGoals > awayGoals) {
            item.won++;
            item.points += 3;
          } else if (homeGoals < awayGoals) {
            item.lost++;
          } else {
            item.drawn++;
            item.points += 1;
          }
        }
        if (item.team === awayTeam) {
          if (homeGoals > awayGoals) {
            item.lost++;
          } else if (homeGoals < awayGoals) {
            item.won++;
            item.points += 3;
          } else {
            item.drawn++;
            item.points += 1;
          }
        }
      }
    });
  }

  setGoals(group, team, scored, against, status) {
    this.table[group].forEach((item) => {
      if (status === 'Завершено' || status === 'Live') {
        if (item.team === team) {
          item.goalsScored += scored;
          item.goalsAgainst += against;
        }
      }
    });
  }

  sortTable() {
    Object.entries(this.table).map((group) => group[1].sort((a, b) => b.points - a.points || (b.goalsScored - b.goalsAgainst) - (a.goalsScored - a.goalsAgainst) || b.goalsScored - a.goalsScored));
  }
}

module.exports = League;
