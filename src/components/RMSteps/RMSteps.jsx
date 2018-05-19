import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Icon } from 'antd-mobile';

class RMSteps extends Component {
  static defaultProps = {
    stepList: [
      {
        name: '蔡晓鸥',
        title: '拒绝',
        description: '这里是发起审批原因详细的描述，全部展示可多行展示；这里，，，',
        time: 1526453153,
        type: 'refuse',
      },
      {
        name: '蔡晓鸥',
        title: '审批中',
        description: '这里是发起审批原因详细的描述，全部展示可多行展示；这里，，，',
        type: 'inApproval',
      },
      {
        name: '苏武强',
        title: '同意',
        description: '',
        time: 1526453153,
        type: 'agree',
      },
      {
        name: '刘勇',
        title: '发起审批',
        description: '这里是发起审批原因详细的描述，全部展示可多行展示；这里，，，',
        time: 1526453153,
        type: 'start',
      },
    ],
  };

  static propTypes = {
    stepList: PropTypes.array, // 数据数组
  };

  renderStepIcon = (type) => {
    switch (type) {
      case 'start':
        return <Icon type="check-circle" color="#c1c1c1" />;
      case 'agree':
        return <Icon type="check-circle" color="#2eb769" />;
      case 'inApproval':
        return <Icon type="check-circle" color="#fa915a" />;
      case 'refuse':
        return <Icon type="cross-circle-o" color="#f95557" />;
      default:
        return <Icon type="check-circle" color="#2eb769" />;
    }
  }

  renderStep = item => (
    <div className="rm-steps-item">
      <div className="rm-steps-item-name">
        {item.name}
      </div>
      <div className="rm-steps-item-tail" />
      <div className="rm-steps-item-icon">
        <span className="rm-steps-icon">
          {
            this.renderStepIcon(item.type)
          }
        </span>
      </div>
      <div className="rm-steps-item-content">
        <div className="rm-steps-item-title">
          {item.title}
        </div>
        <div className="rm-steps-description">
          {
            item.description ? item.description : null
          }
        </div>
        <div className="rm-steps-time">
          {
            item.time ?
            moment(item.time * 1000).format('YYYY-MM-DD HH:mm:ss') : null
          }
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <div className="rm-steps">
        {
          this.props.stepList.map(this.renderStep)
        }
      </div>
    );
  }
}

export default RMSteps;
