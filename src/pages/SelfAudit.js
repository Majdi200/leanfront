import React, { Component } from "react";
import APIHandler from "../api/Handler";
import { Link } from "react-router-dom";

const apiHandler = new APIHandler();

export default class SelfAudit extends Component {
  state = {
    consultantId: null,
    auditeurId: null,
    chapters: []
  };

  checkAllFields() {
    return true;
  }

  componentDidMount() {
    apiHandler
      .get(process.env.REACT_APP_BACKEND_URL + "/api/chapter")
      .then(dbRes => this.setState({ chapters: dbRes.data }))
      .catch(dbErr => console.log(dbErr.response));
  }

  render() {
    if (!this.state.chapters)
      return (
        <div>
          <h3>Error when loading datas...</h3>
        </div>
      );
    console.log(this.state.chapters);
    return (
      <div>
        <div>
          <h2>Les Chapitres de l'audit</h2>
          <h4>Selectionner un Chapitre</h4>
        </div>
        <div>
          {this.state.chapters.map((oneChapter, index) => (
            <div className="chapters-list" key={index}>
              <Link to={`/audit/${oneChapter._id}`}>
                {oneChapter.chapter_name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
