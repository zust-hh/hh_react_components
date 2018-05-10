import React from "react"
import PropTypes from "prop-types"
import { Flex } from 'antd-mobile';
import 'antd-mobile/lib/flex/style/css'; 

const rateStyles = {
  position: "relative",
  display: "inline-block",
}

const hollowStyles = {
  position: "absolute",
  display: "inlin-block",
  top: 0,
  left: 0,
  width: 0,
  overflow: "hidden",
}
class Star extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      stars: new Array(props.length - 0).fill("★"),
      hollow: new Array(props.length - 0).fill("☆"),
      styleObject: {},
      nums: [0.5,1,1.5,2,2.5,3,3.5,4,4.5,5],
    }
    this.styleFont = {
      color: this.props.theme,
      fontSize: this.props.size ? `${this.props.size}px` : "",
      position: 'absolute',
    }
  }
  setStyle(next) {
    if (next) {
      this.setState((prevState, next) => ({
        styleObject: {
          width: (next.value * next.size + 5 * (Math.round(next.value) - 1)) + "px",
          transition: `width ${next.animate}s`
        }
      }))
    } else {
      this.setState((prevState, props) => ({
        styleObject: {
          width: (this.props.value * this.props.size + 5 * (Math.round(this.props.value) - 1)) + "px",
          transition: `width ${this.props.animate}s`
        }
      }))
    }
  }
  componentDidMount() {
    if (this.props.animate === "0" || this.props.animate === 0) {
      this.setStyle()
    }
    setTimeout(() => {
      this.setStyle()
    })
  }

  componentWillReceiveProps(next) {
    this.setStyle(next)
  }

  render() {
    return (
      <div style={this.styleFont}>
        {this.props.children}
        <Flex style={{ height: '34px', position: 'absolute', opacity: 0, zIndex: 9999 }}>
          {
            this.state.nums.map((num) => (
              <Flex.Item style={{height:'34px',width:`${this.props.size / 2 + 2}px`,paddingRight: '2.5px'}} key={num*2} onClick={() => this.props.changeStarValue(num)}></Flex.Item>
            ))
          }
        </Flex>
        <div style={rateStyles}>
          {this.state.hollow.map((v, i) => {
            return (
              <span
                style={{ marginRight: '5px' }}
                key={i}
              >
                {v}
              </span>
            )
          })}
          <span style={Object.assign({}, hollowStyles, this.state.styleObject)}>
            {this.state.stars.map((v, i) => {
              return (
                <span
                  style={{ marginRight: '5px' }}
                  key={i}
                >
                  {v}
                </span>
              )
            })}
          </span>
        </div>
      </div>
    )
  }
}
Star.defaultProps = {
  value: 0,
  length: 5,
  animate: 0,
  theme: "#fadb14",
  readonly: false,
  changeStarValue: () => {
    console.log('请传入回调函数');
  }
}
Star.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  length: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  animate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  theme: PropTypes.string,
  size: PropTypes.string,
  onRate: PropTypes.func,
  readonly: PropTypes.bool,
  changeStarValue: PropTypes.func,
}
export default Star