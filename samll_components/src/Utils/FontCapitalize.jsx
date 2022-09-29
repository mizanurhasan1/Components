import React from "react";

export default function FontCapitalize(text) {
  const capitalized = text.charAt(0).toUpperCase() + text.slice(1);

  return capitalized;
}
