import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class RMDetail extends Component {
  static defaultProps = {
    detailList: [],
    hasBorderBottom: false,
    itemPaddingTop: '5px',
    itemPaddingBottom: '5px',
    labelColor: '#666',
    valueColor: '#333',
  };

  static propTypes = {
    detailList: PropTypes.array, // 数据数组
    hasBorderBottom: PropTypes.bool, // 每行是否有下border
    itemPaddingTop: PropTypes.string, // 每行的上padding
    itemPaddingBottom: PropTypes.string, // 每行的下padding
    labelColor: PropTypes.string, // label字体颜色
    valueColor: PropTypes.string, // value字体颜色
  };

  renderValueContent = (item) => {
    switch (item.type) {
      case 'time':
        return (
          <p>{
            moment(item.value * 1000).format('YYYY-MM-DD HH:mm:ss')
          }
          </p>
        );
      case 'paragragh':
        return (
          <div>{
            (item.value.split('\n')).map(value => (
              <p>{value}</p>
            ))
          }
          </div>
        );
      default:
        return (
          <p>{item.value}</p>
        );
    }
  }

  render() {
    const itemStyle = {
      paddingTop: this.props.itemPaddingTop,
      paddingBottom: this.props.itemPaddingBottom,
    };
    const labelStyle = {
      color: this.props.labelColor,
    };
    const valueStyle = {
      color: this.props.valueColor,
    };
    return (
      <div className="rm-detail-list">
        {
          this.props.detailList.map(item => (
            <div key={item.label} className={this.props.hasBorderBottom ? 'rm-detail-item hasLine' : 'rm-detail-item'} style={itemStyle}>
              <div className="rm-detail-item-l" style={labelStyle}>
                {item.label}：
              </div>
              <div className="rm-detail-item-r" style={valueStyle}>
                {
                  this.renderValueContent(item)
                }
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default RMDetail;
