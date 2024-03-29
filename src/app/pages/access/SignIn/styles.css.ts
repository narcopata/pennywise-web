import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexDirection: "column",
	maxWidth: "40%",
	paddingLeft: "3rem",
	marginTop: "5%",
});

export const form = style({
	display: "flex",
	flexDirection: "column",
});

export const label = style({
	marginTop: "0.6rem",
});

export const input = style({
	marginTop: "0.4rem",
	borderColor: "#adb5bd",
	borderWidth: "1px",
	outline: "2px solid transparent",
	outlineOffset: "2px",
	borderRadius: ".5rem",
	height: "2rem",
	paddingLeft: ".75rem",
	paddingRight: ".75rem",
});

export const button = style({
	marginTop: "1rem",
	color: "white",
	backgroundColor: "#212121",
	fontWeight: 600,
	paddingLeft: "1.5rem",
	paddingRight: "1.5rem",
	borderRadius: "1rem",
	height: "3rem",
	cursor: "pointer",
	borderWidth: "0",
});
