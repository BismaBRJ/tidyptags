document.getElementById("btn_cleanup")
    .addEventListener("click", cleanup_par);

function cleanup_par() {
    let source_par = document.getElementById("box_input").value;
    let clean_par = get_clean_par(source_par);
    document.getElementById("box_result").textContent = clean_par;
}

function get_clean_par(source_par) {
    let no_nbsp = del_nbsp(source_par);
    let single_br = dedup_br(no_nbsp);

    // let no_p_br = single_br.replaceAll(/<p>(\s*?)<br>(\s*?)/, "<p>$1");
    
    // let no_p_br_p = no_p_br.replaceAll();
    
    // let plain_p = single_br.replaceAll(/<p [^>]*?>/, "<p>");
    
    // let all_p = no_p_br.replaceAll(/(\s+)<br>(\s+)/, "$1</p>\n<p>$2");
    
    let result = single_br;
    return result;
}

