import React from 'react';
import './App.css';
import { AgChartsReact } from 'ag-charts-react';
import stats from './myjsonfile.json';

function App() {

    console.log('hejsan');
    console.log(stats);
    console.log('hejsan');

   const options = {
           autoSize: true,
           title: { text: 'Weight vs Height (by gender)' },
           subtitle: { text: 'with name labels' },
           series: [
               {
                   type: 'scatter',
                   title: 'Male',
                   data: stats,
                   xKey: 'vcCapitalPerCapita',
                   xName: 'Investment Per Capita',
                   yKey: 'propertyActivityPerCapita',
                   yName: 'Property Activity Per Capita',
                   sizeKey: 'cityPopulation',
                   sizeName: 'Investment Size',
                   labelKey: 'city',
                   marker: {
                       shape: 'square',
                       size: 6,
                       maxSize: 30,
                       fill: 'rgba(227,111,106,0.71)',
                       stroke: '#9f4e4a',
                   },
                   label: { enabled: true },
               }
           ],
           axes: [
               {
                   type: 'number',
                   position: 'bottom',
                   title: { text: 'Height' },
                   label: {
                       rotation: 45,
                       formatter: function (params: any) {
                           return params.value;
                       },
                   },
               },
               {
                   type: 'number',
                   position: 'left',
                   title: { text: 'Weight' },
                   label: {
                       formatter: function (params :any) {
                           return params.value;
                       },
                   },
               },
           ],
       }

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <main>
        <div style={{width: "800px", height: "800px"}}>
            <AgChartsReact options={options} />
        </div>
        </main>
    </div>
  );
}

export default App;
