// Створіть змінну, яка може містити або рядок, або число(union type) ?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).

let zminna1: string | number;
zminna1 = 34;
console.log(zminna1);

let zminna2: "enable" | "disable";
zminna2 = "enable";
console.log(zminna2);
