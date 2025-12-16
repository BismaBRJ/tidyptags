document.getElementById("chk_debug")
    .addEventListener(
        "change",
        (event) => set_debug(event)
    );

function set_debug(event) {
    const mode = event.target.checked;
    debug_mode = mode;
}

document.getElementById("btn_cleanup")
    .addEventListener("click", cleanup_par);

function cleanup_par() {
    const source_par = document.getElementById("box_input").value;
    const clean_par = get_clean_par(source_par);
    if (debug_mode && clean_par === "") { print("Result box empty"); }
    document.getElementById("box_result").value = clean_par;
}

document.getElementById("btn_clear_result")
    .addEventListener("click", clear_result);

document.getElementById("btn_clear_all")
    .addEventListener("click", clear_all);

function clear_input() {
    document.getElementById("box_input").value = "";
}

function clear_result() {
    document.getElementById("box_result").value = "";
}

function clear_all() {
    clear_input();
    clear_result();
}

// using functions defined in tidy.js
function get_clean_par(source_par) {
    if (debug_mode) { print("Removing nbsp"); }
    const no_nbsp = del_nbsp(source_par);
    if (debug_mode && no_nbsp === "") { print("Empty result"); }

    if (debug_mode) { print("Deduplicating <br> tags"); }
    const single_br = dedup_br(no_nbsp);
    if (debug_mode && single_br === "") { print("Empty result"); }

    if (debug_mode) { print("Deleting <br> tags near <p> tags"); }
    const no_br_near_p = del_br_near_p(single_br);
    if (debug_mode && no_br_near_p === "") { print("Empty result"); }
    
    if (debug_mode) { print("Removing <p> tag attributes"); }
    const plain_p = simplify_p(no_br_near_p);
    if (debug_mode && plain_p === "") { print("Empty result"); }

    if (debug_mode) { print("Splitting paragraphs at <br> tags"); }
    const all_p = br_to_close_p(plain_p);
    if (debug_mode && all_p === "") { print("Empty result"); }

    if (debug_mode) { print("Dedenting <p> tags"); }
    const left_p = del_spaces_before_p(all_p);
    if (debug_mode && left_p === "") { print("Empty result"); }

    if (debug_mode) { print("Finishing cleaning..."); }
    const result = left_p;
    return result;
}

