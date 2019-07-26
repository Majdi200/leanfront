import React from "react";
import APIHandler from "../api/Handler";
import axios from "axios";
import { AuthConsumer } from "../auth/Guard";
import { Link } from "react-router-dom";

const apiHandler = new APIHandler();

export default class SelfAuditDetails extends React.Component {
  state = {
    chaptersId: [],
    chapterDetails: {
      responses: []
    }
  };

  constructor(props) {
    super(props);
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");
      this.setState();
    });
  }

  handleCheck = evt => {
    // console.log(index);
    // evt.target.checked =
  };

  componentDidMount() {
    this.getOne(this.props.match.params.id);
    this.getAll();
  }

  getAll = () => {
    apiHandler
      .get(process.env.REACT_APP_BACKEND_URL + "/api/chapter")
      .then(dbRes => {
        const chaptersId = [];
        dbRes.data.forEach(oneChapter => {
          chaptersId.push(oneChapter._id);
        });
        this.setState({ chaptersId: chaptersId });
      })
      .catch(dbErr => console.log(dbErr.response));
  };

  getOne = id => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/chapter/" + id)
      .then(apiRes => {
        this.setState({ chapterDetails: apiRes.data });
      })
      .catch(apiErr => console.error(apiErr));
  };

  getChapterIndex = () => {
    return this.state.chaptersId.indexOf(this.props.match.params.id);
  };

  getNextChapterId = () => {
    return this.state.chaptersId[this.getChapterIndex() + 1];
  };

  getNextChapter = () => {
    this.getOne(this.state.chaptersId[this.getChapterIndex() + 1]);
  };

  getPrevChapterId = () => {
    return this.state.chaptersId[this.getChapterIndex() - 1];
  };

  getPrevChapter = () => {
    this.getOne(this.state.chaptersId[this.getChapterIndex() - 1]);
  };

  UserVoting = (u, c, i) => {
    apiHandler
      .update(`/api/users/addResponse/${u}`, { chapitre: c, reponse: i })
      .then(dbRes => {
        console.log(dbRes);
      })
      .catch(dbErr => console.log(dbErr.response));
  };

  render() {
    const { chapterDetails } = this.state;
    if (!chapterDetails) return <h3>Chargements...</h3>;
    console.log(this.getChapterIndex(), this.state);
    return (
      <AuthConsumer>
        {({ user }) => {
          return (
            <>
              <div>
                <h2>Cheklist D'audit</h2>
                <h4>Cocher la réponse qui convient</h4>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">
                        Chapitre : {chapterDetails.chapter_name} N° :{" "}
                        {chapterDetails.chapter_number}
                      </th>
                      <th scope="col">Check</th>
                      <th scope="col"> Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chapterDetails.responses.map((response, index) => (
                      <tr key={index}>
                        <td>{response}</td>
                        <td>
                          <input
                            type="radio"
                            name={`chapter${chapterDetails.chapter_number}`}
                            onChange={() => this.handleCheck(index)}
                            onClick={() =>
                              this.UserVoting(
                                user._id,
                                chapterDetails.chapter_number,
                                index
                              )
                            }
                          />
                        </td>
                        <td> {index}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="chapterButton">
                  <Link to={`/audit/${this.getPrevChapterId()}`}>
                    {chapterDetails.chapter_number === 1 ? (
                      <button
                        style={{ display: "none" }}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.getPrevChapter}
                      >
                        PRECEDENT
                      </button>
                    ) : (
                      <button
                        style={{ display: "block" }}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.getPrevChapter}
                      >
                        PRECEDENT
                      </button>
                    )}
                  </Link>
                  {chapterDetails.chapter_number === 11 ? (
                    <Link to={"/resultat"}>
                      <button type="button" className="btn btn-dark">
                        RESULTATS
                      </button>
                    </Link>
                  ) : (
                    <Link to={`/audit/${this.getNextChapterId()}`}>
                      <button
                        style={{ display: "block" }}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.getNextChapter}
                      >
                        SUIVANT
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </>
          );
        }}
      </AuthConsumer>
    );
  }
}
