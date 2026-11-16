import { Collapse } from "bootstrap/dist/js/bootstrap.esm";

[...document.querySelectorAll(".collapse")].map((e) => {
    new Collapse(e, { toggle: false });
});
