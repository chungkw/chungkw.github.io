import { Popover } from "bootstrap/dist/js/bootstrap.esm";

[...document.querySelectorAll('[data-bs-toggle="popover"]')].map((e) => {
    new Popover(e);
});
