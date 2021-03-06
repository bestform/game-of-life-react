import React from "react";

type props = {
  value: number;
  index: number;
  rowBeginning: boolean;
  firstRow: boolean;
  update: (ind: number) => void;
  updateEnter: (ind: number) => void;
};

class Cell extends React.Component<props> {
  getClassName = () => {
    return "cell" + this.props.value;
  };

  getStyles = () => {
    const styles = {
      width: "20px",
      height: "20px",
      borderRight: "1px solid #26a69a",
      borderBottom: "1px solid #26a69a",
      borderTop: this.props.firstRow ? "1px solid #26a69a" : "",
      borderLeft: this.props.rowBeginning ? "1px solid #26a69a" : "",
      borderCollapse: "collapse" as const,
      float: "left" as const,
      backgroundColor: this.props.value === 0 ? "#ffffff" : "#000000",
      clear: this.props.rowBeginning ? ("both" as const) : ("none" as const)
    };

    return styles;
  };

  render = () => {
    return (
      <div
        style={this.getStyles()}
        className={this.getClassName()}
        onMouseDown={() => {
          this.props.update(this.props.index);
        }}
        onMouseEnter={() => {
          this.props.updateEnter(this.props.index);
        }}
      ></div>
    );
  };
}

export default Cell;
