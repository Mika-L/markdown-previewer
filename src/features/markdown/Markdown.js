import React from 'react';

class Markdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            textInput: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
        };

        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFocus(event) {
        this.setState(
            {
                textInput: event.target.value
            });

        console.log(this.state.textInput);
    }

    render() {
        return <div style={{ margin: 'auto', width: '30%', textAlign: 'center' }}>
            <textarea id="editor" onFocus={this.handleFocus} onChange={this.handleFocus} >
                {this.state.textInput}
            </textarea>
            <div id="preview" style={{width: '100%'}} dangerouslySetInnerHTML={{__html: window.marked.parse(this.state.textInput)}} >
            </div>
        </div>;
    }

}

export default Markdown;