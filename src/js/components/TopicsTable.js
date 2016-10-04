import React from "react";
import ReactDOM from "react-dom";

import * as firebase from 'firebase';
import _ from 'lodash';

// Firebase
const fbconfig = {
    apiKey: "AIzaSyBG6RABAtYE_59MiD9j2-L_Z4C5i3rJOZY",
    authDomain: "otl-react.firebaseapp.com",
    databaseURL: "https://otl-react.firebaseio.com",
    storageBucket: "otl-react.appspot.com",
    messagingSenderId: "531210504974"
};

const fb = firebase  
      .initializeApp(fbconfig)
      .database()
      .ref();

// ract-bootstrap-table from allenfang.github.io/react-bootstrap-table/start.html
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class TopicsTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      topics: []
    }

    fb.child('otlReact').on('value', (snapshot) => {
      var topicsVal = snapshot.val();
      var topics = _(topicsVal)
        .keys()
        .map((topicKey) => {
          var cloned = _.clone(topicsVal[topicKey]);
          cloned.key = topicKey;
          return cloned;
        })
        .value();
    
      this.setState({
        topics: topics
      });
      console.log("----------------")
      console.log(this.state.topics);
      console.log("----------------")
    });
  }

  render() {
    // console.log(this.state.inSprint);

    // static topics for table
    const Topics = [
      {
        id: 1,
        "shortList": "YES",
        "no": 1,
        "summary": "Ein Feature wenn das Passwort vergessen wurde",
        "description": 'Die User haben keine Möglichkeit ihr Passwort neu anzufordern. Bitte eine "Passwort vergessen" Funktion einbauen',
        "option": "Ein optionaler Text",
        "component": "SocialCom",
        "category": "FEATURE",
        "prio": "TRIVIAL",
        "responsive": "PO",
        "state": "TO-DO",
        "costModel": "COST SHARING",
        "affectsVersion": "1.2.2.1",
        "issueTicket": "SC-1234",
        "ticketText": "This is the place for the ticket text. The ticket text is in english.",
        "notes": "Notizen, die sonst nirgendwo rein passen",
        "inSprint": "aktuell",
        "updatedAt": "24. Jun 2016",
        "client": "O2"
      },
      {
        id: 2,
        "shortList": "no",
        "no": 2,
        "summary": "Ein Feature wenn das Passwort vergessen wurde",
        "description": 'Die User haben keine Möglichkeit ihr Passwort neu anzufordern. Bitte eine "Passwort vergessen" Funktion einbauen',
        "option": "Ein optionaler Text",
        "component": "SocialCom",
        "category": "FEATURE",
        "prio": "TRIVIAL",
        "responsive": "PO",
        "state": "TO-DO",
        "costModel": "COST SHARING",
        "affectsVersion": "1.2.2.1",
        "issueTicket": "SC-1234",
        "ticketText": "This is the place for the ticket text. The ticket text is in english.",
        "notes": "Notizen, die sonst nirgendwo rein passen",
        "inSprint": "aktuell",
        "updatedAt": "24. Jun 2016",
        "client": "O2"
      },
      {
        id: 304,
        "shortList": "YES",
        "no": 56,
        "summary": "Ein Feature wenn das Passwort vergessen wurde",
        "description": 'Die User haben keine Möglichkeit ihr Passwort neu anzufordern. Bitte eine "Passwort vergessen" Funktion einbauen',
        "option": "Ein optionaler Text",
        "component": "SocialCom",
        "category": "FEATURE",
        "prio": "TRIVIAL",
        "responsive": "PO",
        "state": "TO-DO",
        "costModel": "COST SHARING",
        "affectsVersion": "1.2.2.1",
        "issueTicket": "SC-1234",
        "ticketText": "This is the place for the ticket text. The ticket text is in english.",
        "notes": "Notizen, die sonst nirgendwo rein passen",
        "inSprint": "aktuell",
        "updatedAt": "24. Jun 2016",
        "client": "O2"
      }
    ];
    var choseShortlist = [
      "YES", "no"
    ]
    var componentTypes = [
      "Other (s. description)", "Facebook", "Twitter", "Instagram", "YouTube", "Google+", "GuteFrage", "Other SN", "Forums", "Agent Desktop", "Overview Panel", "Detail Panel", "Statistics", "FAQ", "Publishing", "Config", "Import", "Filters", "System in general"
    ];
    var categoryTypes = [
      "NA","FEATURE","BUG","IMPROVEMENT","PROJECT","STOPPED"
    ];
    var priorityTypes = [
      "TRIVIAL", "MINOR", "MAJOR", "CRITICAL", "BLOCKER"
    ];
    var responsiveTypes = [
      "PO", "PL", "QM"
    ];
    var stateTypes = [
      "NEW", "TO-DO", "ANALYSIS", "OPEN", "IN PROGRESS", "QA", "DONE", "REJECTED"
    ];
    var costModelTypes = [
      "ROADMAP", "COST-SHARING", "CLIENT PROJECT"
    ];
    var availableClients = [
      "O2", "Telefonica", "Bosch", "Norsk Tipping"
    ]
    
    function onAddRow(row) {
      //
    }
    function onRowSelect(row, isSelected){
      console.log(row);
      console.log("selected: " + isSelected)
    }

    function onSelectAll(isSelected){
      console.log("is select all: " + isSelected);
    }


    function onAfterSaveCell(row, cellName, cellValue) {
      var cellProp = cellName;
      var row = row;
      var now = new Date();
      var month = now.getMonth();    9 // liefert 0 - 11
      var year = now.getFullYear(); 2016 // YYYY (startet nicht bei 0)
      var day = now.getDate();     2 // liefert 1 - 31
      var minutes = now.getMinutes(); 
      var hour = now.getHours();    13 // liefert 0 - 23
      var actualDate = day + "." + month + "." + year + ", " + hour + ":" + minutes + " h"


      // method for updating a cell
      const updateTopic = () => fb.child(`otlReact/${row.key}`)
                                  .update({
                                    [cellProp]: cellValue,
                                    updatedAt: actualDate,
                                  }, response => response);
      const actions = {  
        updateTopic
      }; 
      updateTopic();
    } 
    var cellEditProp = {
      mode: "click",
      blurToSave: true,
      afterSaveCell: onAfterSaveCell
    };
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: onRowSelect,
      onSelectAll: onSelectAll
    };
    var shortListType = {
    "YES": "YES",
    "no": "no"
    };


    return ( 
      <div>
        {/*  <h1><b>Topics: {this.state.topics.description}</b></h1> */}
        <h4><b>TopicsTable</b> componente</h4>
        <BootstrapTable data={this.state.topics} tableHeaderClass="td-header" tableBodyClass="td-body" cellEdit={cellEditProp} remote={false} selectRow={selectRowProp} insertRow={true} search={true} options={ { onAddRow: this.props.onAddRow,  onCellEdit: this.props.onCellEdit } } deleteRow={true} >
          <TableHeaderColumn width="70" dataField="shortList" dataSort={true} editable={{type:'select', options:{values: choseShortlist}}} autoValue={true} >Short List</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="id" isKey={true} autoValue={true} >ID</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="no" dataSort={true} autoValue={true} >No</TableHeaderColumn>
          <TableHeaderColumn width="190" dataField="summary" dataSort={true} editable={{type:'textarea'}} autoValue={true} >Summary</TableHeaderColumn>
          <TableHeaderColumn width="190" dataField="option" dataSort={true} autoValue={true} editable={{type:'textarea'}} >Optional Comments</TableHeaderColumn>
          <TableHeaderColumn width="80" dataField="component" dataSort={true} editable={{type:'select', options:{values: componentTypes}}} autoValue={true} >Affected Component</TableHeaderColumn>
          <TableHeaderColumn width="76" dataField="category" dataSort={true} editable={{type:'select', options:{values: categoryTypes}}} autoValue={true} >Category</TableHeaderColumn>
          <TableHeaderColumn width="76" dataField="prio" dataSort={true} editable={{type:'select', options:{values: priorityTypes}}} autoValue={true} >Priority</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="responsive" dataSort={true} editable={{type:'select', options:{values: responsiveTypes}}} autoValue={true} >Resp. Role</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="state" dataSort={true} editable={{type:'select', options:{values: stateTypes}}} autoValue={true} >State</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="costModel" dataSort={true} editable={{type:'select', options:{values: costModelTypes}}} autoValue={true} >Cost Model</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="affectsVersion" dataSort={true} autoValue={true} >Affects Version</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="issueTicket" dataSort={true} autoValue={true} >Ticket in JIRA</TableHeaderColumn>
          <TableHeaderColumn width="190" dataField="ticketText" dataSort={true} autoValue={true} editable={{type:'textarea'}} >Ticket Text</TableHeaderColumn>
          <TableHeaderColumn width="170" dataField="notes" dataSort={true} autoValue={true} editable={{type:'textarea'}} >Notes</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="inSprint" dataSort={true} autoValue={true} >In Sprint</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="updatedAt" dataSort={true} autoValue={true} >Updated At</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="client" dataSort={true} editable={{type:'select', options:{values: availableClients}}} autoValue={true} >Client</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="key" autoValue={true} >Key</TableHeaderColumn>
        </BootstrapTable>
      
      </div>   
    );
  }
}
