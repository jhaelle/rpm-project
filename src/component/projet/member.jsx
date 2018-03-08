import React from "react";
import PropTypes from 'prop-types';
import { Label } from "semantic-ui-react";
import './styles.css';

const style= { marginBottom: "5px"};

const Member = ({name, firstName, role}) => (
  <Label as="a" image style={style}>
    {firstName} {name}, {role}
  </Label>
);

Member.propTypes = {
  name: PropTypes.string,
  firstName: PropTypes.string,
  role: PropTypes.string,
};

export default Member;
