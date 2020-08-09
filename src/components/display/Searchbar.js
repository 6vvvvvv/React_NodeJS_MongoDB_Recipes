import React, { Component } from "react";
import "../../static/css/searchbar.css";
import { connect } from "react-redux";

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      data: ["1", "2", "3"],
    };
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { data, text } = this.state;
    const searchResult = data.filter((item) => item.includes(text));

    return (
      <div className="searchbar">
        <input
          type="text"
          id="input"
          className="input"
          placeholder="Search Item..."
          onChange={this.onChange}
          value={this.state.text}
        />
        <div>
          {searchResult.map((item) => (
            <li className="searchitem" key={item.toString()}>
              {item}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showlist: state.displayReducer.showlist,
  targetlist: state.displayReducer.targetlist,
});

export default connect(mapStateToProps, null)(Searchbar);
