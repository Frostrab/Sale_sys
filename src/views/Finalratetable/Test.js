import React, {PureComponent} from 'react'

import { Dropdown } from 'antd';


export default class Test extends PureComponent{

state = {
    locat:[{
        title: 'New York',
        selected: false,
        key: 'location'
    },
    {
      id: 1,
      title: 'Dublin',
      selected: false,
      key: 'location'
    },
    {
      id: 2,
      title: 'California',
      selected: false,
      key: 'location'
    },
    {
      id: 3,
      title: 'Istanbul',
      selected: false,
      key: 'location'
    },
    {
      id: 4,
      title: 'Izmir',
      selected: false,
      key: 'location'
    },
    {
      id: 5,
      title: 'Oslo',
      selected: false,
      key: 'location'
    }]
}

    render(){
        return(
            <div>



            </div>
        )
    }
}