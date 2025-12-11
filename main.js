document.getElementById("btn_cleanup")
    .addEventListener("click", cleanup_par);

function cleanup_par() {
    let source_par = document.getElementById("box_input").value;
    let clean_par = get_clean_par(source_par);
    document.getElementById("box_result").textContent = clean_par;
}

// using functions defined in tidy.js
function get_clean_par(source_par) {
    let no_nbsp = del_nbsp(source_par);
    let single_br = dedup_br(no_nbsp);
    let no_br_near_p = del_br_near_p(single_br);
    let plain_p = simplify_p(no_br_near_p);
    let all_p = br_to_close_p(plain_p);
    let left_p = del_spaces_before_p(all_p);
        
    let result = left_p;
    return result;
}

