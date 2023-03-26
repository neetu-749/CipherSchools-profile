import { alignProperty } from '@mui/material/styles/cssUtils';
import { positions } from '@mui/system';
import React from 'react';

// Import the calendarheatmap
import CalendarHeatmap from 'react-calendar-heatmap';


export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            // Some dates to render in the heatmap
            values: [
                { date: '2016-01-01', count: 4 },
                { date: '2016-01-22', count: 1 },
                { date: '2016-01-30', count: 3 },
                { date: new Date(2016, 0, 4)}
            ],
            // How many days should be shown
            numDays: 365
        }

        this.onClick = this.onClick.bind(this);
    }
 
    onClick(value) {
        console.log(value);
    }

    render() {

        // <div class= 'mp-heat-map-foot'>
        //     <span>Less</span>
        // </div>
        return (
            <div style={{width: 1000, marginTop: 10, alignItems:'center'} }>
                <CalendarHeatmap
                
                    endDate={new Date('2023-01-01')}
                    numDays={this.state.numDays}
                    values={this.state.values}
                    onClick={this.onClick}
                />
                <div class= 'mp-heat-map-foot'>
                    <span style={{padding: 10}} >Less</span>
                    <svg width="12" height="12">
                        <rect width="12" height="12" fill="#ffffff" padding-left='10'></rect>
                    </svg>
                    <svg width="12" height="12">
                        <rect width="12" height="12" fill="#f3dcc4" padding='10'></rect>
                    </svg>
                    <svg width="12" height="12">
                        <rect width="12" height="12" fill="#e5b583" padding='10'></rect>
                    </svg>  
                    <svg width="12" height="12" >
                        <rect width="12" height="12" fill="#d48432" padding='10'></rect>
                    </svg>
                    <svg width="12" height="12">
                        <rect width="12" height="12" fill="#c87a2a" padding='10'></rect>
                    </svg>        
                    <span style={{padding: 10}}>More</span>
                </div>
            </div>
        );
    }
}
