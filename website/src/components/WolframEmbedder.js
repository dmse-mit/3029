import React from 'react';
import * as WolframNotebookEmbedder from 'wolfram-notebook-embedder';

class NotebookEmbed extends React.Component {

  componentDidMount() {
    this.embedding=WolframNotebookEmbedder.embed(
	    this.props.url, 
	    this.el,
	    {
		    allowInteract:true,
		    showRenderProgress: true

	    }
    );
  }

  componentWillUnmount() {
    this.embedding.then(nb => nb.detach());
  }

  render() {
    return <div className="NotebookEmbed" ref={el => this.el = el} />;
  }
}

export default NotebookEmbed;
