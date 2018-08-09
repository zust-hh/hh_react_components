import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker, List, Button } from 'antd-mobile';
import Rate from 'rc-rate';

import RMFormButtonGroup from './RMFormButtonGroup';

import { interviewTimeMap, jobLevelMap } from '../../utils/map';

// eslint-disable-next-line
const Item = List.Item;
// eslint-disable-next-line
const Brief = Item.Brief;

class RMForm extends Component {
  static defaultProps = {
    // result: 0,
    duration: 0,
    score: 0,
    jobLevel: '',
    evaluationDesc: '',
  };

  static propTypes = {
    // result: PropTypes.number,
    duration: PropTypes.number,
    score: PropTypes.number,
    jobLevel: PropTypes.string,
    evaluationDesc: PropTypes.string,
  };

  state = {
    result: 0,
  }

  render() {
    return (
      <div className="rm-form">
        <List className="my-list">
          <Item style={{ width: '100%' }} multipleLine>
            应聘者：<span style={{ color: '#333' }}>陈伟霆</span>
            <Brief>
              <RMFormButtonGroup
                buttonList={
                  [
                    {
                      type: 0,
                      checked: false,
                      text: '通过',
                      // handleOnClick: this.
                    },
                    {
                      type: 1,
                      checked: false,
                      text: '待定',
                      // handleOnClick: this.
                    },
                    {
                      type: 2,
                      checked: false,
                      text: '淘汰',
                      // handleOnClick: this.
                    },
                  ]
                }
              />
              {/* <Button
                type="ghost"
                icon={this.props.result === 1 ? 'check' : null}
                className={this.props.result === 1 ? 'rm-success-btn-select' : 'rm-success-btn'}
                onClick={() => this.checkBtn(1)}
              >
                通过
              </Button>
              */}
            </Brief>
          </Item>
          <Picker
            data={interviewTimeMap}
            title="面试时长"
            cascade={false}
            extra="请选择面试时长"
            value={this.props.duration}
            // onOk={v => this.setState({ duration: v })}
          >
            <Item arrow="horizontal" className={this.props.duration && 'has-text'} >面试时长：</Item>
          </Picker>
          <Item extra={<Rate
            onChange={this.onChange}
            value={this.props.score}
            style={{ fontSize: 25 }}
            allowHalf
            allowClear={false}
          />}
          >面试评分：
          </Item>
          <Picker
            data={jobLevelMap}
            title="建议职级"
            cascade={false}
            extra="请选择建议职级"
            value={this.props.jobLevel}
            // onOk={v => this.setState({ jobLevel: v })}
          >
            <Item arrow="horizontal" className={this.props.jobLevel && 'has-text'}>建议职级：</Item>
          </Picker>
          <Item className={this.props.evaluationDesc ? 'evaluation-item has-text' : 'evaluation-item'} arrow="horizontal" extra={this.props.evaluationDesc ? this.props.evaluationDesc : '请填写综合评价'} onClick={this.handleChange}>综合评价：</Item>
          <Item extra={
            <Button
              type="ghost"
              className="rm-pending-btn"
              style={{ position: 'absolute', right: '20px', top: '10px' }}
              onClick={() => this.onSubmit()}
            >
              确定
            </Button>}
          />
        </List>
      </div>
    );
  }
}

export default RMForm;
