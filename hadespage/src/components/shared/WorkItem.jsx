import React from "react";

function WorkItem({ title, icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-sky-dark hover:bg-sky-accentDark rounded-xl shadow-md transition duration-300 transform hover:scale-105 flex flex-col"
    >
      {/* Imagen */}
      <div className="mb-4 h-32 w-full overflow-hidden rounded-lg flex items-center justify-center border border-sky-accent">
        <img
          src={icon}
          alt={title}
          className="h-full w-full object-contain p-2"
        />
      </div>

      {/* Título */}
      <h3 className="text-xl font-semibold text-textStage-mid mt-2 hover:text-sky-accent">
        {title}
      </h3>

      {/* Texto inferior */}
      <div className="h-10 flex items-end">
        <p className="text-sm text-textStage-start font-medium mt-2 hover:text-textStage-end">
          Ver proyecto &rarr;
        </p>
      </div>
    </a>
  );
}

export default WorkItem;