import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card, Feed, Icon, Label } from "semantic-ui-react";
import Member from "./member";
import "./styles.css";

class Projet extends PureComponent {
  static propTypes = {
    project: PropTypes.shape()
  };
  test = () => {
    console.log("je teste");
  };
  render() {
    const { mode, title, categorie, date, members } = this.props.project;
    const color = mode === "Run" ? "green" : "yellow";
    const styleContent = {
      backgroundColor: color,
    };

    const styleHeader = {
      fontSize: "13px",
      marginBottom:"5px"
    };

    const style = {
      color: "black"
    };

    return (
      <div className="test">
        <Card onClick={this.test}>
          <Card.Content style={styleContent}>
            <Card.Header style={styleHeader}>
              <span>
                {title} débuté le {date}, {categorie}
              </span>
            </Card.Header>
            <Card.Meta style={style}>
              {" "}
              <Icon name="users" /> Members{" "}
            </Card.Meta>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <div>
                    {members.map(member => (
                      <Member
                        firstName={member.firstName}
                        name={member.name}
                        role={member.role}
                      />
                    ))}
                  </div>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Projet;
