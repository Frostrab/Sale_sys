import React, { PureComponent } from 'react'
import {Tabs} from 'antd'
import GapAnaly from './gap-analysis-job'
import TestType from './test-type'
import SkillType from './skill-type'
import Skill from './skill'
import Certificate from './certificate'
const TabPane = Tabs.TabPane
const callback = (key)=>{
     console.log(key)
}
export default class Index extends PureComponent {
    render(){
        return(
             <div>
                <Tabs onChange={callback} type="card">
                    <TabPane tab="Skill" key="1"><Skill /></TabPane>
                    <TabPane tab="Skill Type" key="2"><SkillType /></TabPane>
                    <TabPane tab="Skill Gap Analysis" key="3"><GapAnaly /></TabPane>                    
                    <TabPane tab="Certificate Type" key="4"><Certificate /></TabPane>
                    <TabPane tab="Test Type" key="5"><TestType /></TabPane>
                </Tabs>,
             </div>
        )
    }
    
}