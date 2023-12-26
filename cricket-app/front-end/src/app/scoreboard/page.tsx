'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import "./page.css";

const page = () => {
  const [match, setMatch] = useState<any>({});
  
  useEffect(() => {    
    (async () => {
      const res = await axios.get("http://localhost:3001/api/inning");
      setMatch(res.data[0]);
    })();
  }, []);

  return (
    <main>
      <section>
        <div
          className='border p-3'
          style={{ backgroundColor: "#0d6efd", color: "#fff" }}
        >
          <b>{match.teamA}</b> vs <b>{match.teamB}</b>, {match.inning} Inning
        </div>
        <div className='border p-3 d-flex ai-c jc-b'>
          <h3>{match.battingTeam}: {match.run}/{match.wicket} ({match.oversDone})</h3>
          <h3>CRR: {match.crr}</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Batting</th>
              <th>R(B)</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>&#127951;</span>
                Batsman 1
              </td>
              <td> 0(0) </td>
              <td> 0 </td>
              <td> 0 </td>
              <td> 0 </td>
            </tr>
            <tr>
              <td>Batsman 2</td>
              <td> 0(0) </td>
              <td> 0 </td>
              <td> 0 </td>
              <td> 0 </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Bowler</th>
              <th>Wkt - Run</th>
              <th>running over</th>
              <th>total overs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>bowler</td>
              <td>1 - 32</td>
              <td>0 3 4 6 W 2 0</td>
              <td>2.0</td>
            </tr>
          </tbody>
        </table>
        <div className='border p-3 d-flex jc-b'>
          <span>
            <b>Extras:</b> {match.extras}
          </span>
          <span>
            <b>WD:</b> {match.wd}
          </span>
          <span>
            <b>NB:</b> {match.nb}
          </span>
        </div>
        <hr />
        <div className='border mw-mc p-3'>
          <h3>Control Panel</h3>
          <button type='button'>1</button>
          <button type='button'>2</button>
          <button type='button'>3</button>
          <button type='button'>4</button>
          <button type='button'>6</button>
          <button type='button'>WD</button>
          <button type='button'>NB</button>
          <button type='button'>W</button>
          <br />
          <br />
          <label>Batsman: </label>
          <br />
          <span>&#127951;</span>
          <select name=''>
            <option value=''>--Select player--</option>
          </select>
          <br />
          <select name=''>
            <option value=''>--Select player--</option>
          </select>
          <br />
          <br />
          <label>Bowler: </label>
          <br />
          <select name=''>
            <option value=''>--Select player--</option>
          </select>
        </div>
      </section>
      <section>
        <div className='border p-3'>
          <h3>
            <center>Score Board</center>
          </h3>
          <div
            className='d-flex jc-b p-3'
            style={{ backgroundColor: "skyblue" }}
          >
            <b>IND: 25/3 (2 Overs)</b>
            <b>RR: 25.00</b>
          </div>
          <table>
            <thead>
              <tr>
                <th>Batter</th>
                <th>R(B)</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>palsd sd</td>
                <td>34(34)</td>
                <td>2</td>
                <td>1</td>
                <td>70</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Bowler</th>
                <th>O</th>
                <th>M</th>
                <th>R</th>
                <th>W</th>
                <th>NB</th>
                <th>WD</th>
                <th>Eco</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> adfasdf adf</td>
                <td>3</td>
                <td>0</td>
                <td>34</td>
                <td>2</td>
                <td>0</td>
                <td>2</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
          <br />
          <div
            className='d-flex jc-b p-3'
            style={{ backgroundColor: "#9fdd79" }}
          >
            <b>PAK: 25/3 (2 Overs)</b>
            <b>RR: 25.00</b>
          </div>
          <table>
            <thead>
              <tr>
                <th>Batter</th>
                <th>R(B)</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>palsd sd</td>
                <td>34(34)</td>
                <td>2</td>
                <td>1</td>
                <td>70</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Bowler</th>
                <th>O</th>
                <th>M</th>
                <th>R</th>
                <th>W</th>
                <th>NB</th>
                <th>WD</th>
                <th>Eco</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> adfasdf adf</td>
                <td>3</td>
                <td>0</td>
                <td>34</td>
                <td>2</td>
                <td>0</td>
                <td>2</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default page;
