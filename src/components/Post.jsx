import React from "react";

function Post() {
    return (
        <div className="post">
			<div className = "image">
				<img src="https://cdn.theatlantic.com/thumbor/FPTWEk2jCD_GOlSx-Q3p04tDPOk=/302x50:4317x2308/1600x900/media/img/mt/2014/08/shutterstock_187027727-1/original.jpg"/>
			</div>
			<div className="text">
				<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
				<p className="info">
					<a className="author">John Doe</a>
					<time>2023-01-06 20:26</time>
				</p>
				<p className="Summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quia consectetur? Officia laboriosam quos quae error animi accusamus voluptate.
				</p>
			</div>
	  	</div>
    );
}

export default Post;