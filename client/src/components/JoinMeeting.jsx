import React from "react";

import { Routes, Route } from "react-router-dom";



class JoinMeeting extends React.Component {
  makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result.match(/.{1,3}/g).join("-");
  }
  state = {
    meetingCode: this.makeid(9)
  }
  onSubmit = e => {
    e.preventDefault();
    if (this.state.meetingCode !== "") this.props.onSubmit(this.state.meetingCode);
  }
  render() {
    return (
      <div className="relative md:h-52 w-full bg-yellow rounded md:rounded-2xl p-3 mt-5">
        <div className="md:absolute bottom-2 left-2 md:bottom-6 md:left-6">
          <p className="md:text-5xl text-3xl text-white">
            Join Meeting
          </p>
          <form id="join-meet-form" onSubmit={e => this.onSubmit(e)} className="w-full max-w-sm">
            <div className="flex items-center border-b border-blue-500 py-2">
              <input className="placeholder-white appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter a code" aria-label="Meeting Code" value={this.state.meetingCode} onChange={e => this.setState({ meetingCode: e.target.value })} />
              <button form="join-meet-form" className="flex-shrink-0 bg-blue hover:bg-blue-700 border-blue hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
};


export default JoinMeeting;