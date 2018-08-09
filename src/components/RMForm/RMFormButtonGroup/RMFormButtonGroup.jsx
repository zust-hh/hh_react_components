import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd-mobile';

import pendingIcon from '../../../images/pending.png';

class RMFormButtonGroup extends Component {
  static propTypes = {
    buttonList: PropTypes.array.isRequired, // 数据数组
  };

  btnIcon = [
    'check',
    <img alt="icon" src={pendingIcon} className="rm-steps-icon" />,
    'cross',
  ];

  btnClassName = [
    'rm-success-btn',
    'rm-pending-btn',
    'rm-eliminate-btn',
    'rm-success-btn-select',
    'rm-pending-btn-select',
    'rm-eliminate-btn-select',
  ];

  renderButton = (item, index) => (
    <Button
      key={index}
      type="ghost"
      icon={item.checked ? this.btnIcon[item.type] : null}
      className={item.checked ? this.btnClassName[item.type + 3] : this.btnClassName[item.type]}
      onClick={() => this.checkBtn(2)}
    >
      {item.text}
    </Button>
  )

  render() {
    return (
      <div>
        {
          this.props.buttonList.map(this.renderButton)
        }
      </div>
    );
  }
}

export default RMFormButtonGroup;
