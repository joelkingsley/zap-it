import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'material-ui/Grid';
import MenuAppBar from './pcomponents/MenuAppBar';
import Reboot from 'material-ui/Reboot';

import EnhancedTable from './pcomponents/EnhancedTable';
import ListOfTables from './pcomponents/ListOfTables';



let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}



function createColumn(columnId, numeric, label, disablePadding) {

  return { id: columnId, numeric: numeric, disablePadding: disablePadding, label: label || columnId }

}



function onDeleteRows(rowIDs) {

  alert(JSON.stringify(rowIDs));


}


class App extends Component {


  state = {
    tables: [
      {
        table_id: 0,
        table_name: 'first',
        columnNames: ['name', 'calories', 'fat', 'carbs', 'protein'],
        rows:
          [
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Donut', 452, 25.0, 51, 4.9),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
            createData('Honeycomb', 408, 3.2, 87, 6.5),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Jelly Bean', 375, 0.0, 94, 0.0),
            createData('KitKat', 518, 26.0, 65, 7.0),
            createData('Lollipop', 392, 0.2, 98, 0.0),
            createData('Marshmallow', 318, 0, 81, 2.0),
            createData('Nougat', 360, 19.0, 9, 37.0),
            createData('Oreo', 437, 18.0, 63, 4.0),
          ]

      },
      {
        table_id: 1,
        table_name: 'second',

    // columnData.push(createColumn("name", false, 'Dessert (100g serving)', true));
    // columnData.push(createColumn("calories", true, 'Calories'));
    // columnData.push(createColumn("fat", true, 'Fat (g)'));
    // columnData.push(createColumn("carbs", true, 'Carbs (g)'));
    // columnData.push(createColumn("protein", true, 'Protein (g)'));

        columnNames: ['name', 'calories', 'fat', 'carbs', 'protein'],
        rows:
          [
            createData('gbnbm', 305, 3.7, 67, 4.3),
            createData('dfgbhn', 452, 25.0, 51, 4.9),
            createData('lkmjn', 262, 16.0, 240, 6.0),
            createData('rhfdt', 19, 6.0, 24, 4.0),
            createData('qwer', 36, 16.0, 49, 3.9),
            createData('lkjhv', 408, 3.2, 87, 6.5),
            createData('mnhgb', 237, 9.0, 37, 4.3),
            createData('qwerfs', 375, 0.0, 94, 0.0),
            createData('yhn', 518, 26.0, 65, 7.0),
            createData('qazxcv', 392, 56, 98, 0.0),
            createData('tgbnjh', 318, 10, 81, 2.0),
            createData('qazxc', 360, 19.0, 69, 37.0),
            createData('yhb', 437, 18.0, 63, 74.0),
          ]

      },
      {
        table_id: 2,
        table_name: 'third',
        columnNames: ['name', 'calories', 'fat', 'carbs', 'protein'],
        rows:
          [
            createData('kjhgfvbn', 305, 3.7, 67, 4.3),
            createData('fgh', 452, 25.0, 51, 4.9),
            createData('rtyhg', 262, 16.0, 24, 6.0),
            createData('sdfghbv', 98, 6.0, 24, 4.0),
            createData('wertgvc', 356, 16.0, 49, 3.9),
            createData('sdfg', 408, 3.2, 45, 6.5),
            createData('rdtfhg', 237, 9.0, 37, 4.3),
            createData('ertyujnbv', 375, 0.0, 564, 0.0),
            createData('vbnvb', 518, 26.0, 65, 7.0),
            createData('gjghj', 392, 0.2, 98, 0.0),
            createData('fgh', 318, 0, 81, 2.0),
            createData('Nougat', 360, 19.0, 9, 37.0),
            createData('Oreo', 437, 18.0, 63, 4.0),
          ]

      }
    ],
    selectedTable: 2
  }

  constructor(){
    super();

  //   columnData = [];

  //   this.state.tables[this.state.selectedTable].columnNames.forEach((val,i)=>{

  //  columnData.push(createColumn(val, false, val, true));

  //   })
  }


  onDeleteRows(drows) {

    var newstate = {
      ... this.state,
    }

    var newrows = newstate.tables[this.state.selectedTable].rows.filter((row) => {

      for (var x in drows) {
        if (x.id === row.id) {
          return false;
        }
      }

      return true;

    });

    newstate.tables[this.state.selectedTable].rows = newrows;

    this.setState(newstate);

  }

  onChangeTable(table) {

    this.setState({
      selectedTable: table.table_id
    })

  }

  onRemoveTable(tableID) {

    var newstate = {
      ... this.state,
    }

    newstate = newstate.tables.filter((value, i) => {

      if (value.table_id === tableID)
        return false;

      return true;

    })

    this.setState(
      newstate
    );


  }

  onAddTableResult(res) {

    var newState = Object.assign({}, this.state);

    newState.tables.push({
      table_id: this.state.tables.length,
      table_name: res.table_name,
      columnNames: res.columnNames,
      rows : []
    });

    this.setState({
      newState
    })



   // alert(JSON.stringify(newState));
  }

  render() {





    var tableList = this.state.tables.map((value) => {

      return {
        table_name: value.table_name,
        table_id: value.table_id,
      }

    });



    return (

      <React.Fragment>

        <Reboot>

          <MenuAppBar />

          <Grid container spacing={12} >
            <Grid item xs={12} sm={3}>
              <ListOfTables tables={tableList} selectedTable={this.state.selectedTable}
                onAddTableResult={(res) => this.onAddTableResult(res)}
                onChangeTable={(val) => {
                  this.onChangeTable(val);
                }} />
            </Grid>
            <Grid item xs={12} sm={9}>
              <EnhancedTable tableName={this.state.tables[this.state.selectedTable].table_name} 
              rows={this.state.tables[this.state.selectedTable].rows} 
              columnData={this.state.tables[this.state.selectedTable].columnNames} 
              onAddRow={() => { }} 
              addNewRow = {(row)=>{

                counter++;
                
                var newState = Object.assign({},this.state, {
                  id:counter
                });

              newState.tables[this.state.selectedTable].rows=  [...newState.tables[this.state.selectedTable].rows,row]

                this.setState(newState);

                alert(JSON.stringify(row));

              }}
              onDeleteRows={onDeleteRows} />

            </Grid>
          </Grid>

        </Reboot>
      </React.Fragment>
    );
  }
}

export default App;
