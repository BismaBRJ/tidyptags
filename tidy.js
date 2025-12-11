// delete all occurences of "&nbsp;"
function del_nbsp(par) {
    let new_par = par;
    while ( new_par.indexOf("&nbsp;") != -1 ) {
        new_par = new_par.replaceAll(
            "&nbsp;", ""
        );
    }
    return new_par;
}

// deduplicate <br> tags
function dedup_br(par) {
    let new_par = par;
    while ( new_par.search(/<br>\s*<br>/) != -1 ) {
        new_par = new_par.replace(
            /(\s*)<br>(\s*)<br>(\s*)/,
            "$1<br>$3"
        );
    }
    return new_par;
}

// delete <br> tags near the beginning/end of <p> tags
function del_br_near_p(par) {
    let new_par = par;
    new_par = new_par.replaceAll(
        /<p>(\s*?)<br>(\s*?)/,
        "<p>$1"
    );
    new_par = new_par.replaceAll(
        /(\s*?)<br>(\s*?)</p>/,
        "</p>"
    );
    return new_par;
}

// remove all attributes of <p> tags
function simplify_p(par) {
    let new_par = par;
    new_par = new_par.replaceAll(
        /<p [^>]*?>/g,
        "<p>"
    );
    return new_par;
}

// turn <br> tags into <p> tags
// so that paragraphs are actually separated by <p> tags rather than <br> tags
function br_to_close_p(par) {
    let new_par = par;
    new_par = new_par.replaceAll(
        /(\s+)<br>(\s+)/g,
        "$1</p>\n<p>$2"
    );
    return new_par;
}

