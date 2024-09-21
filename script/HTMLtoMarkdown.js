function HTMLtoMarkdown(h) {
    let m = h;
    let seReplace = [["h1", "# "], ["h2", "## "], ["h3", "### "], ["h4", "#### "], ["h5", "##### "], ["h6", "###### "]];

    for (let i = 0; i < seReplace.length; i++) {
        m = m.replaceAll(`<${seReplace[i][0]}>`, seReplace[i][1]);
        m = m.replaceAll(`</${seReplace[i][0]}>`, `\n`);
    }

    let fReplace = [["<b>", "**"], ["</b>", "**"], ["<em>", "*"], ["</em>", "*"], [`\n`, ""], ["<br/>", `\n`]];
    for (let i = 0; i < fReplace.length; i++) {
        m = m.replaceAll(fReplace[i][0], fReplace[i][1]);
    }
    return m;
}

function updateFromHTML() {
    console.log(document.getElementById("codeSide").value);
    document.getElementById("markDownSide").value = HTMLtoMarkdown(document.getElementById("codeSide").value);
    document.getElementById("htmlSide").innerHTML = document.getElementById("codeSide").value;
}