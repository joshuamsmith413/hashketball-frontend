import React from 'react';
import ShowModal from './ShowModal'


class PlayerCard extends React.Component {

	fullName = () => {
		return `${this.props.player.f_name} ${this.props.player.l_name}`
	}

	render(){
		console.log(this.props.player)
		return(
			<div className="card" id={this.props.player.api_id}>
		    <div className="content">
		      <div className="header">
		        {this.fullName()}
		      </div>
		      <div className="meta">
		        Postion: {this.props.player.position}
		      </div>
		      <div className="description">
		        Stuff goes here
		      </div>
		    </div>
		    <div className="extra content">
		      <div className="ui two buttons">
		        <div className="ui basic green button" onClick={this.props.draftPlayer} id={this.props.player.api_id}>Draft</div>
		        <ShowModal id={this.props.player.api_id} player={this.props.player} />
		      </div>
		    </div>
		  </div>
		)
	}
}

export default PlayerCard;
