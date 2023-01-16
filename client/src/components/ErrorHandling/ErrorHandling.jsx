import React from "react";

function ErrorHandling({ title, description, location, date, image }) {
  return (
    <p className="flex justify-center font-bold text-red-600">
      {title
        ? "❌ You gotta give it a title! ❌"
        : description
        ? "❌ C'mooon... Tell the world about it! ❌"
        : location
        ? "❌ How else would people stalk you? ❌"
        : date
        ? "❌ Are you sure that date is correct?❌ "
        : image
        ? "❌ I know it's hard... But I need a better picture ❌"
        : "❌ Error!! Error!! Something is amiss ❌"}
    </p>
  );
}

export default ErrorHandling;
