function markdownToHTML(m) {
    let h = "";

    let lines = m.split(/\n/);

    for (var i = 0; i < lines.length; i++) {
        let heading = false;
        let hashes = ["# ", "## ", "### ", "#### ", "#####", "######"];
        for (var l = 6; l > 0; l--) {
            if (lines[i].substring(0, l+1) == hashes[l-1]) {
                h += headingFromLine(lines[i], l);
                heading = true;
            }
        }
        if (!heading) {
            h += `${lines[i]}<br/>`;
        }
    }

    h = replaceEvenOccurrence(h, "\\*\\*", "b");
    h = replaceEvenOccurrence(h, "\\*", "em");
    console.log(h);

    return h;
}

function headingFromLine(line, level) {
    return `<h${level}>${line.substring(level + 1, line.length)}</h${level}>`;
}

function update() {
    document.getElementById("htmlSide").innerHTML = markdownToHTML(document.getElementById("markDownSide").value);
}

function replaceEvenOccurrence(str, pattern, tag) {
    let count = 0;
    return str.replace(new RegExp(pattern, 'g'), (match) => {
        count++;

        if (count % 2 == 0) {
            return `</${tag}>`;
        }
        
        return `<${tag}>`;

    })
}