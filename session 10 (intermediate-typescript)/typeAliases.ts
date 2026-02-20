// Create reusable union and intersection types
type Status = "pending" | "success" | "failed";

type Draggable = {
	drag: () => void
}

type Resizable = {
	resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
	drag: () => { console.log('Dragging') },
	resize: () => { console.log('Resizing'); }
};