import React from "react";
import ReactDOM from "react-dom";

import * as firebase from 'firebase';
import Slider from 'react-rangeslider';
import _ from 'lodash';
import moment from 'moment';
import $ from 'jquery';

// Firebase
const fbconfig = {
  apiKey: "AIzaSyBG6RABAtYE_59MiD9j2-L_Z4C5i3rJOZY",
  authDomain: "otl-react.firebaseapp.com",
  databaseURL: "https://otl-react.firebaseio.com",
  storageBucket: "otl-react.appspot.com",
  messagingSenderId: "531210504974"
};

const fireb = firebase
  .initializeApp(fbconfig)
  .database();

const fb = fireb
  .ref();


// ract-bootstrap-table from allenfang.github.io/react-bootstrap-table/start.html
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// static topics for table
const staticTopics = [
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


// Variables for pulldowns
var choseShortlist = [
  "YES", "no"
]
var componentTypes = [
  "Other (s. description)", "Facebook", "Twitter", "Instagram", "YouTube", "Google+", "GuteFrage", "Other SN", "Forums", "Agent Desktop", "Overview Panel", "Detail Panel", "Statistics", "FAQ", "Publishing", "Config", "Import", "Filters", "System in general"
];
var categoryTypes = [
  "NA", "FEATURE", "BUG", "IMPROVEMENT", "PROJECT", "STOPPED"
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
  "O2", "Telefonica", "Bosch", "Norsk Tipping", "Comvendo", "andere"
]
var clientsFilter = {
  "O2": "O2",
  "Telefonica": "Telefonica",
  "Bosch": "Bosch",
  "Norsk Tipping": "Norsk Tipping",
  "Comvendo": "Comvendo",
  "andere": "andere"
}


var shortListType = {
  "YES": "YES",
  "no": "no"
};

let td = document.getElementsByTagName("td");



export default class TopicsTable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      topics: [],
      value: 5, /* Start value for rageslider */
      shortList: "YES",
    }
  }



  componentDidMount() {
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
    });


    $(document).ready(function () {
      var td = $("td");
      console.log("doc is ready");
      console.log("mousemove");

      td.mousemove(function () {
        $("td:contains('CRITICAL')").css({ "color": "OrangeRed", "font-weight": "bold" });
      })
    });
  }

  handleSliderChange = (value) => {
    this.setState({
      value: value
    });
  }


  render() {

    moment.locale('de');
    console.log("moment.locale(): ");
    console.log(moment.locale());

    var now = new Date();
    var month = now.getMonth(); 9 // liefert 0 - 11
    var year = now.getFullYear(); 2016 // YYYY (startet nicht bei 0)
    var day = now.getDate(); 2 // liefert 1 - 31
    var minutes = now.getMinutes();
    var hour = now.getHours(); 13 // liefert 0 - 23
    // var actualDate = year + "-" + month + "-" + day + "--" + hour + ":" + minutes + " time";
    const dataTopics = this.state.topics;

    let actualDate = moment().format('YYYY-MM-DD, kk:mm:ss');
    console.log("actualDate: ");
    console.log(actualDate);

    let { value } = this.state;

    // functions for table manipulation
    function onRowSelect(row, isSelected) {
      console.log(row);
      console.log("Is minimum one row selected?: ")
      if (isSelected) { console.log("YES"); } else { console.log("NO"); }
    }

    function onSelectAll(isSelected) {
      console.log("Are all rows selected?: ");
      if (isSelected) { console.log("YES"); } else { console.log("NO"); }

    }

    function onAfterSaveCell(row, cellName, cellValue) {
      var cellProp = cellName;
      var row = row;
      console.log("row onAfterSaveCell:")
      console.log(row)
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

    // !!!!! TODO: Change prefix of specific number count when client changes with select input         
    // !!!!! ----------------------------------------------------------------------------------

    function onAfterInsertRow(row) {

      // Retrieving client selection from input
      console.log("cotent of 'row': ");
      console.log(row);
      let client = row.client;
      console.log("client: ");
      console.log(client);
      console.log("===================================");
      let counterPrefix = "";
      let counterTableName = "";
      switch (client) {
        case "O2":
          counterPrefix = "o2-";
          counterTableName = "o2Counter";
          console.log("Kunde: O2 - prefix ist jetzt: '" + counterPrefix + "'");
          break;
        case "Telefonica":
          counterPrefix = "te--";
          counterTableName = "telefonicaCounter";
          console.log("Kunde: Telefonica - prefix ist jetzt: '" + counterPrefix + "'");
          break;
        case "Bosch":
          counterPrefix = "bo-";
          counterTableName = "boshCounter";
          console.log("Kunde: Bosch - prefix ist jetzt: '" + counterPrefix + "'");
          break;
        case "Norsk Tipping":
          counterPrefix = "nt-";
          counterTableName = "norskTippingCounter";
          console.log("Kunde: Norsk Tipping - prefix ist jetzt: '" + counterPrefix + "'");
          break;
        case "Comvendo":
          counterPrefix = "co-";
          counterTableName = "comvendoCounter";
          console.log("Kunde: Comvendo - prefix ist jetzt: '" + counterPrefix + "'");
          break;
        case "andere":
          counterPrefix = "yz-";
          counterTableName = "yzOthersCounter";
          console.log("Kunde: andere - prefix ist jetzt: '" + counterPrefix + "'");
          break;
        default:
          console.log("NO MATCHING CLIENT!!!!!");
      }

      // Grabbing the table 'otlReact'
      let otlReact = fb.child('otlReact');

      // Get a key for a new Post.
      var newTopicKey = otlReact.push().key;

      // Getting the new row
      var newRow = row;
      newRow.createdAt = actualDate;
      newRow.shortList = "YES";
      newRow.state = "NEW"

      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      // updates[newTopicKey] = row;
      updates[newTopicKey] = newRow;

      //--> INCREASING THE NUMBER COUNTER <--//
      // Variable for changing counter by Client
      let counterTable = counterTableName;

      // Counter referenz in DB 
      let dbCounter = fb.child(counterTable);

      // Checking counter if value with .once() -> snapshot 
      // (with ".on()" would generate an infinite loop)
      dbCounter.once('value', function (snapshot) {

        // Retrieving value of the snapshot 
        // - the actual count in this property
        let dbCounterReadString = snapshot.val();
        console.log("typeof dbCounterReadString: ");
        console.log(typeof dbCounterReadString);


        // Slicing prefix from counter-string
        let stringNumber = "";
        if (dbCounterReadString == null) {
          dbCounterReadString = counterPrefix + "00000000";
        }
        stringNumber = dbCounterReadString.substring(3);
        console.log("typeof stringnumber: ");
        console.log(typeof stringnumber);
        let unPrefixedCounter = parseInt(stringNumber);
        console.log("unPrefixedCounter:");
        console.log(unPrefixedCounter);
        console.log("typeof unPrefixedCounter: ");
        console.log(typeof unPrefixedCounter);

        // Adding +1 to actual count
        let dbCounterVal = unPrefixedCounter + 1;
        console.log("dbCounterVal: ");
        console.log(dbCounterVal);

        // Generating leading zeros for counter
        let paddedCount = pad(dbCounterVal, 8);
        function pad(n, width, z) {
          z = z || '0';
          n = n + '';
          return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }
        console.log("paddedCount: ");
        console.log(paddedCount);

        // Concatenating prefix and count
        let prefixedCounter = counterPrefix + paddedCount;
        console.log(prefixedCounter);

        // Save new incremented number to DB
        var dbCounterUpdates = {}

        //dbCounterUpdates['counter'] = dbCounterVal;
        dbCounterUpdates[counterTable] = prefixedCounter;
        fb.update(dbCounterUpdates);

        // Update cell "number" with client prefixed counter 
        fb.child(`otlReact/${newTopicKey}`).update({ number: prefixedCounter }, response => response);

      });

      return otlReact
        .update(updates)
        .then(function () {
          console.log("Insertion of row succeeded.")
        })
        .catch(function (error) {
          console.log("Insertion of row failed: " + error.message)
        });

    }
    function handleOnDeleteRow(row) {
      console.log("handleOnDeleteRow - row: ");
      console.log(row);
    }
    function onAfterDeleteRow(rowKeys) {
      console.log("onAfterDeleteRow - rowKeys: ");
      console.log(rowKeys);

      rowKeys.forEach(function (currentValue, index, originalArray) {
        console.log("currentValue: ");
        console.log(currentValue);

        var topicToDelete = fb.child('otlReact/' + currentValue);
        console.log("topicToDelete: ");
        console.log(topicToDelete);
        topicToDelete.remove()
          .then(function () {
            console.log("Remove succeeded.")
          })
          .catch(function (error) {
            console.log("Remove failed: " + error.message)
          });
      });
    }

    function afterTableComplete() {
      var td = $("td");
      $("td:contains('CRITICAL')").css({ "color": "OrangeRed", "font-weight": "bold" });
      $("td:contains('TRIVIAL')").css({ "color": "grey", "font-weight": "normal" });
      $("td:contains('MINOR')").css({ "color": "DeepSkyBlue" });
      $("td:contains('MAJOR')").css({ "color": "GoldenRod", "font-weight": "bold" });
      $("td:contains('FEATURE')").css({ "color": "DeepSkyBlue" });
      $("td:contains('IMPROVEMENT')").css({ "color": "LimeGreen" });
      $("td:contains('BUG')").css({ "color": "red" });
      $("td:contains('PROJECT')").css({ "color": "DarkSlateGray" });
      $("td:contains('STOPPED')").css({ "color": "DarkGray" });
      $("td:contains('NEW')").css({ "background-color": "PowderBlue" });
      $("td:contains('TO-DO')").css({ "background-color": "PaleGoldenRod", "color": "DarkGray" });
      $("td:contains('ANALYSIS')").css({ "background-color": "Silver" });
      $("td:contains('IN PROGRESS')").css({ "background-color": "Khaki" });
      $("td:contains('OPEN')").css({ "color": "white", "background-color": "Red" });
      $("td:contains('QA')").css({ "background-color": "Aquamarine" });
      $("td:contains('DONE')").css({ "background-color": "OliveDrab", "color": "white" });
      $("td:contains('REJECTED')").css({ "background-color": "Thistle" });
      $("td:contains('CRITICAL')").css({ "color": "OrangeRed", "font-weight": "bold" });
      $("td:contains('BLOCKER')").css({ "color": "FireBrick", "font-weight": "bold" });
      $("td:contains('YES')").css({ "background-color": "YellowGreen", "font-weight": "bold", "color": "white" });
      $("td:contains('no')").css({ "background-color": "inherit", "font-weight": "bold", "color": "DarkGray" });
      $("td:contains('CLIENT-PROJECT')").css({ "color": "darkslategray", "font-weight": "bold" });
      $("td:contains('COST-SHARING')").css({ "color": "darkslategray", "font-weight": "bold" });
    }

    // PROPERTIES AND OPTIONS
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
      onSelectAll: onSelectAll,
      showOnlySelected: true
    };
    const options = {
      afterInsertRow: onAfterInsertRow,
      onDeleteRow: handleOnDeleteRow,
      afterDeleteRow: onAfterDeleteRow,
      paginationShowsTotal: true,
      noDataText: '-',
      hideSizePerPage: false,
      sizePerPageList: [3, 5, 10, 15, 25, 40, 60],
      clearSearch: true,
      sizePerPage: this.state.value,
      afterTableComplete: afterTableComplete
    }


    return (
      <div>
        {/*  <h1><b>Topics: {this.state.topics.description}</b></h1> */}
        <div className="container">
          <div className="row">
            <div className="col- md-4 col-md-offset-2">
              <h1>Open Topics List</h1>
              <p>Check all your open topics with several clients.</p>
            </div>
            <br />
          </div>
        </div>
        <div className="col- md-1 col-md-offset-10">
          <div className="horizontal-slider">
            <Slider
              value={value}
              orentation="horizontal"
              min={0}
              max={150}
              step={1}
              onChange={this.handleSliderChange}
              />
            <div className="value">Number of listed topics: {value}</div>
          </div>
        </div>


        <BootstrapTable data={dataTopics}
          insertRow={true}
          options={options}
          tableHeaderClass="td-header"
          tableBodyClass="td-body"
          cellEdit={cellEditProp}
          selectRow={selectRowProp}
          search={true}
          hover={true}
          condensed={true}
          deleteRow={true}
          multiColumnSearch={true}
          exportCSV={true}
          striped={true}
          pagination={true}
          paginationShowsTotal={true}
          ignoreSinglePage={true}
          searchPlaceholder={"Search ..."}
          noDataText={"-"}
          >
          <TableHeaderColumn width="70" filter={{ type: 'SelectFilter', options: shortListType }} dataField="shortList" dataSort={true} editable={{ type: 'select', options: { values: choseShortlist } }} hiddenOnInsert={true} >Short List</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="number" dataSort={true} hiddenOnInsert={true} editable={false} >#</TableHeaderColumn>
          <TableHeaderColumn width="190" dataField="summary" headerAlign="left" dataSort={true} editable={{ type: 'textarea' }} >Summary</TableHeaderColumn>
          <TableHeaderColumn width="190" dataField="option" dataSort={true} editable={{ type: 'textarea' }} >Optional Comments</TableHeaderColumn>
          <TableHeaderColumn width="80" dataField="component" headerAlign="left" dataSort={true} editable={{ type: 'select', options: { values: componentTypes } }} >Affected Component</TableHeaderColumn>
          <TableHeaderColumn width="76" dataField="category" dataSort={true} editable={{ type: 'select', options: { values: categoryTypes } }} >Category</TableHeaderColumn>
          <TableHeaderColumn width="76" dataField="prio" dataSort={true} editable={{ type: 'select', options: { values: priorityTypes } }} >Priority</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="responsive" dataSort={true} editable={{ type: 'select', options: { values: responsiveTypes } }} >Resp. Role</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="state" dataSort={true} editable={{ type: 'select', options: { values: stateTypes } }} hiddenOnInsert={true} >State</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="costModel" dataSort={true} editable={{ type: 'select', options: { values: costModelTypes } }} >Cost Model</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="affectsVersion" dataSort={true} hiddenOnInsert={true} >Affects Version</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="issueTicket" dataSort={true} hiddenOnInsert={true} >Ticket in JIRA</TableHeaderColumn>
          <TableHeaderColumn width="190" dataField="ticketText" dataSort={true} editable={{ type: 'textarea' }} hiddenOnInsert={true} >Ticket Text</TableHeaderColumn>
          <TableHeaderColumn width="170" dataField="notes" dataSort={true} editable={{ type: 'textarea' }} >Notes</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="inSprint" dataSort={true} hiddenOnInsert={true} >In Sprint</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="updatedAt" dataSort={true} hiddenOnInsert={true} >Updated At</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="createdAt" dataSort={true} hiddenOnInsert={true} >Created At</TableHeaderColumn>
          <TableHeaderColumn width="70" filter={{ type: 'SelectFilter', options: clientsFilter }} dataField="client" dataSort={true} editable={{ type: 'select', options: { values: availableClients } }}>Client</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="key" isKey={true} autoValue={true} hidden={true} hiddenOnInsert={true} >key</TableHeaderColumn>
        </BootstrapTable>

      </div >
    );
  }
}
