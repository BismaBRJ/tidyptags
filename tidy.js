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

