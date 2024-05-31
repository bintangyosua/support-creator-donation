import React from "react";

export default function Dollar({ color }: { color: "black" | "purple" }) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.9996 1.37439C7.47434 1.37439 1.37402 7.4747 1.37402 15C1.37402 22.5253 7.47434 28.6256 14.9996 28.6256C22.525 28.6256 28.6253 22.5253 28.6253 15C28.6253 7.4747 22.525 1.37439 14.9996 1.37439ZM16.1762 22.3875V24.3066H14.3406V22.4091C11.3284 21.9966 10.0093 19.5216 10.0093 19.5216L11.8843 17.9531C11.8843 17.9531 13.0815 20.0372 15.2471 20.0372C16.4434 20.0372 17.3509 19.3969 17.3509 18.3028C17.3509 15.7453 10.4603 16.0556 10.4603 11.311C10.4603 9.24845 12.0915 7.76251 14.3396 7.41095V5.49376H16.1753V7.41095C17.7428 7.6172 19.599 8.4422 19.599 10.2169V11.5781H17.1653V10.9181C17.1653 10.2375 16.2981 9.78376 15.3278 9.78376C14.0903 9.78376 13.1837 10.4025 13.1837 11.2688C13.1837 13.8881 20.0743 13.2488 20.0743 18.2203C20.0743 20.2641 18.5481 22.036 16.1762 22.3875Z"
        fill={color === "purple" ? "#5B5BD6" : "black"}
      />
    </svg>
  );
}