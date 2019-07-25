// import React from "react";
import React, { Component } from 'react'
import '../index.css'
import { MDBCol, MDBFormInline, MDBBtn, MDBSelect , MDBSelectOptions, MDBSelectOption, MDBSelectInput} from "mdbreact";
class SearchPage extends Component {

 

render() {
    return (
<div>

      <input className="form-control mr-sm-2" className="lineMeKro" type="text" placeholder="Search" aria-label="Search" />
        <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
          Search
        </MDBBtn>
</div>
    );
  }
}

export default SearchPage;