use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn test() {
    alert("Rust is working!");
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
