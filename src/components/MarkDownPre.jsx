/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { marked } from "marked";

const getfirstMarkdown = () => `
# Welcome to Markdown Previewer!

## This is a sub-heading...
### And here's some other stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLineup, lastLineup) {
if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {
 return multiLineCode;
 }
}
\`\`\`

You can also make text **bold**... 
Or _italic_.
Or... **_both!_**

There's also [links](https://www.google.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.google.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
 - Some are bulleted.
 - With different indentation levels.
 - That look like this.
`;

const MarkDownPre = () => {
  const [markdown, setMarkdown] = useState(getfirstMarkdown());

  useEffect(() => {
    setMarkdown(getfirstMarkdown());
  }, []);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleMarkdownChange}
        />
        <div id="preview" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default MarkDownPre;
