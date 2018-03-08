import React, { PureComponent } from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";
import Projet from "../projet";
import data from "./data";
import './styles.css';

class Dashboad extends PureComponent {
  render() {
    return <div className="projets" >{data.map(projet => <Projet project={projet} />)}</div>;
  }
}

export default Dashboad;
