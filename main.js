function get_clean_par(source_par) {
    let no_nbsp = source_par;
    while ( no_nbsp.indexOf("&nbsp;") != -1 ) {
        no_nbsp = no_nbsp.replaceAll("&nbsp;", "");
    }
    
    let single_br = no_nbsp;
    while ( single_br.search(/<br>\s*<br>/) != -1 ) {
        single_br = single_br.replace(/(\s*)<br>(\s*)<br>(\s*)/, "$1<br>$3");
    }
    
    // let no_p_br = single_br.replaceAll(/<p>(\s*?)<br>(\s*?)/, "<p>$1");
    
    // let no_p_br_p = no_p_br.replaceAll();
    
    // let plain_p = single_br.replaceAll(/<p [^>]*?>/, "<p>");
    
    // let all_p = no_p_br.replaceAll(/(\s+)<br>(\s+)/, "$1</p>\n<p>$2");
    
    let result = single_br;
    return result;
}

function cleanup_par() {
    let source_par = document.getElementById("input_box").value;
    let clean_par = get_clean_par(source_par);
    document.getElementById("result_box").textContent = clean_par;
}
