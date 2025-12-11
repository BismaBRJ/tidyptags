document.getElementById("btn_cleanup")
    .addEventListener("click", cleanup_par);

function cleanup_par() {
    const source_par = document.getElementById("box_input").value;
    const clean_par = get_clean_par(source_par);
    document.getElementById("box_result").textContent = clean_par;
}

// using functions defined in tidy.js
function get_clean_par(source_par) {
    const no_nbsp = del_nbsp(source_par);
    const single_br = dedup_br(no_nbsp);
    const no_br_near_p = del_br_near_p(single_br);
    const plain_p = simplify_p(no_br_near_p);
    const all_p = br_to_close_p(plain_p);
    const left_p = del_spaces_before_p(all_p);
        
    const result = left_p;
    return result;
}

