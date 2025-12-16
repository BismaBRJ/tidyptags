document.getElementById("chk_debug")
    .addEventListener(
        "change",
        (event) => set_debug(event)
    );

function set_debug(event) {
    const mode = event.target.checked;
    mode_debug = mode;
}

document.getElementById("chk_del_nbsp")
    .addEventListener(
        "change",
        (event) => {
            mode_del_nbsp = 
                event.target.checked;
        }
    )

document.getElementById("chk_dedup_br")
    .addEventListener(
        "change",
        (event) => {
            mode_dedup_br =
                event.target.checked;
        }
    )

document.getElementById("chk_del_br_near_p")
    .addEventListener(
        "change",
        (event) => {
            mode_del_br_near_p =
                event.target.checked;
        }
    )

document.getElementById("chk_simplify_p")
    .addEventListener(
        "change",
        (event) => {
            mode_simplify_p =
                event.target.checked;
        }
    )

document.getElementById("chk_br_to_close_p")
    .addEventListener(
        "change",
        (event) => {
            mode_br_to_close_p =
                event.target.checked;
        }
    )

document.getElementById("chk_del_spaces_before_p")
    .addEventListener(
        "change",
        (event) => {
            mode_del_spaces_before_p =
                event.target.checked;
        }
    )

document.getElementById("btn_cleanup")
    .addEventListener("click", cleanup_par);

function cleanup_par() {
    const source_par = document.getElementById("box_input").value;
    const clean_par = get_clean_par(source_par);
    if (mode_debug && clean_par === "") { print("Result box empty"); }
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

// using functions defined in tidy_funcs.js
// also taking into account settings.js
function get_clean_par(source_par) {
    if (mode_del_nbsp) {
        if (mode_debug) { print("Removing nbsp"); }
        const no_nbsp = del_nbsp(source_par);
        if (mode_debug && no_nbsp === "") { print("Empty result"); }
    }

    if (mode_dedup_br) {
        if (mode_debug) { print("Deduplicating <br> tags"); }
        const single_br = dedup_br(no_nbsp);
        if (mode_debug && single_br === "") { print("Empty result"); }
    }

    if (mode_del_br_near_p) {
        if (mode_debug) { print("Deleting <br> tags near <p> tags"); }
        const no_br_near_p = del_br_near_p(single_br);
        if (mode_debug && no_br_near_p === "") { print("Empty result"); }
    }

    if (mode_simplify_p) {
        if (mode_debug) { print("Removing <p> tag attributes"); }
        const plain_p = simplify_p(no_br_near_p);
        if (mode_debug && plain_p === "") { print("Empty result"); }
    }

    if (mode_br_to_close_p) {
        if (mode_debug) { print("Splitting paragraphs at <br> tags"); }
        const all_p = br_to_close_p(plain_p);
        if (mode_debug && all_p === "") { print("Empty result"); }
    }

    if (mode_del_spaces_before_p) {
        if (mode_debug) { print("Dedenting <p> tags"); }
        const left_p = del_spaces_before_p(all_p);
        if (mode_debug && left_p === "") { print("Empty result"); }
    }

    if (mode_debug) { print("Finishing cleaning..."); }
    const result = left_p;
    return result;
}

