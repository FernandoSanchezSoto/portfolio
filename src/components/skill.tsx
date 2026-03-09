interface SkillProps {
    name: string;
}

export function Skill({name}: SkillProps) {
    return (
        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-mauve-900 text-white cursor-default hover:bg-mauve-700 shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-100">
            <p className="text-base italic text-white">{name}</p>
        </div>
    );
}