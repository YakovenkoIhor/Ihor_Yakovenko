import React from 'react';

import {connect} from "react-redux";
import {selectAddComletedInList} from "../../store/comletedChallenges/selectors"
import { Table } from 'antd';


const CompletedChallenges = ({card}) => {
          
      const columns = [
        {
          title: '',
          dataIndex: 'number',
          key: 'number',
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
            title: 'When',
            dataIndex: 'when',
            key: 'when',
        },
      ];
      
    return(
        <>       
            <h2>Copleted challenges</h2>
            <Table dataSource={card} columns={columns} />;
        </>       
    )
}

const mapStateToProps = state => ({
    card: selectAddComletedInList(state)
})

export default connect(mapStateToProps, null)(CompletedChallenges)