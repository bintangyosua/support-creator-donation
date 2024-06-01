import React from "react";

export default function SettingIcon({ color }: { color: "black" | "purple" }) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.0003 11.6666C14.8511 11.6666 13.7489 12.1232 12.9362 12.9358C12.1235 13.7485 11.667 14.8507 11.667 16C11.667 17.1492 12.1235 18.2514 12.9362 19.0641C13.7489 19.8767 14.8511 20.3333 16.0003 20.3333C17.1496 20.3333 18.2518 19.8767 19.0645 19.0641C19.8771 18.2514 20.3337 17.1492 20.3337 16C20.3337 14.8507 19.8771 13.7485 19.0645 12.9358C18.2518 12.1232 17.1496 11.6666 16.0003 11.6666Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9065 3.74133C16.6292 3.58722 16.3172 3.50635 15.9999 3.50635C15.6826 3.50635 15.3705 3.58722 15.0932 3.74133L5.4932 9.07466C5.20219 9.23636 4.95972 9.47296 4.79093 9.75991C4.62213 10.0469 4.53315 10.3737 4.5332 10.7067V21.2933C4.5332 21.972 4.9012 22.596 5.4932 22.9253L15.0932 28.2587C15.3705 28.4128 15.6826 28.4936 15.9999 28.4936C16.3172 28.4936 16.6292 28.4128 16.9065 28.2587L26.5065 22.9253C26.7973 22.7637 27.0397 22.5274 27.2085 22.2407C27.3773 21.954 27.4664 21.6274 27.4665 21.2947V10.7067C27.4666 10.3737 27.3776 10.0469 27.2088 9.75991C27.04 9.47296 26.7975 9.23636 26.5065 9.07466L16.9065 3.74133ZM9.66654 16C9.66654 14.3203 10.3338 12.7094 11.5215 11.5217C12.7093 10.3339 14.3202 9.66666 15.9999 9.66666C17.6796 9.66666 19.2905 10.3339 20.4782 11.5217C21.6659 12.7094 22.3332 14.3203 22.3332 16C22.3332 17.6797 21.6659 19.2906 20.4782 20.4783C19.2905 21.6661 17.6796 22.3333 15.9999 22.3333C14.3202 22.3333 12.7093 21.6661 11.5215 20.4783C10.3338 19.2906 9.66654 17.6797 9.66654 16Z"
        fill={color === "purple" ? "#5B5BD6" : "black"}
      />
    </svg>
  );
}
