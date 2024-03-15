import './listPage.scss';
import { listData } from '../../lib/dummydata';
import Filter from '../../components/filer/Filter';
import Card from '../../components/cards/Cards';
import * as React from 'react';
import Map from 'react-map-gl';
import BigMap from '../../components/map/map';

function ListPage() {
    //const data = listData;
    
    return (
        //<div className='listPage'>
            //<div className="listContainer">List
                //<div className="wrapper">
                    //<Filter/>
                    //{data.map(item=>(
                        //<Card key={item.id} item={item}/>
                    //))}
                //</div>
            //</div>

            <div className="mapContainer">
                <BigMap/>
            </div>
        //</div>
    );
}

export default ListPage;
