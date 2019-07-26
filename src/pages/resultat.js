import React, { Component } from "react";
import { AuthConsumer } from "../auth/Guard";
import APIHandler from "../api/Handler";
import Axios from "axios";

const apiHandler = new APIHandler();

class Resultat extends Component {
  state = {
    chapters: []
  };

  componentDidMount() {
    this.getAll();
    // this.getRenderButton();
  }

  getAll = () => {
    apiHandler
      .get("/api/chapter")
      .then(dbRes => {
        this.setState({ chapters: dbRes.data });
      })
      .catch(dbErr => console.log(dbErr.response));
  };

  scoreTT = arr => {
    return arr.slice(0, 11).reduce((acc, curr) => acc + curr.reponse, 0);
  };

  sendEmail = () => {
    Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/post/send-result`,
      document.getElementById("result-content").innerHTML
    )
      .then(dbRes => {
        console.log(dbRes);
        this.setState({ message: dbRes.data, color: "green" });
      })
      .catch(dbErr => {
        console.log(dbErr.response);
        this.setState({ message: dbErr.response.data, color: "red" });
      });
  };

  render() {
    console.log(this.state.chapters);
    if (!this.state.chapters)
      return <h4>Oups... Je n'arrive pas a charger la page.</h4>;
    return (
      <AuthConsumer>
        {({ user }) => {
          return user ? (
            <div>
              <div id="result-content">
                <h5>
                  Nom: {user.firstname} {user.lastname}
                </h5>
                <p>Mail: {user.email}</p>
                <h5>Vos résultats :</h5>

                <div>
                  {user.score
                    .slice(0, this.state.chapters.length)
                    .map((oneScore, index) => {
                      return (
                        <p key={index}>
                          {" "}
                          <table className="table">
                            <thead className="thead-yellow">
                              <tr>
                                <th scope="col">
                                  Chapitre :{" "}
                                  {this.state.chapters[index].chapter_name}
                                  ------------------------------La note est :{" "}
                                  {oneScore.reponse}
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </p>
                      );
                    })}
                </div>
                <h5 style={{ textAlign: "center" }}>
                  Votre score total est de: {this.scoreTT(user.score)}
                </h5>
                <div style={{ textAlign: "center" }}>
                  {this.state.message ? (
                    <div
                      style={{
                        border: `1px solid ${this.state.color}`,
                        width: "20vw",
                        margin: "25px auto",
                        textAlign: "center",
                        color: `${this.state.color}`
                      }}
                    >
                      {this.state.message}
                    </div>
                  ) : null}
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={this.sendEmail}
                >
                  Envoyez vos résultats à notre consultant:
                </button>
              </div>
            </div>
          ) : (
            <h4>Vous devez etre connecté pour voir vos resultats.</h4>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default Resultat;
