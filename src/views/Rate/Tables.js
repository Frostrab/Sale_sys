
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Pagination, Input, Card } from 'antd';

//import './index.css';
import Ratelist from './Ratelist';


const { Column, ColumnGroup } = Table;

export default class Rate extends PureComponent{

    state = {
        
         data2:[{
            
                key: '1',
                content: 'Result(What to Do)',
                por: '55%',
                head: '50%',
                sor: '35%',
                tiger:'30%',
                rate4:'A'
              },{
            
                key: '2',
                content: 'ปริมาณของงาน',
                por: '25%',
                head: '20%',
                sor: '15%',
                tiger:'10%',
              },
              {
                key: '3',
                content: 'คุณภาพของงาน',
                por: '30%',
                head: '30%',
                sor: '20%',
                tiger:'20%',
              },
               {
                key: '4',
                content: 'Method(How to do) - Behavior',
                por: '25%',
                head: '30%',
                sor: '35%',
                tiger:'40%',
              }, {
                key: '5',
                content: 'การทำงานเชิงกลยุทธ์',
                por: '',
                head: '',
                sor: '10%',
                tiger:'10%',
              }, {
                key: '6',
                content: 'การวางแผนและจัดลำดับความสำคัญของงาน',
                por: '5%',
                head: '5%',
                sor: '',
                tiger:'',
              }, {
                key: '7',
                content: 'การนำการเปลี่ยนแปลง',
                por: '',
                head: '',
                sor: '5%',
                tiger:'10%',
              },{
                key: '8',
                content: 'การทำงานอย่างมีระบบและมีการตัดสินใจที่ดี',
                por: '',
                head: '',
                sor: '10%',
                tiger:'10%',
              },{
                key: '9',
                content: 'การแก้ไขปัญหาและการตัดสินใจ',
                por: '10%',
                head: '5%',
                sor: '',
                tiger:'',
              }, {
                key: '10',
                content: 'ความคิดริเริ่มที่สามารถนำมาพัฒนาปรับปรุงงาน',
                por: '',
                head: '5%',
                sor: '5%',
                tiger:'',
              }, {
                key: '11',
                content: 'การติดต่อสื่อสารและประสานงาน',
                por: '5%',
                head: '5%',
                sor: '',
                tiger:'',
              }, {
                key: '12',
                content: 'การพัฒนาผู้ใต้บังคับบัญชา',
                por: '',
                head: '',
                sor: '5%',
                tiger:'10%',
              }, {
                key: '13',
                content: 'การพัฒนาตนเอง',
                por: '5%',
                head: '5%',
                sor: '',
                tiger:'',
              }, {
                key: '14',
                content: 'Singha Way(How to Do) - Core Values',
                por: '20%',
                head: '20%',
                sor: '30%',
                tiger:'30%',
              }, {
                key: '15',
                content: 'Family',
                por: '5%',
                head: '5%',
                sor: '7.5%',
                tiger:'7.5%',
              }, {
                key: '16',
                content: 'Courage',
                por: '5%',
                head: '5%',
                sor: '7.5%',
                tiger:'7.5%',
              }, {
                key: '17',
                content: 'Premium Quality',
                por: '5%',
                head: '5%',
                sor: '7.5%',
                tiger:'7.5%',
              },{
                key: '18',
                content: 'Hapiness',
                por: '5%',
                head: '5%',
                sor: '7.5%',
                tiger:'7.5%',
                rate4: this.props.ValuesTest
          },],
          data1:[{
            key: '1',
      content: 'Result(What to Do)',
      por: '55%',
      head: '50%',
      sor: '35%',
      tiger:'30%',
    }, {
      key: '2',
      content: 'Method(How to do) - Behavior',
      por: '25%',
      head: '30%',
      sor: '35%',
      tiger:'40%',
    }, {
      key: '3',
      content: 'Singha Way(How to Do) - Core Values',
      por: '20%',
      head: '20%',
      sor: '30%',
      tiger:'30%',
    
          }],
          
          col1:[{
            title: 'ปัจจัยประเมิณ',
            dataIndex: 'content',
            key: 'content',
            
          }, {
            title: 'ป',
            dataIndex: 'por',
            key: 'por',
          }, {
            title: 'หน',
            dataIndex: 'head',
            key: 'head',
          }, {
            title: 'ศ',
            key: 'sor',
            dataIndex: 'sor',
          }, {
            title: 'ส',
            key: 'tiger',
            dataIndex:'tiger',
    
          }],
          col2:[{
            title: 'ปัจจัยประเมิณ',
            dataIndex: 'content',
            key: 'content',
            
          }, {
            title: '',
            dataIndex: 'por',
            key: 'por',
          },{
            title: 'ประเมิณ',
            dataIndex: 'rate1',
            key: 'rate1',
            render: () => (
                <Ratelist />),
    
          }]
    }

       
    render(){
        return(
            <div>
            <Card
      
            style={{ width: "100%" }}
            >
            <Table size="small" columns={this.state.col1} dataSource={this.state.data1} pagination={false} />
            </Card>
            <Card
            title="แบบประเมิณ"
            style={{ width: "100%" }}
>
            <Table size="small" columns={this.state.col2} dataSource={this.state.data2} pagination={false} />
    
            </Card>
    
    
   
  
            </div>
        )
    }
}
          