import Button from "./Button.jsx";
export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="flex flex-col w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl xs:w-100 xs:px-6">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 xs:text-sm">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8 grow overflow-y-auto">
        {
          //we map this array so every item is displayed as an jsx element
          projects.map((project) => {
            let cssClasses =
              "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";

            if (project.id === selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200"; //highlighting the selected element
            } else {
              cssClasses += " text-stone-400 ";
            }
            //the root item in which were mapping should always contain a key
            return (
              <li key={project.id}>
                <button
                  className={cssClasses}
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            );
          })
        }
      </ul>
    </aside>
  );
}
