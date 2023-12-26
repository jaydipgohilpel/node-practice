"use client";
import { useEffect, useState } from "react";
import "./page.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState({});
  const [players, setPlayers] = useState([]);
  const [teamFormShown, setTeamFormShown] = useState(false);
  const [matchFormShown, setMatchFormShown] = useState(false);
  const [match, setMatch] = useState({
    teamA: "",
    teamB: "",
    overs: "",
    battingTeam: "",
  });
  // team
  useEffect(() => {
    (async () => {
      const teamsRes = await axios.get("http://localhost:3001/api/teams");
      if (teamsRes.status === 200) {
        console.log(teamsRes.data);

        setTeams(teamsRes.data);
      }
    })();
  }, []);

  const createTeam = async (e: any) => {
    e.preventDefault();
    const teamRes = await axios.post(
      "http://localhost:3001/api/teams",
      teamName
    );
    console.log(teamRes);
    if (teamRes.status === 201) {
      const player = players.map((p) => {
        return { name: p, teamId: teamRes.data._id };
      });
      const playersRes = await axios.post(
        "http://localhost:3001/api/players",
        player
      );
      if (playersRes.status === 201) {
        setTeamFormShown(false);
      }
    }

    console.log({ teamName, players });
  };
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    if (name === "teamName") {
      setTeamName({ name: value });
    } else {
      setPlayers((prev: any) => {
        return Object.values({ ...prev, [name]: value });
      });
    }
  };

  // match
  const createMatch = async (e: any) => {
    e.preventDefault();
    const matchRes = await axios.post(
      "http://localhost:3001/api/matches",
      match
    );
    if (matchRes.status === 201) {
      console.log(matchRes);
      router.push(`/scoreboard?match_id=${matchRes.data._id}`, {
        scroll: false,
      });
    }
  };
  const handleMatchInput = (e: any) => {
    const { name, value} = e.target;
    console.log({ name, value });
    
    // if (name === "teamA") {
    //   setMatch((prev) => {
    //     return { ...prev, teamA: value.name, teamA_id: value._id };
    //   });
    // } else if (name === "teamB") {
    //   setMatch((prev) => {
    //     return { ...prev, teamB: value.name, teamB_id: value._id };
    //   });
    // } else if (name === "battingTeam") {
    //   setMatch((prev) => {
    //     return { ...prev, battingTeam: value.name, battingTeam_id: value._id };
    //   });
    // } else{
    //   setMatch((prev) => {
    //     return { ...prev, [name]: value };
    //   });
    // }
  };
  return (
    <main>
      <section>
        <h2>Teams</h2>
        <ol>
          {teams?.map((team: any) => (
            <li key={team._id}>{team.name}</li>
          ))}
        </ol>
        <button type='button' onClick={() => setTeamFormShown((prev) => !prev)}>
          + Create Team
        </button>
        {teamFormShown && (
          <div className='border p-3 mw-mc'>
            <form onSubmit={createTeam}>
              <label>Team Name: </label>
              <br />
              <input
                type='text'
                name='teamName'
                required
                onChange={handleInput}
              />
              <br />
              <hr />
              <br />
              <b>Players</b>
              <br />
              <label>player 1 name: </label>
              <input
                type='text'
                name='player1'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 2 name: </label>
              <input
                type='text'
                name='player2'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 3 name: </label>
              <input
                type='text'
                name='player3'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 4 name: </label>
              <input
                type='text'
                name='player4'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 5 name: </label>
              <input
                type='text'
                name='player5'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 6 name: </label>
              <input
                type='text'
                name='player6'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 7 name: </label>
              <input
                type='text'
                name='player7'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 8 name: </label>
              <input
                type='text'
                name='player8'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 9 name: </label>
              <input
                type='text'
                name='player9'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 10 name: </label>
              <input
                type='text'
                name='player10'
                required
                onChange={handleInput}
              />
              <br />
              <label>player 11 name: </label>
              <input
                type='text'
                name='player11'
                required
                onChange={handleInput}
              />
              <br />
              <br />
              <button type='button' onClick={() => setTeamFormShown(false)}>
                Create
              </button>
              <button type='submit'>Create</button>
            </form>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h2>Match</h2>
        <button
          type='button'
          onClick={() => setMatchFormShown((prev) => !prev)}
        >
          + Create match
        </button>
        {matchFormShown && (
          <div className='border p-3 mw-mc'>
            <form onSubmit={createMatch}>
              <select name='teamA' onChange={handleMatchInput}>
                <option value=''>--Select team--</option>
                {teams?.map((team: any) => (
                  <option
                    key={team._id}
                    value={team.name}
                    disabled={team.name === match?.teamB}
                  >
                    {team.name}
                  </option>
                ))}
              </select>
              <span> vs </span>
              <select name='teamB' onChange={handleMatchInput}>
                <option value=''>--Select team--</option>
                {teams?.map((team: any) => (
                  <option
                    key={team._id}
                    value={team.name}
                    disabled={team.name === match?.teamA}
                  >
                    {team.name}
                  </option>
                ))}
              </select>
              <hr />
              <label>Overs: </label>
              <input name='overs' type='number' onChange={handleMatchInput} />
              <hr />
              <label>Batting: </label>
              <select name='battingTeam' onChange={handleMatchInput}>
                <option value=''>--Select team--</option>
                {match?.teamA && (
                  <option value={match?.teamA}>{match?.teamA}</option>
                )}
                {match?.teamB && (
                  <option value={match?.teamB}>{match?.teamB}</option>
                )}
              </select>
              <br />
              <br />
              <button type='button' onClick={() => setMatchFormShown(false)}>
                Cancel
              </button>
              <button type='submit'>Create</button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
};

export default page;
